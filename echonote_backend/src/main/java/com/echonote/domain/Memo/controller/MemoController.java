package com.echonote.domain.Memo.controller;

import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.echonote.domain.Memo.entity.Memo;
import com.echonote.domain.Memo.service.MemoService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/memo")
@RequiredArgsConstructor
@Tag(name = "memo", description = "memo api")
public class MemoController {

	private final MemoService memoService;

	@GetMapping
	@Operation(summary = "MongoDB에 메모 불러옴", description = "Id와 매핑 된 Memo 불러오기")
	public ResponseEntity<Memo> getMemo(@RequestParam long id) {
		Memo list = memoService.findById(id);
		return new ResponseEntity<>(list, HttpStatus.OK);
	}

	@PostMapping
	@Operation(summary = "MongoDB에 메모 저장함", description = "Id와 매핑 된 Memo 불러오기")
	public ResponseEntity<Memo> insertMemo(@RequestBody Memo memo) {
		memoService.insertMemo(memo);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PutMapping
	@Operation(summary = "메모 수정 및 삭제", description = "메모 업데이트, timeStamp는 Nullable. 기존에 있는 memo_id는 업데이트, 새로운 memo_id는 새롭게 추가된다.")
	public ResponseEntity<Memo> updateMemo(@RequestBody Memo memo) {
		memoService.updateMemo(memo);

		return new ResponseEntity<>(HttpStatus.OK);
	}

}
