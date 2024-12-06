import React from "react";
import styled from "styled-components";

interface FeatureModalProps {
  feature: {
    title: string;
    description: string;
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
  background-color: #333;
  color: #fff;
  width: 600px;
  border-radius: 20px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  background-color: #fff;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  height: 100%;
  object-fit: cover;
`;

const ModalContent = styled.div`
  padding: 20px;
  text-align: left;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

const ModalDescription = styled.p`
  font-size: 1.2rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }
`;

const FeatureModal: React.FC<FeatureModalProps> = ({ feature, onClose }) => (
  <Overlay>
    <ModalContainer>
      <ImageContainer>
        <ModalImage src="https://temporary.com" alt={feature.title} />
      </ImageContainer>
      <ModalContent>
        <ModalTitle>{feature.title}</ModalTitle>
        <ModalDescription>{feature.description}</ModalDescription>
      </ModalContent>
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </ModalContainer>
  </Overlay>
);

export default FeatureModal;
