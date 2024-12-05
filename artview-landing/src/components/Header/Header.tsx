import styled from "styled-components";
import Wrapper from "../Wrapper";

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

const Logo = styled.h1`
  font-size: 2rem;
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
        <Logo>Artview</Logo>
        <Swu>2024 SWU Digital Media Design and Application</Swu>
      </HeaderContent>
    </Wrapper>
  </HeaderContainer>
);

export default Header;
