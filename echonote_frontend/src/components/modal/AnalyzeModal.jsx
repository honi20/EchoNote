import {
  AnalyzedSection,
  AnalyzeModalContainer,
  BackgroundColorSection,
  ModalBackdrop,
  ModalHeader,
  ToggleContainer,
  TagButton,
} from "@components/styles/AnalyzeModal.style";
import Github, { GithubPlacement } from "@uiw/react-color-github";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSearchStore } from "@stores/sideBarStore";
import { useNoteStore } from "@stores/noteStore";

const CORLER_HEX = [
  "#d30000",
  "#DB3E00",
  "#FCCB00",
  "#008B02",
  "#006B76",
  "#1273DE",
  "#004DCF",
  "#5300EB",
  "#EB9694",
  "#FAD0C3",
  "#FEF3BD",
  "#C1E1C5",
  "#BEDADC",
  "#C4DEF6",
  "#BED3F3",
  "#D4C4FB",
];

const AnalyzeModal = ({ isOpen, onClose, position, modalType }) => {
  const [isVisible, setIsVisible] = useState(isOpen);
  const {
    currentKeyword,
    setCurrentKeyword,
    isKeyword,
    toggleKeyword,
    keywordColor,
    setKeywordColor,
    isAnalyzed,
    toggleAnalyzed,
  } = useSearchStore();
  const { keywords } = useNoteStore();

  const toggleHandler = () => {
    toggleAnalyzed();
  };

  const toggleKeywordHandler = () => {
    toggleKeyword();
  };

  const toggleTag = (tag) => {
    if (currentKeyword.includes(tag)) {
      setCurrentKeyword(currentKeyword.filter((keyword) => keyword !== tag));
    } else {
      setCurrentKeyword([...currentKeyword, tag]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <ModalBackdrop
      className={isOpen ? "modal open" : "modal"}
      onClick={onClose}
    >
      <AnalyzeModalContainer
        className={isOpen ? "modal open" : "modal"}
        style={{ top: position?.top, left: position?.left }}
        onClick={(e) => e.stopPropagation()}
      >
        {modalType === "음성" ? (
          <ModalHeader>
            <span>음성 분석</span>
            <ToggleContainer onClick={toggleHandler}>
              <div
                className={`toggle-container ${
                  isAnalyzed ? "toggle--checked" : null
                }`}
              />
              <div
                className={`toggle-circle ${
                  isAnalyzed ? "toggle--checked" : null
                }`}
              />
            </ToggleContainer>
          </ModalHeader>
        ) : (
          <>
            <ModalHeader>
              <span>키워드 분석</span>
              <ToggleContainer onClick={toggleKeywordHandler}>
                <div
                  className={`toggle-container ${
                    isKeyword ? "toggle--checked" : null
                  }`}
                />
                <div
                  className={`toggle-circle ${
                    isKeyword ? "toggle--checked" : null
                  }`}
                />
              </ToggleContainer>
            </ModalHeader>
            <AnalyzedSection>
              {keywords.map((keyword) => (
                <TagButton
                  key={keyword}
                  onClick={() => toggleTag(keyword)}
                  isSelected={currentKeyword.includes(keyword)} // currentKeyword에 있는지 확인
                >
                  {keyword}
                </TagButton>
              ))}
            </AnalyzedSection>
          </>
        )}
        <ModalHeader>텍스트 설정</ModalHeader>
        <BackgroundColorSection>
          <Github
            color={keywordColor}
            colors={CORLER_HEX}
            placement={GithubPlacement.TopLeft}
            style={{
              "--github-background-color": `#414141`,
              "--github-border": "none",
              "--github-box-shadow": "none",
              "--github-arrow-border-color": "rgba(0, 0, 0, 0)",
            }}
            onChange={(color) => {
              setKeywordColor(color.hex);
            }}
          />
        </BackgroundColorSection>
      </AnalyzeModalContainer>
    </ModalBackdrop>
  );
};

AnalyzeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  position: PropTypes.object,
  modalType: PropTypes.string.isRequired,
};

export default AnalyzeModal;
