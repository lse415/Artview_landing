import { useState } from "react";
import styled from "styled-components";
import Wrapper from "../Wrapper";
import FeatureCard from "./FeatureCard";
import FeatureModal from "./FeatureModal";

const Section = styled.section`
  padding: 80px 0;
  text-align: center;
  margin: 0 120px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;

  span {
    display: block;
    font-size: 1.5rem;
    margin-top: 10px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 50px;
`;

const FeatureSection = () => {
  const [selectedFeature, setSelectedFeature] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const features = [
    {
      title: "실시간 기록",
      description: "실시간으로 기록을 남기고 공유할 수 있습니다.",
    },
    {
      title: "소통",
      description: "사용자들과 소통하며 감상을 나눌 수 있습니다.",
    },
    {
      title: "전시 정보",
      description: "전시회 정보를 확인하고 추천받을 수 있습니다.",
    },
  ];

  const closeModal = () => setSelectedFeature(null);

  return (
    <>
      <Wrapper>
        <Section>
          <Title>
            Main Features
            <span>주요기능</span>
          </Title>
          <CardContainer>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                onClick={() => setSelectedFeature(feature)}
              />
            ))}
          </CardContainer>
        </Section>
      </Wrapper>
      {selectedFeature && (
        <FeatureModal feature={selectedFeature} onClose={closeModal} />
      )}
    </>
  );
};

export default FeatureSection;
