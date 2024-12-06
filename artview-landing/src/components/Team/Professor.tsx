import styled from "styled-components";

const ProfessorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 20px;
  margin-top: 50px;
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
  <ProfessorWrapper>
    <ProfessorTitle>지도교수</ProfessorTitle>
    <ProfessorContainer>
      <ProfessorName>Prof. 고혜영</ProfessorName>
      <ProfessorName>Prof. 이기한</ProfessorName>
    </ProfessorContainer>
  </ProfessorWrapper>
);

export default Professor;
