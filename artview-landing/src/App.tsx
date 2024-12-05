import Header from "./components/Header/Header";
import MainSection from "./components/Main/MainSection";
import PointSection from "./components/Point/PointSection";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSection />
      <PointSection />
    </>
  );
}

export default App;
