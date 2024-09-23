import { useState } from "react";
import { FaPen, FaTextHeight, FaImage, FaShapes, FaStar } from "react-icons/fa"; // 아이콘들
import {
  ToolBarContainer,
  ToolBarHeader,
  ToolBarContent,
  ToolBarButton,
  Title,
  CollapseButton,
  ToolBarIcon,
  SideBarButton,
} from "@components/styles/ToolBar.style";

const ToolBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // 아이콘이 숨겨진 상태 관리

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed); // 상태를 토글하여 아이콘을 숨김/보임
  };

  return (
    <ToolBarContainer>
      {!isCollapsed && (
        <ToolBarHeader>
          <Title>
            2023 Shareholders Meeting
            <FaStar style={{ marginLeft: "10px", color: "gold" }} />
          </Title>
        </ToolBarHeader>
      )}

      <ToolBarContent>
        <ToolBarButton>
          <ToolBarIcon as={FaPen} />
          <ToolBarIcon as={FaTextHeight} />
          <ToolBarIcon as={FaImage} />
          <ToolBarIcon as={FaShapes} />
        </ToolBarButton>
        <SideBarButton>
          <ToolBarIcon as={FaShapes} />
          <ToolBarIcon as={FaShapes} />
          <CollapseButton onClick={toggleCollapse}>
            {isCollapsed ? "펼치기" : "접기"}
          </CollapseButton>
        </SideBarButton>
      </ToolBarContent>
    </ToolBarContainer>
  );
};

export default ToolBar;
