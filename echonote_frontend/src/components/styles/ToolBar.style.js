import styled from "styled-components";

// 툴바 전체 컨테이너
export const ToolBarContainer = styled.div`
  width: 100%;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
`;

// 상단 제목과 접기 버튼을 담은 헤더 영역
export const ToolBarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0px;
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(77, 77, 77, 0.1);
`;

// 부드러운 애니메이션을 위한 컨테이너
export const AnimatedToolBarContent = styled.div`
  overflow: hidden;
  max-height: ${({ isCollapsed }) =>
    isCollapsed ? "0" : "300px"}; /* 열릴 때 높이 설정 */
  opacity: ${({ isCollapsed }) =>
    isCollapsed ? "0" : "1"}; /* 숨길 때 투명도 */
  transition: max-height 0.5s ease, opacity 0.5s ease; /* 부드러운 애니메이션 효과 */
`;

// 툴바 내용
export const ToolBarContent = styled.div`
  display: flex;
  justify-content: center; /* ToolBarButton을 중앙에 배치 */
  align-items: center;
  position: relative; /* SideBarButton 위치 고정을 위한 상대 위치 */
  margin-top: 7px;
  margin-bottom: 2px;
  width: 100%;
`;

// 중앙에 위치할 툴바 버튼들
export const ToolBarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px; /* 아이콘 사이 간격 */
`;

// 세로선 (Divider) 컴포넌트
export const Divider = styled.div`
  width: 1px;
  height: 24px; /* 세로선의 높이 */
  background-color: #d3d3d3;
  margin: 0 10px; /* 세로선의 좌우 간격 */
`;

// 아이콘 자체에 대한 스타일
export const ToolBarIcon = styled.div`
  font-size: 15px;
  cursor: pointer;
  margin: 0 5px; /* 좌우 간격 조정 */

  &:hover {
    color: ${(props) => props.theme.colors.iconHover};
  }

  &:active {
    color: ${(props) => props.theme.colors.iconActive};
  }
`;

// 오른쪽에 위치하는 Collapse 버튼 (SideBarButton)
export const SideBarButton = styled.div`
  position: absolute; /* 오른쪽 끝에 고정 */
  right: 0; /* 오른쪽 끝으로 밀어냄 */
  display: flex;
  align-items: center;
`;

export const CollapseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #0070f3;
`;

// 제목 스타일
export const Title = styled.h1`
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textColor};
  margin: 0; /* 여백이 있을 경우 제거 */
`;
