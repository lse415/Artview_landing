import styled from "styled-components";
import Wrapper from "../Wrapper";
import media from "../../styles/media";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 20px;
  margin-top: 50%;
  margin: 0 120px;

  ${media.tablet}, ${media.mobile} {
    margin: 0;
    margin-top: 50%;
  }
`;

const ProfessorTitle = styled.h3`
  font-size: 1rem;
  color: #666;
`;

const ProfessorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ProfessorName = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 10px;
`;

const Professor = () => (
  <Wrapper>
    <Container>
      <ProfessorTitle>지도교수</ProfessorTitle>
      <ProfessorContainer>
        <ProfessorName>Prof. 고혜영</ProfessorName>
        <ProfessorName>Prof. 이기한</ProfessorName>
      </ProfessorContainer>
    </Container>
  </Wrapper>
);

export default Professor;
