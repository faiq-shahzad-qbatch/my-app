import "./playfair-display.css";
import styled from "styled-components";

import Header from "./pages/Header";
import HeroPage from "./pages/HeroPage";
import FeaturePage from "./pages/FeaturePage";
import RequestPage from "./pages/RequestPage";
import Footer from "./pages/Footer";

const StyledGradientComponent = styled.div`
  background: linear-gradient(175deg, #111d2d 50%, #ffffff 50%);
  padding: 0px 12vw;
`;

function App() {
  return (
    <>
      <StyledGradientComponent>
        <Header />
        <HeroPage />
      </StyledGradientComponent>
      <StyledGradientComponent>
        <FeaturePage />
      </StyledGradientComponent>
      <RequestPage />
      <Footer />
    </>
  );
}

export default App;
