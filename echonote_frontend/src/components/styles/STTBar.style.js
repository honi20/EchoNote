import styled from "styled-components";
import { shouldNotForwardPropsWithKeys } from "@shared/utils/shouldForwardProp";

// STTBar 컨테이너
export const STTBarContainer = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys(["isOpened"]),
})`
  position: absolute;
  right: ${(props) => (props.isOpened ? "0" : "-300px")};
  top: 0;
  height: 100%;
  width: 300px;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease;
`;

// 헤더 스타일
export const STTBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #ccc;
`;

// 검색 바가 위치하는 행 스타일
export const STTBarSearchRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  justify-content: end; // 검색 바를 중앙에 정렬
`;

// ToggleSwitch 및 IconButton 스타일 유지

export const ToggleSwitch = styled.div.withConfig({
  shouldForwardProp: shouldNotForwardPropsWithKeys(["isToggled"]),
})`
  position: relative;
  width: 50px;
  height: 25px;
  background-color: ${(props) => (props.isToggled ? "#4cd137" : "#ccc")};
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    top: 2.5px;
    left: ${(props) => (props.isToggled ? "calc(100% - 22.5px)" : "2.5px")};
    transition: left 0.3s ease;
  }
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #ccc;
`;

export const STTBarContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
`;
