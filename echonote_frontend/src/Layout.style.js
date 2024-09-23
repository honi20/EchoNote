import styled from "styled-components";

// 레이아웃 컨테이너: 사이드바와 메인 콘텐츠를 배치하는 Flex 레이아웃
export const Layout = styled.div`
  display: flex;
  height: calc(100vh - 60px); /* 툴바의 높이를 제외한 나머지 화면 */
  width: 100%; /* 전체 화면 너비 */
  position: relative; /* 툴바와 독립된 고정 레이아웃 */
  overflow: hidden; /* 넘치는 콘텐츠 방지 */
`;

// 중앙 메인 콘텐츠를 Flex를 사용해 가운데 정렬
export const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: rebeccapurple;
  height: 100%; /* 전체 레이아웃 높이를 차지 */
`;
