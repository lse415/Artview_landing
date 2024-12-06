import styled, { keyframes } from "styled-components";
import Wrapper from "../Wrapper";
import TeamMemberCard from "./TeamMemberCard";
import Professor from "./Professor";

import feLseIcon from "../../assets/images/artviewers/fe_lse.svg";
import beLmjIcon from "../../assets/images/artviewers/be_lmj.svg";
import designPkjIcon from "../../assets/images/artviewers/design_pkj.svg";
import designSjwIcon from "../../assets/images/artviewers/design_sjw.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

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

const Container = styled.div`
  padding: 80px 0;
  text-align: center;
  position: relative;
  border-radius: 0 0 50px 50px; /* 좌우 하단 모서리를 둥글게 */
  overflow: hidden; /* 둥근 모서리 안에서 내용 잘리게 */
`;

const SmallTitleGroup = styled.div<{ isVisible: boolean }>`
  position: relative;
  z-index: 1;
  display: inline-block;

  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.8s ease-out
    forwards;
  animation-delay: 0.3s;
`;

const SmallTitleBackground = styled.div`
  position: absolute;
  top: 50%; /* SmallTitle 중심에 배치 */
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

const BackgroundCircle = styled.div<{
  color: string;
  size: string;
  x: string;
  y: string;
  opacity?: string;
}>`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ color }) => color};
  border-radius: 50%;
  filter: blur(20px);
  transform: translate(${({ x }) => x}, ${({ y }) => y});
  opacity: ${({ opacity }) => opacity || "1"};
`;

const SmallTitle = styled.div`
  font-size: 1rem;
  color: #333;
  display: inline-block;
  padding: 5px 20px;
  border-width: 2px;
  border-color: #fff;
  border-style: solid;
  border-radius: 30px;
  margin-bottom: 20px;

  position: relative;
  z-index: 1; /* BackgroundCircle 뒤 배치 */
`;

const Title = styled.h2<{ isVisible: boolean }>`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 50px;

  opacity: 0;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 0.8s ease-out
    forwards;
  animation-delay: 0.5s;
`;

const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
`;

const MemberWrapper = styled.div<{ offset?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ offset }) => (offset ? "50px" : "0")};
`;

const ProfessorPosition = styled.div<{ delay: number }>`
  margin-top: 50px;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-out forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

const TeamSection = () => {
  const { ref, isVisible } = useIntersectionObserver();

  const teamMembers = [
    {
      image: feLseIcon,
      name: "이승은",
      role: "Front-end Developer",
      email: "leesuel0379@gmail.com",
      github: "https://github.com/lse415",
    },
    {
      image: beLmjIcon,
      name: "이민정",
      role: "Back-end Developer",
      email: "emilywin825@gmail.com",
      github: "https://github.com/emilywin825",
    },
    {
      image: designPkjIcon,
      name: "박경진",
      role: "Designer",
      email: "kengjin29@gmail.com",
    },
    {
      image: designSjwIcon,
      name: "신지우",
      role: "Designer",
      email: "sjw01827@gmail.com",
    },
  ];

  return (
    <Wrapper>
      <Container ref={ref}>
        <SmallTitleGroup isVisible={isVisible}>
          <SmallTitleBackground>
            <BackgroundCircle
              color="#EA1B83"
              opacity="0.8"
              size="40px"
              x="-60px"
              y="-30px"
            />
            <BackgroundCircle color="#EA1B83" size="40px" x="-20px" y="-30px" />
            <BackgroundCircle color="#FFFCAF" size="40px" x="-20px" y="-30px" />
            <BackgroundCircle color="#FFFCAF" size="40px" x="20px" y="-30px" />
          </SmallTitleBackground>
          <SmallTitle>Who are we?</SmallTitle>
        </SmallTitleGroup>
        <Title isVisible={isVisible}>Artviewers</Title>
        <TeamContainer>
          {teamMembers.map((member, index) => (
            <MemberWrapper key={index} offset={index % 2 === 1}>
              <TeamMemberCard
                {...member}
                delay={isVisible ? 1.3 + index * 0.5 : 0}
                isVisible={isVisible}
              />
            </MemberWrapper>
          ))}
        </TeamContainer>

        <ProfessorPosition
          delay={isVisible ? 1.3 + teamMembers.length * 0.5 : 0}
        >
          <Professor />
        </ProfessorPosition>
      </Container>
    </Wrapper>
  );
};

export default TeamSection;
