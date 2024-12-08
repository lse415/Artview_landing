import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Wrapper from "../Wrapper";
import FeatureCard from "./FeatureCard";
import FeatureModal from "./FeatureModal";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import media from "../../styles/media";
import { AiOutlineForm, AiOutlineComment, AiOutlineBulb } from "react-icons/ai";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.section`
  padding: 80px 0;
  text-align: center;
  margin: 0 120px;

  ${media.mobile} {
    margin: 0;
  }
`;

const Title = styled.h2<{ isVisible: boolean }>`
  font-size: ${({ theme }) => theme.fonts.title};
  color: #333;
  margin-bottom: 20px;

  span {
    display: block;
    font-size: ${({ theme }) => theme.fonts.title_small};
    margin-top: 10px;
  }

  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.8s ease-out
    forwards;
  animation-delay: 0.3s;

  ${media.mobile} {
    span {
      font-size: ${({ theme }) => theme.fonts.title_small};
    }
  }
`;

const CardsContainer = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 50px;

  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.8s ease-out
    forwards;
  animation-delay: 1s;

  ${media.mobile} {
    gap: 20px;
    justify-content: center;
  }
`;

const FeatureSection = () => {
  const { ref, isVisible } = useIntersectionObserver();

  const [selectedFeature, setSelectedFeature] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const isMobile = window.innerWidth <= 480;

  const features = isMobile
    ? [
        {
          title: "기록",
          description: "전시 관람의 순간을 기록합니다.",
          icon: <AiOutlineForm />,
        },
        {
          title: "소통",
          description: "전시 관람 경험을 나누며 소통합니다.",
          icon: <AiOutlineComment />,
        },
        {
          title: "정보",
          description: "진행 중인 전시회 정보를 제공합니다.",
          icon: <AiOutlineBulb />,
        },
      ]
    : [
        {
          title: "실시간 기록",
          description: "전시 관람의 순간을 기록합니다.",
          icon: <AiOutlineForm />,
        },
        {
          title: "감상 공유",
          description: "전시 관람 경험을 나누며 소통합니다.",
          icon: <AiOutlineComment />,
        },
        {
          title: "전시 정보 제공",
          description: "진행 중인 전시회 정보를 제공합니다.",
          icon: <AiOutlineBulb />,
        },
      ];

  const closeModal = () => setSelectedFeature(null);

  return (
    <Container ref={ref}>
      <Wrapper>
        <Title isVisible={isVisible}>
          Main Features
          <span>주요기능</span>
        </Title>
        <CardsContainer isVisible={isVisible}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </CardsContainer>
      </Wrapper>
      {selectedFeature && (
        <FeatureModal feature={selectedFeature} onClose={closeModal} />
      )}
    </Container>
  );
};

export default FeatureSection;
