import styled, { keyframes } from "styled-components";
import { useState } from "react";
import Wrapper from "../Wrapper";
import FeatureCard from "./FeatureCard";
import FeatureModal from "./FeatureModal";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import media from "../../styles/media";

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

const CardContainer = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: center;
  gap: 100px;
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

  const features = [
    {
      title: "기록",
      description: "실시간으로 기록을 남기고 공유할 수 있습니다.",
    },
    {
      title: "소통",
      description: "사용자들과 소통하며 감상을 나눌 수 있습니다.",
    },
    {
      title: "정보",
      description: "전시회 정보를 확인하고 추천받을 수 있습니다.",
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
        <CardContainer isVisible={isVisible}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              onClick={() => setSelectedFeature(feature)}
            />
          ))}
        </CardContainer>
      </Wrapper>
      {selectedFeature && (
        <FeatureModal feature={selectedFeature} onClose={closeModal} />
      )}
    </Container>
  );
};

export default FeatureSection;
