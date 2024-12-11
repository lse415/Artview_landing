import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import media from "../../styles/media";

export interface FeatureModalProps {
  feature: {
    detailTitle1: string;
    detailTitle2: string;
    detailTitle3?: string;
    detailInfo1: string;
    detailInfo2: string;
    detailInfo3?: string;
    title: string;
    description: string;
    icon?: JSX.Element;
    image1?: JSX.Element;
    image2?: JSX.Element;
    image3?: JSX.Element;
  };
  onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #333;
  color: #fff;
  width: 60%;
  height: 80%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;

  ${media.mobile} {
    flex-direction: column;
    width: 100%;
    height: 100%;
    border-radius: 0;
    overflow-y: auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${theme.colors.background};
  border-radius: 0 20px 20px 0;
  overflow: hidden;
  ${media.mobile} {
    width: 100%;
    max-height: 75%;
    background-color: ${theme.colors.primary};
    border-radius: 0;
  }
`;

const ModalImage = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.mobile} {
    max-width: 50%;
  }
`;

const ArrowButton = styled.button<{
  position: "left" | "right" | "up" | "down";
}>`
  position: absolute;
  ${({ position }) =>
    position === "up" || position === "left" ? "top: 50%;" : "bottom: 50%;"}
  ${({ position }) =>
    position === "left" || position === "up" ? "left: 10px;" : "right: 10px;"}
  transform: translateY(-50%);
  background-color: rgba(50, 50, 50, 0.8);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(50, 50, 50, 0.6);
  }

  &:disabled {
    display: none;
  }

  ${media.mobile} {
    ${({ position }) =>
      position === "left" || position === "right"
        ? `
      top: 50%;
      bottom: unset;
      left: ${position === "left" ? "10px" : "unset"};
      right: ${position === "right" ? "10px" : "unset"};
    `
        : ""}
    transform: translateY(-50%);
  }
`;

const ModalContent = styled.div`
  padding: 40px;
  text-align: left;
  width: 60%;

  ${media.mobile} {
    width: 90%;
    padding: 20px;
  }
`;

const ModalTitle = styled.h3`
  font-size: ${theme.fonts.title_small};
  margin-bottom: 10px;
`;

const ModalDescription = styled.p`
  font-size: ${theme.fonts.small};

  ${media.mobile} {
    text-align: justify;
  }
`;

const ModalDetail = styled.div`
  margin-top: 15%;

  ${media.mobile} {
    margin-top: 0;
  }
`;

const DetailTitle = styled.h3`
  font-size: 1.5rem;
`;

const DetailInfo = styled.p`
  font-size: ${theme.fonts.small};
  margin-top: 5%;
  word-break: break-word;
  overflow-wrap: break-word; /* 텍스트가 영역을 넘어갈 경우 줄바꿈 */
  white-space: normal; /* 텍스트 줄바꿈을 허용 */
  ${media.mobile} {
    text-align: justify; /* 모바일에서 가독성 향상 */
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 5px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: rgba(50, 50, 50, 0.9);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgba(50, 50, 50, 0.7);
  }

  &:focus {
    outline: none;
  }
`;

const FeatureModal: React.FC<FeatureModalProps> = ({ feature, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [feature.image1, feature.image2, feature.image3].filter(
    (image) => image !== undefined
  );

  const titles = [
    feature.detailTitle1,
    feature.detailTitle2,
    feature.detailTitle3,
  ];
  const infos = [feature.detailInfo1, feature.detailInfo2, feature.detailInfo3];

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isMobile = window.innerWidth <= 480;

  if (isMobile) {
    return (
      <Overlay>
        <ModalContainer>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <ModalContent>
            <ModalTitle>{feature.title}</ModalTitle>
            <ModalDescription>{feature.description}</ModalDescription>
          </ModalContent>
          <ImageContainer>
            {images.length > 0 && (
              <>
                <ArrowButton
                  position="left"
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                >
                  ←
                </ArrowButton>
                <ModalImage>{images[currentIndex]}</ModalImage>
                <ArrowButton
                  position="right"
                  onClick={handleNext}
                  disabled={currentIndex === images.length - 1}
                >
                  →
                </ArrowButton>
              </>
            )}
          </ImageContainer>
          <ModalContent>
            {titles[currentIndex] && infos[currentIndex] && (
              <ModalDetail>
                <DetailTitle>✨{titles[currentIndex]}</DetailTitle>
                <DetailInfo>{infos[currentIndex]}</DetailInfo>
              </ModalDetail>
            )}
          </ModalContent>
        </ModalContainer>
      </Overlay>
    );
  }

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ImageContainer>
          {images.length > 0 && (
            <>
              <ArrowButton
                position="left"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                ←
              </ArrowButton>
              <ModalImage>{images[currentIndex]}</ModalImage>
              <ArrowButton
                position="right"
                onClick={handleNext}
                disabled={currentIndex === images.length - 1}
              >
                →
              </ArrowButton>
            </>
          )}
        </ImageContainer>
        <ModalContent>
          <ModalTitle>{feature.title}</ModalTitle>
          <ModalDescription>{feature.description}</ModalDescription>
          {titles[currentIndex] && infos[currentIndex] && (
            <ModalDetail>
              <DetailTitle>✨{titles[currentIndex]}</DetailTitle>
              <DetailInfo>{infos[currentIndex]}</DetailInfo>
            </ModalDetail>
          )}
        </ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

export default FeatureModal;
