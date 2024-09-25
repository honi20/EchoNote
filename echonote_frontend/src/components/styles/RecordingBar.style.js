import styled from "styled-components";

export const RecordingBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  position: absolute; /* absolute로 설정 */
  top: 20px; /* MainContent 위쪽에 위치시키기 위한 값 */
  left: 50%;
  transform: translateX(-50%); /* 가로로 중앙에 배치 */
  z-index: 10; /* MainContent보다 위에 위치하도록 z-index 설정 */
`;

export const PlayPauseButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
`;

export const Waveform = styled.div`
  flex-grow: 1;
  margin: 0 10px;
  height: 14px;
  background-color: #e0e0e0;
  border-radius: 10px;
  position: relative;

  .wave {
    position: absolute;
    height: 100%;
    width: 50%;
    background-color: #007bff;
    border-radius: 10px;
    animation: wave-animation 1s infinite ease-in-out;
  }

  @keyframes wave-animation {
    0% {
      width: 0;
    }
    50% {
      width: 50%;
    }
    100% {
      width: 0;
    }
  }
`;

export const Timer = styled.span`
  font-size: 14px;
  color: #007bff;
  min-width: 50px;
  text-align: center;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 16px;
  padding: 0 5px;

  &:hover {
    color: #007bff;
  }
`;
