import styled from "styled-components";
import PointItem from "./PointItem";
import Wrapper from "../Wrapper";

const ItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Section = styled.section`
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PointSection = () => {
  const points = [
    {
      keywordText: "잊기 전에",
      explanationText: "감상을 흘려보내 아쉬운 적이 있다면",
    },
    {
      keywordText: "쉽고 편하게",
      explanationText: "갤러리 어딘가 작품 사진이 방치되어 있다면",
    },
    {
      keywordText: "경험을 나누다",
      explanationText: "전시 관람 커뮤니티가 필요하다면",
    },
  ];

  return (
    <Section>
      <Wrapper>
        <ItemsContainer>
          {points.map((point, index) => (
            <PointItem
              key={index}
              keywordText={point.keywordText}
              explanationText={point.explanationText}
            />
          ))}
        </ItemsContainer>
      </Wrapper>
    </Section>
  );
};

export default PointSection;
