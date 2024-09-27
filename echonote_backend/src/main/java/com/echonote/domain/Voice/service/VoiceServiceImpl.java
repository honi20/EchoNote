package com.echonote.domain.Voice.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.echonote.domain.Memo.entity.Memo;
import com.echonote.domain.Voice.dao.STTRepository;
import com.echonote.domain.Voice.dto.STTRequest;
import com.echonote.domain.Voice.entity.STT;
import com.mongodb.DuplicateKeyException;
import com.mongodb.client.result.UpdateResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.amazonaws.HttpMethod;
import com.amazonaws.services.s3.AmazonS3;
import com.echonote.domain.Voice.dto.S3SaveResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Slf4j
public class VoiceServiceImpl implements VoiceService {

	@Autowired
	private AmazonS3 amazonS3;

	private final STTRepository sttRepository;

	public S3SaveResponse generatePreSignUrl(String filePath,
		String bucketName,
		HttpMethod httpMethod) {

		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Date());
		calendar.add(Calendar.MINUTE, 10); //validfy of 10 minutes

		S3SaveResponse res = new S3SaveResponse();
		res.setPresignedUrl(
			amazonS3.generatePresignedUrl(bucketName, filePath, calendar.getTime(), httpMethod).toString());

		return res;
	}

	// STT Service
	private final MongoTemplate mongoTemplate;

	public void insertSTT(STT stt){
		try {
			STT insert = sttRepository.insert(stt);
			log.info("Inserted STT with ID: " + insert.getId());
		} catch (DuplicateKeyException e) {
			log.error("STT with this ID already exists.");
		} catch (Exception e) {
			log.error("An error occurred while inserting STT: " + e.getMessage());
		}

	}
	public STT getSTT(long id){
		Optional<STT> stt = sttRepository.findById(id);

		if (stt != null) {
			log.info("Found STT: " + stt);
		} else {
			log.warn("STT not found with ID: " + id);
		}

		return stt.orElse(null);
	}

	public void updateSTT(STT stt){
		long id = stt.getId();

		for(STTRequest sttInfo : stt.getResult()) {

			Query query = new Query(Criteria.where("id").is(id).and("segment.id").is(sttInfo));
			Update update = new Update().set("stt.$.segment", sttInfo.getText());

			try {
				UpdateResult result = mongoTemplate.updateFirst(query, update, STT.class);

				if (result.getMatchedCount() > 0) {
					log.info(id + "번 Note " + sttInfo.getId()+ "번 STT 업데이트");
				} else {
					log.warn(id + "번 Note " + sttInfo.getId()+ "번 STT 업데이트 실패");
				}
			} catch (DataIntegrityViolationException e) {
				log.error("stt 데이터 업데이트 실패: "+e);
			}
		}
	}

	public void deleteSTT(long id, List<Long> sttId){

		for(long stt : sttId) {
			Query query = new Query(Criteria.where("id").is(id).and("memo.id").is(stt));
			Update update = new Update().pull("memo", new Query(Criteria.where("id").is(stt)));

			// 삭제 실행
			try {
				UpdateResult result = mongoTemplate.updateFirst(query, update, Memo.class);

				if (result.getMatchedCount() > 0) {
					log.info(id + "번 Note " + stt+ "번 stt 삭제");
				} else {
					log.warn(id + "번 Note " + stt+ "번 stt 삭제 실패");
				}
			} catch (DataIntegrityViolationException e) {
				log.error("stt 데이터 삭제 실패: "+e);
			}
		}
	}


}
