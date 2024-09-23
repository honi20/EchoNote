import { useState } from "react";
import { FaPen, FaTextHeight, FaImage, FaShapes, FaStar } from "react-icons/fa";
import { BiWindowAlt, BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { IoMicSharp } from "react-icons/io5";
import {
  Divider,
  ToolBarContainer,
  ToolBarHeader,
  ToolBarContent,
  ToolBarButton,
  Title,
  CollapseButton,
  ToolBarIcon,
  SideBarButton,
  AnimatedToolBarContent, // 애니메이션 적용된 컴포넌트 가져오기
} from "@components/styles/ToolBar.style";

const ToolBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false); // 아이콘이 숨겨진 상태 관리

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed); // 상태를 토글하여 아이콘을 숨김/보임
  };

  return (
    <ToolBarContainer>
      <AnimatedToolBarContent isCollapsed={isCollapsed}>
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
          <ToolBarIcon as={BiWindowAlt} />
          <CollapseButton onClick={toggleCollapse}>
            {isCollapsed ? (
              <ToolBarIcon as={BiChevronsDown} />
            ) : (
              <ToolBarIcon as={BiChevronsUp} />
            )}
          </CollapseButton>
        </SideBarButton>
      </ToolBarContent>
    </ToolBarContainer>
  );
};

export default ToolBar;
