import styled from "styled-components";
import Wrapper from "../Wrapper";
import LogoIcon from "../../assets/icons/logo-bg.svg";
import media from "../../styles/media";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 120px;
  padding: 40px 0;

  ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    padding: 0;
  }
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StyledLogoIcon = styled.img`
  width: 60px;
  height: auto;
`;

const Logo = styled.h1`
  font-size: 2.3rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Swu = styled.div`
  font-size: ${({ theme }) => theme.fonts.small};
  color: ${({ theme }) => theme.colors.primary};

  ${media.mobile} {
    text-align: left;
    margin-top: 5px;
    margin-left: 10px;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Wrapper>
      <HeaderContent>
        <LogoGroup>
          <StyledLogoIcon src={LogoIcon} alt="Logo Icon" />
          <Logo>Artview</Logo>
        </LogoGroup>
        <Swu>2024 SWU Digital Media Design and Application</Swu>
      </HeaderContent>
    </Wrapper>
  </HeaderContainer>
);

export default Header;
