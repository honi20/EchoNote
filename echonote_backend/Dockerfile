# backend/Dockerfile
FROM openjdk:17-jdk

# Gradle wrapper가 실행될 디렉토리 설정
WORKDIR /app

# 소스 파일 및 Gradle 관련 파일을 복사합니다.
COPY . /app

# 프로젝트 빌드 (만약 gradlew 파일이 프로젝트 루트에 없다면, Gradle 설치가 필요할 수 있음)
RUN ./gradlew build

# Spring Boot 애플리케이션을 실행합니다.
EXPOSE 8080
CMD ["java", "-jar", "/app/build/libs/echonote.jar"]
