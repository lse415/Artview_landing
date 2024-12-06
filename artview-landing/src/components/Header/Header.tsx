import styled from "styled-components";
import Wrapper from "../Wrapper";
import LogoIcon from "../../assets/icons/logo-bg.svg";

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
  color: #333;
`;

const Swu = styled.div`
  font-size: 1rem;
  color: #333;
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
