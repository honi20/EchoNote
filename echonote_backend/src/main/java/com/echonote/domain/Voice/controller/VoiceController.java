package com.echonote.domain.Voice.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amazonaws.HttpMethod;
import com.echonote.domain.Voice.Service.VoiceServiceImpl;
import com.echonote.domain.Voice.dto.S3SaveResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class VoiceController {
	private final VoiceServiceImpl voiceService;

	@Value("${amazon.aws.bucket}")
	private String bucketName;

	// 확장자명에 따라 presigned url 반환
	@GetMapping("/api/generate-presigned-url")
	public ResponseEntity<S3SaveResponse> generatePresignedUrl() {

		S3SaveResponse response = voiceService.generatePreSignUrl(UUID.randomUUID() + ".wav", bucketName,
			HttpMethod.PUT);

		return new ResponseEntity<>(response, HttpStatus.OK);
	}
}
