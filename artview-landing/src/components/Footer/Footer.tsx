import styled from "styled-components";
import Wrapper from "../Wrapper";
// import LogoIcon from "../../assets/icons/logo-bg.svg";
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

// const LogoGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
// `;

// const StyledLogoIcon = styled.img`
//   width: 50px;
//   height: auto;
// `;

// const Title = styled.h1`
//   font-size: 1.8rem;
//   color: #fff;
// `;

// const GithubLinkWrapper = styled.div`
//   display: flex;
//   justify-content: flex-start; /* 좌측 정렬 */
//   margin-top: 10px;
// `;

// const GithubLink = styled.a`
//   font-size: 1rem;
//   color: #fff;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

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
        {/* <LogoGroup>
          <StyledLogoIcon src={LogoIcon} alt="Logo" />
          <Title>Artview</Title>
        </LogoGroup> */}
        {/* <GithubLinkWrapper>
          <GithubLink
            href="https://github.com/Artview2024"
            target="_blank"
            rel="noopener noreferrer"
          >
            ↗ GitHub
          </GithubLink>
        </GithubLinkWrapper> */}
        <ArtviewLetterWrapper>
          <ArtviewLetter src={artviewLetter} alt="Artview Letter" />
        </ArtviewLetterWrapper>
      </FooterContent>
    </Wrapper>
  </FooterContainer>
);

export default Footer;
