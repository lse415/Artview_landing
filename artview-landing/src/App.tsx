import Header from "./components/Header/Header";
import MainSection from "./components/Main/MainSection";
import PointSection from "./components/Point/PointSection";
import FeatureSection from "./components/Feature/FeatureSection";
import TeamSection from "./components/Team/TeamSection";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSection />
      <PointSection />
      <FeatureSection />
      <TeamSection />
    </>
  );
}

export default App;
