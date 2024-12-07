import styled, { keyframes } from "styled-components";
import Wrapper from "../Wrapper";
import mockupLeft from "../../assets/images/mockup-left-home.svg";
import mockupRight from "../../assets/images/mockup-right-community.svg";

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
  overflow-x: hidden;
`;

const ContentGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;
  margin-top: -50px;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

//모바일
const ContentGroupMobile = styled.div`
  padding-top: 50px;
  height: 100%;
`;

const StyledTitle = styled.h1`
  font-size: 8rem;
  color: #333;
  position: relative;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-out forwards;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const StyledTitleLeft = styled(StyledTitle)`
  animation-delay: 0.5s;
  top: 150px;
  left: 0px;
  z-index: 1;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

const StyledTitleRight = styled(StyledTitle)`
  animation-delay: 1s;
  top: 385px;
  right: 50px;
  z-index: 1;

  ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`;

// 모바일
const StyledTitleMobile = styled.h1`
  font-size: 6rem;
  color: #333;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
  margin-top: 5%;
  ${({ theme }) => theme.media.mobile} {
    font-size: 4rem;
  }
`;

const BackgroundCircle = styled.div<{
  color: string;
  opacity?: string;
  size: string;
  x: string;
  y: string;
}>`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${({ color }) => color};
  opacity: ${({ opacity }) => opacity || "1"};
  border-radius: 50%;
  filter: blur(100px);
  transform: translate(${({ x }) => x}, ${({ y }) => y});
  z-index: 0;
`;

const ImageGroup = styled.div`
  position: relative;
  width: 400px;
  height: auto;
  opacity: 0;
  animation: ${slideUp} 1.5s ease-out forwards;
  animation-delay: 1.3s;

  ${({ theme }) => theme.media.mobile} {
    max-width: 100%;
    margin: 10px auto 0;
  }
`;

const StyledMockupLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-5%, 10%);
  width: 300px;
  height: auto;
  z-index: 2;

  ${({ theme }) => theme.media.mobile} {
    transform: translate(-10%, 10%);
  }
`;

const StyledMockupRight = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(5%, -10%);
  width: 350px;
  height: auto;
  z-index: 1;
  ${({ theme }) => theme.media.mobile} {
    transform: translate(5%, -10%); /* 모바일에서 중심으로 조정 */
  }
`;

const MainSection = () => {
  const isMobile = window.innerWidth <= 480;

  return (
    <Container>
      <Wrapper>
        {isMobile && (
          <ContentGroupMobile>
            <StyledTitleMobile>Artview</StyledTitleMobile>
            <ImageGroup>
              <StyledMockupLeft src={mockupLeft} alt="Mockup Left" />
              <StyledMockupRight src={mockupRight} alt="Mockup Right" />
              <BackgroundCircle
                color="#EA1B83"
                opacity="0.5"
                size="300px"
                x="10%"
                y="20%"
              />
              <BackgroundCircle color="#FFFCAF" size="250px" x="80%" y="90%" />
            </ImageGroup>
          </ContentGroupMobile>
        )}

        {/* 모바일 외 디바이스 */}
        {!isMobile && (
          <ContentGroup>
            <StyledTitleLeft>Art</StyledTitleLeft>
            <ImageGroup>
              <StyledMockupLeft src={mockupLeft} alt="Mockup Left" />
              <StyledMockupRight src={mockupRight} alt="Mockup Right" />
              <BackgroundCircle
                color="#EA1B83"
                opacity="0.5"
                size="300px"
                x="10%"
                y="50%"
              />
              <BackgroundCircle color="#FFFCAF" size="250px" x="80%" y="90%" />
            </ImageGroup>
            <StyledTitleRight>view</StyledTitleRight>
          </ContentGroup>
        )}
      </Wrapper>
    </Container>
  );
};

export default MainSection;
