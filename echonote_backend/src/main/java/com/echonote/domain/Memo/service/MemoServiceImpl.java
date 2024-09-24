package com.echonote.domain.Memo.service;

import com.echonote.domain.Memo.dao.MemoRepository;
import com.echonote.domain.Memo.entity.Memo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemoServiceImpl implements MemoService {

    private final MemoRepository memoRepository;

    // MongoDB에 메모 추가
    @Override
    public void insertMemo(Memo list) {
        memoRepository.insert(list);
    }

    // 메모 업데이트
    @Override
    public void saveMemo(Memo list){
        memoRepository.save(list);
    }

    // 메모 삭제하기
    @Override
    public void deleteMemo(long id){
        memoRepository.deleteById(id);
    }

    // 특정 ID로 데이터를 가져오기
    @Override
    public Memo findById(long id) {
        return memoRepository.findById(id).orElse(null);
    }

}
