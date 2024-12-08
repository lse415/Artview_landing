import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

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
`;

const ImageContainer = styled.div`
  background-color: #fff;
  width: 40%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const ModalImage = styled.div`
  max-width: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowButton = styled.button<{ position: "up" | "down" }>`
  position: absolute;
  ${({ position }) => (position === "up" ? "top: 10px;" : "bottom: 10px;")}
  left: 50%;
  transform: translateX(-50%);
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
`;

const ModalContent = styled.div`
  padding: 40px;
  text-align: left;
  width: 60%;
`;

const ModalTitle = styled.h3`
  font-size: ${theme.fonts.title_small};
  margin-bottom: 5px;
`;

const ModalDescription = styled.p`
  font-size: ${theme.fonts.small};
`;

const ModalDetail = styled.div`
  margin-top: 50px;
`;

const DetailTitle = styled.h3`
  font-size: 1.5rem;
`;

const DetailInfo = styled.p`
  margin-top: 20px;
  font-size: ${theme.fonts.small};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
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

  return (
    <Overlay>
      <ModalContainer>
        <ImageContainer>
          {images.length > 0 && (
            <>
              <ArrowButton
                position="up"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                ↑
              </ArrowButton>
              <ModalImage>{images[currentIndex]}</ModalImage>
              <ArrowButton
                position="down"
                onClick={handleNext}
                disabled={currentIndex === images.length - 1}
              >
                ↓
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

        <CloseButton onClick={onClose}>&times;</CloseButton>
      </ModalContainer>
    </Overlay>
  );
};

export default FeatureModal;
