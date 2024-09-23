# gradle 이미지로 빌드만
FROM gradle:7.6.4-jdk-focal AS build

WORKDIR /app

# Gradle 설정 파일을 먼저 복사하고 종속성 설치
COPY build.gradle settings.gradle ./
RUN gradle dependencies --no-daemon || return 0

# 전체 프로젝트 복사 및 빌드
COPY . /app
RUN gradle clean build --no-daemon -x test

# JRE 이미지로 런타임 이미지 생성
FROM openjdk:17-jdk-slim

WORKDIR /app

# 빌드된 JAR 파일 복사
COPY --from=build /app/build/libs/*.jar /app/echonote.jar

EXPOSE 8080
ENTRYPOINT [ "java", "-jar", "/app/echonote.jar" ]