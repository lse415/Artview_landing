import styled, { keyframes } from "styled-components";
import Wrapper from "../Wrapper";
import MainImage from "../../assets/images/mainImage.svg?react";
import media from "../../styles/media";

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
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.mobile} {
    overflow-x: hidden;
  }
`;

const ContentGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  width: 80%;
  height: 60%;
  position: relative;
  transform: translateY(-7%);
  margin: 0 auto;

  ${media.tablet} {
    width: 90%;
    height: 70%;
  }

  ${media.mobile} {
    display: none;
  }
`;

const ContentGroupMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: flex-start;
  align-items: center;
  position: relative;
  transform: translateY(-300%);
`;

const StyledTitleMobile = styled.h1`
  font-size: 6vw;
  color: #333;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
  margin-top: 5%;
  ${media.mobile} {
    font-size: 4rem;
  }
`;

const StyledTitleLeft = styled.h1`
  font-size: 6vw;
  color: #333;
  position: absolute; // ContentGroup 기준 위치 지정
  top: 30%; // MainImage 좌측상단
  left: 20%;
  z-index: 2;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-out forwards;
  animation-delay: 0.5s;
`;

const StyledTitleRight = styled.h1`
  font-size: 6vw;
  color: #333;
  position: absolute; // ContentGroup 기준 위치 지정
  bottom: 25%; // MainImage 우측하단
  right: 17%;
  z-index: 2;
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-out forwards;
  animation-delay: 1s;
`;

const StyledMainImage = styled(MainImage)`
  width: 60%; //ContentGroup의 60%
  height: auto;
  z-index: 1;
  opacity: 0;
  animation: ${slideUp} 1.5s ease-out forwards;
  animation-delay: 1.3s;
  ${media.mobile} {
    position: absolute;
    width: 150%;
    left: -30%;
    top: -10%;
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
            <StyledMainImage />
          </ContentGroupMobile>
        )}

        {/* 모바일 외 디바이스 */}
        {!isMobile && (
          <ContentGroup>
            <StyledTitleLeft>Art</StyledTitleLeft>
            <StyledMainImage />
            <StyledTitleRight>view</StyledTitleRight>
          </ContentGroup>
        )}
      </Wrapper>
    </Container>
  );
};

export default MainSection;
