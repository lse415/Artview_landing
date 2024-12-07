import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import MainSection from "./components/Main/MainSection";
import PointSection from "./components/Point/PointSection";
import FeatureSection from "./components/Feature/FeatureSection";
import TeamSection from "./components/Team/TeamSection";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <MainSection />
        <PointSection />
        <FeatureSection />
        <TeamSection />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
