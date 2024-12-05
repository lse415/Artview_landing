import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 130px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #ffff;
`;

const Swu = styled.div`
  font-size: 1rem;
  color: #ffff;
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Artview</Logo>
    <Swu>2024 SWU Digital Media Design and Application</Swu>
  </HeaderContainer>
);

export default Header;
