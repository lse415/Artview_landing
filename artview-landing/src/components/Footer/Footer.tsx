import styled from "styled-components";
import Wrapper from "../Wrapper";
import artviewLetter from "../../assets/images/artview_letter_footer.svg";

const FooterContainer = styled.footer`
  background-color: #333;
  padding: 80px 0 0;
  color: #fff;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 120px;
`;

const ArtviewLetterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ArtviewLetter = styled.img`
  width: 100%;
  margin-top: 50px;
`;

const Footer = () => (
  <FooterContainer>
    <Wrapper>
      <FooterContent>
        <ArtviewLetterWrapper>
          <ArtviewLetter src={artviewLetter} alt="Artview Letter" />
        </ArtviewLetterWrapper>
      </FooterContent>
    </Wrapper>
  </FooterContainer>
);

export default Footer;
