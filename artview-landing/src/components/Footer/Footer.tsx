import styled from "styled-components";
import Wrapper from "../Wrapper";
import LogoLetter from "../../assets/icons/footer/artview-letter.svg?react";
import media from "../../styles/media";

const FooterContainer = styled.footer`
  background-color: #333;
  padding: 80px 40px 0;
  color: #fff;
  margin-top: 80px;
  text-align: center;

  ${media.mobile} {
    padding: 80px 0 0 0;
  }
`;

const StyledLogoLetter = styled(LogoLetter)`
  width: 60%;
  height: auto;
  margin-top: 5%;
  ${media.mobile} {
    width: 100%;
  }
`;

const Footer = () => (
  <FooterContainer>
    <Wrapper>
      <StyledLogoLetter />
    </Wrapper>
  </FooterContainer>
);

export default Footer;
