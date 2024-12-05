import Header from "./components/Header";
import GlobalStyle from "./styles/GlobalStyle";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Title>Welcome to Artview Landing</Title>
      </Container>
    </>
  );
}

export default App;
