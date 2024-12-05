import styled from "styled-components";
import Wrapper from "../Wrapper";
import mockupLeft from "../../assets/images/mockup-left-home.svg";
import mockupRight from "../../assets/images/mockup-right-community.svg";

const Container = styled.section`
  position: relative;
  width: 100%;
`;

const ContentGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
`;

const StyledTitle = styled.h1`
  font-size: 8rem;
  color: #333;
  position: relative;
`;

const StyledTitleLeft = styled(StyledTitle)`
  top: 150px;
  left: 0px;
`;

const StyledTitleRight = styled(StyledTitle)`
  top: 385px;
  right: 50px;
`;

const ImageGroup = styled.div`
  position: relative;
  width: 400px;
  height: auto;
`;

const StyledMockupLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-5%, 10%);
  width: 300px;
  height: auto;
  z-index: 1;
`;

const StyledMockupRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(5%, -10%);
  width: 350px;
  height: auto;
  z-index: 0;
`;

const MainSection = () => (
  <Container>
    <Wrapper>
      <ContentGroup>
        <StyledTitleLeft>Art</StyledTitleLeft>
        <ImageGroup>
          <StyledMockupLeft src={mockupLeft} alt="Mockup Left" />
          <StyledMockupRight src={mockupRight} alt="Mockup Right" />
        </ImageGroup>
        <StyledTitleRight>view</StyledTitleRight>
      </ContentGroup>
    </Wrapper>
  </Container>
);

export default MainSection;
