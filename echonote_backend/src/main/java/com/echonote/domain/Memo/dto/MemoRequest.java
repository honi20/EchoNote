package com.echonote.domain.Memo.dto;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Builder;
import lombok.Getter;

import java.util.Date;

public class MemoRequest {

    @Getter
    @Builder
    public static class memoDto{
        private long id; // memo_id
        private Date timestamp_start;
        private Date timestamp_end;

    }

}
