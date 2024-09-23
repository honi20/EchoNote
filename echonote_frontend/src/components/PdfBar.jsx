import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useToggle } from "@hooks/useToggle";
import {
  SidebarContainer,
  SidebarToggleButton,
  ImageContainer,
  DraggableImage,
} from "@components/styles/PdfBar.style";

const PdfBar = () => {
  const { isOpened, toggle } = useToggle(true); // 커스텀 훅 사용 (초기값은 열린 상태)

  const [images, setImages] = useState([
    { id: 1, src: "https://via.placeholder.com/100x150" },
    { id: 2, src: "https://via.placeholder.com/100x150" },
    { id: 3, src: "https://via.placeholder.com/100x150" },
    { id: 4, src: "https://via.placeholder.com/100x150" },
    { id: 5, src: "https://via.placeholder.com/100x150" },
    { id: 6, src: "https://via.placeholder.com/100x150" },
    { id: 7, src: "https://via.placeholder.com/100x150" },
    { id: 8, src: "https://via.placeholder.com/100x150" },
    { id: 9, src: "https://via.placeholder.com/100x150" },
    { id: 10, src: "https://via.placeholder.com/100x150" },
  ]);

  const moveImage = (dragIndex, hoverIndex) => {
    const draggedImage = images[dragIndex];
    const updatedImages = [...images];
    updatedImages.splice(dragIndex, 1);
    updatedImages.splice(hoverIndex, 0, draggedImage);
    setImages(updatedImages);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <SidebarContainer isOpened={isOpened}>
        <ImageContainer>
          {images.map((image, index) => (
            <DraggableItem
              key={image.id}
              index={index}
              id={image.id}
              src={image.src}
              moveImage={moveImage}
            />
          ))}
        </ImageContainer>
      </SidebarContainer>
      <SidebarToggleButton isOpened={isOpened} onClick={toggle}>
        {isOpened ? "닫기" : "열기"}
      </SidebarToggleButton>
    </DndProvider>
  );
};

const DraggableItem = ({ id, src, index, moveImage }) => {
  const [, ref] = useDrag({
    type: "IMAGE",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))}>
      <DraggableImage src={src} />
    </div>
  );
};

export default PdfBar;
