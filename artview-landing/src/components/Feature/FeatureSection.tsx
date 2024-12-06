import styled from "styled-components";
import Wrapper from "../Wrapper";
import FeatureCard from "./FeatureCard";

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
  const features = ["실시간 기록", "소통", "전시 정보"];

  return (
    <Wrapper>
      <Section>
        <Title>
          Main Features
          <span>주요기능</span>
        </Title>
        <CardContainer>
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature} />
          ))}
        </CardContainer>
      </Section>
    </Wrapper>
  );
};

export default FeatureSection;
