import { useState } from "react";
import {
  STTBarContainer,
  STTBarContent,
  STTBarHeader,
  STTBarSearchRow,
  ToggleSwitch,
  IconButton,
  Divider,
} from "@components/styles/STTBar.style";
import PropTypes from "prop-types";
import { FaPen } from "react-icons/fa";
import SearchBar from "@components/common/SearchBar";

const STTBar = ({ isOpened }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <STTBarContainer isOpened={isOpened}>
        <STTBarHeader>
          <ToggleSwitch isToggled={isToggled} onClick={handleToggle} />
          <IconButton>
            <FaPen />
          </IconButton>
        </STTBarHeader>
        <STTBarSearchRow>
          <SearchBar />
        </STTBarSearchRow>
        <Divider />
        <STTBarContent>
          <p>이곳에 텍스트가 들어갑니다. STT 관련 내용을 추가할 수 있습니다.</p>
        </STTBarContent>
      </STTBarContainer>
    </>
  );
};

STTBar.propTypes = {
  isOpened: PropTypes.bool.isRequired,
};

export default STTBar;
