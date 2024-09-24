package com.echonote.domain.Voice.dto;

import lombok.Data;

@Data
public class S3SaveResponse {
	private String presignedUrl;
}
