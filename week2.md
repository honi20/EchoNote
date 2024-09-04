# 240902 MON

1. 기술 체크
    1. 영상과 음성을 합칠 수 있는가? -> python moviepy 라이브러리
    2. 개발 분야의 기술적 용어와 같은 특정 단어 번역 건너뛰고 번역하기
    
    ```python
    from google.cloud import translate_v2 as translate
    
    # Google Translate 클라이언트 초기화
    def initialize_client(api_key):
        return translate.Client(api_key=api_key)
    
    # 번역 함수: 특정 단어를 건너뛰고 번역
    def translate_text(text, target_language='en', skip_words=None):
        if skip_words is None:
            skip_words = set()
    
        # 텍스트를 단어로 분리
        words = text.split()
        
        # 번역할 단어와 건너뛸 단어로 분리
        words_to_translate = [word for word in words if word not in skip_words]
        words_to_keep = [word for word in words if word in skip_words]
        
        # 번역 API 호출
        client = initialize_client('YOUR_API_KEY')
        
        # 번역 요청
        result = client.translate(' '.join(words_to_translate), target_language=target_language)
        
        # 번역된 텍스트
        translated_text = result['translatedText']
        
        # 번역하지 않은 단어와 합치기
        translated_words = translated_text.split()
        final_text = []
        j = 0
        for word in words:
            if word in skip_words:
                final_text.append(word)
            else:
                final_text.append(translated_words[j])
                j += 1
        
        return ' '.join(final_text)
    
    # 테스트
    text = "To efficiently manage the database, we integrated the SQL queries with the new SDK for seamless data access and manipulation."
    skip_words = {"SQL", "SDK"}  # 번역하지 않을 단어
    translated_text = translate_text(text, target_language='es', skip_words=skip_words)
    print("Translated Text:", translated_text)
    ```
    
    or 생성형 AI?

# 240903 TUE
1. 기능 명세서 작성
https://ciao-m.notion.site/0d5c0cd5bd1a4fcf9ae5fd11c557d766?pvs=4

# 240904 WED
1. ERD 작성
https://www.erdcloud.com/d/FZZHmagg48QkKvJxn
