import { useState } from "react";
import { FaPlay, FaPause, FaTrashAlt, FaPaperPlane } from "react-icons/fa";
import {
  RecordingBarContainer,
  PlayPauseButton,
  Timer,
  IconButton,
} from "@components/styles/RecordingBar.style";
import AudioWave from "@components/AudioWave";

const RecordingBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const audioUrl = "src/assets/test.mp3";

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleDelete = () => {
    console.log("Recording deleted");
    setTime(0); // 녹음 삭제 시 타이머 초기화
  };

  const handleSend = () => {
    console.log("Recording sent");
  };

  return (
    <RecordingBarContainer>
      <PlayPauseButton onClick={togglePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </PlayPauseButton>
      <AudioWave audioUrl={audioUrl} isPlaying={isPlaying} />
      <Timer>{new Date(time * 1000).toISOString().substr(14, 5)}</Timer>
      <IconButton onClick={handleDelete}>
        <FaTrashAlt />
      </IconButton>
      <IconButton onClick={handleSend}>
        <FaPaperPlane />
      </IconButton>
    </RecordingBarContainer>
  );
};

export default RecordingBar;
