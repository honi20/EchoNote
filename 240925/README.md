# 240925 기록

# 1. mel scale과 Mel-spectrogram
참고
- https://en.wikipedia.org/wiki/Mel_scale
- https://judy-son.tistory.com/6
- https://velog.io/@eunjnnn/Understanding-the-Mel-Spectrogram
- https://wikidocs.net/193588

연구에 따르면 인간은 주파수를 linear scale (선형 척도) 로 인식하지 못한다고 한다. 그래서 인간의 인식에 맞춰서 주파수를 mel scale로 변환한 것이 Mel-spectrogram이다.

 mel scale은 pitch와 관련있다고 한다. 청취자의 관점에서 feature를 뽑는다면 mel scale을 적용하는 게 맞는 것 같다.

## 코드
```python
import librosa
import librosa.display

data, sample_rate = librosa.load(file_path, sr=16000)

plt.figure(figsize=(10,5))

plt.subplot(122)
d_msp = librosa.feature.melspectrogram(y=data, sr=sample_rate, n_mels=128)
librosa.display.specshow(librosa.power_to_db(d_msp, ref=np.max), sr=sample_rate, y_axis='mel', x_axis='time')
plt.ylim(0, 3000)
plt.title('Mel Spectrogram')

plt.tight_layout()
plt.show()
```

---

# 2. MFCC(Mel-Frequency Cepstral Coefficient)

 Mel-spectrogram에서 추출한 특징들을 기반으로, 소리의 주파수 스펙트럼을 DCT연산으로 압축한 일종의 특징 벡터. 음성 신호의 Cepstral(케프스트럼) 분석을 통해 음향의 특징을 더 간결하게 표현한다. 보통 모델 학습에 MFCC를 이용한다고 한다.

## 코드

```python
import librosa
import librosa.display

data, sample_rate = librosa.load(file_path, sr=16000)

mfcc_f = librosa.feature.mfcc(y=data, sr=sample_rate, n_mfcc=n_mfcc)

librosa.display.specshow(mfcc_f, x_axis='time', sr=sample_rate )
plt.title('MFCC')
plt.show()
```

## Mel-spectrogram과 비교

참고
- https://velog.io/@crosstar1228/AudioMFCC-VS-Mel-Spectrogram
    

- **Mel 스펙트로그램**
    - 시간과 주파수에 따른 음향 에너지를 시각적으로 나타냄
    - 연상량이 많지만 특정 도메인의 학습 데이터에 적합
- **MFCC**
    - 정보를 더 압축하여 신경망이나 다른 기계 학습 모델에서 학습하기 쉬운 특징 벡터로 변환
    - 일반적인 학습 데이터에 적합(서로 연관된 주파수 성분들의 상관관계가 줄어든다.)


# 3. `librosa.feature.mfcc` 파라미터 결정하기
참고
- https://dsp.stackexchange.com/questions/248/how-do-i-optimize-the-window-lengths-in-stft
    

## n_fft
- FFT 크기
- 하나의 프레임에서 변환할 샘플 수를 의미한다.
- 일반적으로 20~25ms 정도의 크기를 사용한다.
- sample rate가 22050Hz일 때 25ms는 대략 551개의 샘플에 해당된다.
    - n_fft = 22050×0.025 = 551.25 ≈ 512 (가장 가까운 2의 거듭제곱)
- 2의 거듭제곱으로 설정하는 것을 권장

## hop_length
- 프레임 간의 간격
    - 작을수록 각 프레임이 많이 겹치게 된다.
    - hop_length가 작을수록 시간 해상도가 높아져 음성 신호의 변화를 더 세밀하게 포착할 수 있다.
    - 반대로 값이 커질수록 계산 속도는 빨라지지만 시간 해상도가 낮아진다.
- 보통 n_fft의 50~70% 사이로 설정된다.
    - n_fft가 512인 경우 hop_length는 256 보다 작은 값으로 설정하면 좋다.

## n_mels
- 멜 필터(주파수 특성을 분석할 때 사용하는 필터 뱅크)의 수
- 기본값은 128
- 일반적으로 40에서 128 사이의 값을 사용한다.
    - **40**: 간단한 분석이나 빠른 처리를 원할 때
    - **64**: 일반적인 음성 인식 작업에 적합
    - **128**: 더 세밀한 주파수 해상도가 필요할 때
> UserWarning: Empty filters detected in mel frequency
basis. Some channels will produce empty responses. Try increasing your sampling
rate (and fmax) or reducing n_mels.
mel_basis = filters.mel(sr=sr, n_fft=n_fft, **kwargs)
> 
이런 경고가 떠서 64로 설정해줬다. 너무 많은 멜 필터를 적용할 경우, 일부 필터가 유효하지 않게 된다고 한다.