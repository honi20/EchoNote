# 기술 테스트

## STT
### whisper
[🔗whisper github](https://github.com/openai/whisper)



tiny, tiny.en, base, base.en, small, medium 모델에 대해서 Speach to Text 테스트 진행. medium 모델의 경우 시간이 과도하게 소요되기 때문에 사용이 어려울 것으로 판단됨.


>To efficiently manage the database, we integrated the SQL queries with the new SDK for seamless data access and manipulation.



위의 문장이 녹음된 mp3 파일을 넣어보았을 때, tiny, tiny.en, base 모델의 경우 'efficiently'를 'officially'로 추출하였고 base.en과 small 모델은 정확하게 추출함을 확인함. 



문장이 정확하게 나뉘지는 않지만 타임라인도 함께 추출된다는 장점이 있음. 정확한 문장 분리는 따로 처리를 한 번 해줘야 할 것 같음.


# 기능 명세서
[`기능 명세서 바로가기`][functional-specification-url]

# 현업 전문가 리뷰
[`현업 전문가 바로가기`][review-url]

[functional-specification-url]: FUNCTIONAL.md
[review-url]: REVIEW.md