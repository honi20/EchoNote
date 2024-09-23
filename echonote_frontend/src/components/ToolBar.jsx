import { FaPen, FaTextHeight, FaImage, FaShapes, FaStar } from "react-icons/fa";
import { BiWindowAlt, BiChevronsDown, BiChevronsUp } from "react-icons/bi";
import { IoMicSharp } from "react-icons/io5";
import { useToggle } from "@hooks/useToggle";
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
  const { isOpened, toggle } = useToggle(true); // 훅 사용

  return (
    <ToolBarContainer>
      <AnimatedToolBarContent isOpened={isOpened}>
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
          <CollapseButton onClick={toggle}>
            {isOpened ? (
              <ToolBarIcon as={BiChevronsUp} />
            ) : (
              <ToolBarIcon as={BiChevronsDown} />
            )}
          </CollapseButton>
        </SideBarButton>
      </ToolBarContent>
    </ToolBarContainer>
  );
};

export default ToolBar;
