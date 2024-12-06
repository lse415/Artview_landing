import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import MainSection from "./components/Main/MainSection";
import PointSection from "./components/Point/PointSection";
import FeatureSection from "./components/Feature/FeatureSection";
import TeamSection from "./components/Team/TeamSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSection />
      <PointSection />
      <FeatureSection />
      <TeamSection />
      <Footer />
    </>
  );
}

export default App;