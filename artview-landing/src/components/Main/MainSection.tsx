import styled, { keyframes } from "styled-components";
import Wrapper from "../Wrapper";
import mockupLeft from "../../assets/images/mockup-left-home.svg";
import mockupRight from "../../assets/images/mockup-right-community.svg";

// 애니메이션
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

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const ContentGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  margin-top: -50px;
`;

const StyledTitle = styled.h1`
  font-size: 8rem;
  color: #333;
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-out forwards; /* 점점 느려지고 to 유지 */
`;

const StyledTitleLeft = styled(StyledTitle)`
  animation-delay: 0.5s; /* 서서히 나타나는 순서 설정 */
  top: 150px;
  left: 0px;
`;

const StyledTitleRight = styled(StyledTitle)`
  animation-delay: 1s; /* 두 번째로 나타남 */
  top: 385px;
  right: 50px;
`;

const ImageGroup = styled.div`
  position: relative;
  width: 400px;
  height: auto;
  opacity: 0; /* 초기 상태 */
  animation: ${slideUp} 1.5s ease-out forwards;
  animation-delay: 1.5s; /* 마지막으로 애니메이션 실행 */
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
