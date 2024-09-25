import { useState } from "react";
import { FaPen, FaTextHeight, FaImage, FaShapes, FaStar } from "react-icons/fa";
import {
  BiWindowAlt,
  BiWindow,
  BiChevronsDown,
  BiChevronsUp,
} from "react-icons/bi";
import { IoMicSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import {
  Divider,
  ToolBarContainer,
  ToolBarHeader,
  ToolBarContent,
  ToolBarButton,
  Title,
  CollapseIcon,
  PdfIcon,
  ToolBarIcon,
  SideBarButton,
  AnimatedToolBarContent,
  STTIcon,
} from "@components/styles/ToolBar.style";

const ToolBar = ({
  togglePdfBar,
  toggleSTTBar,
  isPdfBarOpened,
  isSTTBarOpened,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <ToolBarContainer>
      <AnimatedToolBarContent collapsed={isCollapsed}>
        <ToolBarHeader>
          <Title>
            pdf file name
            <FaStar style={{ marginLeft: "10px", color: "gold" }} />
          </Title>
        </ToolBarHeader>
      </AnimatedToolBarContent>

      <ToolBarContent>
        <ToolBarButton>
          <ToolBarIcon as={IoMicSharp} />
          <Divider />
          <ToolBarIcon as={FaPen} />
          <ToolBarIcon as={FaTextHeight} />
          <ToolBarIcon as={FaImage} />
          <ToolBarIcon as={FaShapes} />
        </ToolBarButton>
        <SideBarButton>
          <PdfIcon
            as={BiWindowAlt}
            onClick={togglePdfBar}
            isPdfBarOpened={isPdfBarOpened}
          />
          <STTIcon
            as={BiWindow}
            onClick={toggleSTTBar}
            isSTTBarOpened={isSTTBarOpened}
          />
          {isCollapsed ? (
            <CollapseIcon
              as={BiChevronsUp}
              onClick={toggleCollapse}
              isCollapsed={isCollapsed}
            />
          ) : (
            <CollapseIcon
              as={BiChevronsDown}
              onClick={toggleCollapse}
              isCollapsed={isCollapsed}
            />
          )}
        </SideBarButton>
      </ToolBarContent>
    </ToolBarContainer>
  );
};

// prop-types를 사용하여 props의 유효성 검사 추가
ToolBar.propTypes = {
  togglePdfBar: PropTypes.func.isRequired,
  toggleSTTBar: PropTypes.func.isRequired,
  isPdfBarOpened: PropTypes.bool.isRequired,
  isSTTBarOpened: PropTypes.bool.isRequired,
};

export default ToolBar;
