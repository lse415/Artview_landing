import styled from "styled-components";
import Wrapper from "../Wrapper";
import TeamMemberCard from "./TeamMemberCard";
import Professor from "./Professor";

import feLseIcon from "../../assets/images/artviewers/fe_lse.svg";
import beLmjIcon from "../../assets/images/artviewers/be_lmj.svg";
import designPkjIcon from "../../assets/images/artviewers/design_pkj.svg";
import designSjwIcon from "../../assets/images/artviewers/design_sjw.svg";

const Section = styled.section`
  padding: 80px 0;
  text-align: center;
  position: relative;
  border-radius: 0 0 50px 50px; /* 좌우 하단 모서리를 둥글게 */
  overflow: hidden; /* 둥근 모서리 안에서 내용 잘리게 */
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
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 50px;
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

const ProfessorPosition = styled.div`
  bottom: 20px;
  right: 20px;
  margin: 0 120px;
`;

const TeamSection = () => {
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
      <Section>
        <SmallTitle>Who are we?</SmallTitle>
        <Title>Artviewers</Title>
        <TeamContainer>
          {teamMembers.map((member, index) => (
            <MemberWrapper key={index} offset={index % 2 === 1}>
              <TeamMemberCard {...member} />
            </MemberWrapper>
          ))}
        </TeamContainer>
        <ProfessorPosition>
          <Professor />
        </ProfessorPosition>
      </Section>
    </Wrapper>
  );
};

export default TeamSection;
