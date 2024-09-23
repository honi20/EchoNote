import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: ${(props) => (props.isOpen ? "200px" : "0")};
  transition: width 0.3s;
  height: 100%;
  background-color: #f1f1f1;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-x: hidden;
  white-space: nowrap;
`;

export const SidebarToggleButton = styled.button`
  position: absolute;
  top: 20px;
  left: ${(props) => (props.isOpen ? "200px" : "0")};
  transform: translateX(${(props) => (props.isOpen ? "0" : "-50%")});
  transition: left 0.3s, transform 0.3s;
  background-color: #0070f3;
  border: none;
  color: white;
  padding: 10px;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DraggableImage = styled.img`
  width: 100px;
  height: auto;
  cursor: move;
  border: 1px solid #ccc;
`;
