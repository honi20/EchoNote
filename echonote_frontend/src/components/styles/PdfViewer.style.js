import { styled } from "styled-components";
import { theme } from "@/shared/styles/theme";

export const PdfPage = styled.div`
  display: flex;
  margin: auto;
  z-index: 1;
`;

export const PdfContainer = styled.div`
  display: flex;
  overflow: auto;
  height: 100vh;
  background-color: ${theme.colors.articleDivider};
`;

//임시 버튼 컨테이너
export const ButtonContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  gap: 10px;
  margin-top: 10px;
  width: 80px;
  height: 40px;
`;
