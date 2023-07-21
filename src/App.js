import Header from "./pages/Header";
import HeroPage from "./pages/HeroPage";
import FeaturePage from "./pages/FeaturePage";
import RequestPage from "./pages/RequestPage";
import Footer from "./pages/Footer";
import "./playfair-display.css";
import styled from "styled-components";

const StyledGradientComponent = styled.div`
  height: ${(props) => props.height || "100vh"};
  padding: 0px 11vw;
  background: linear-gradient(175deg, #111d2d 50%, #ffffff 50%);
`;

function App() {
  return (
    <>
      <StyledGradientComponent height={"200vh"}>
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
