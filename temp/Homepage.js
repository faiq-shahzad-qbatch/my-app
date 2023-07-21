import styled, { keyframes } from 'styled-components';

function Homepage() {
    return (
        <div>
            <Wrapper>
                <Container>
                    <h1>Hello, World!</h1>
                </Container>
                <Container>
                    <h1>Hello, World!</h1>
                </Container>
            </Wrapper>
        </div>
    )
}

// Create a keyframes animation
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Create a keyframes animation
const counterSpin = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const Container = styled.div`
  display: flex;
  padding: 20px;
  border: 1px solid black;
  margin: 20px;
  background-color: darkgrey;

  /* Add 3D perspective */
  /* perspective: 1000px; */

  /* Apply 3D rotation to create the 3D effect */
  /* transform-style: preserve-3d; */
  /* transform: rotateX(15deg) rotateY(15deg); */
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: grey;

  @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    /* @media (prefers-reduced-motion: no-preference) {
        & > ${Container}:first-child {
        animation: ${spin} infinite 20s linear;
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        & > ${Container}:nth-child(2) {
        animation: ${counterSpin} infinite 20s linear;
        }
    } */
`;

export default Homepage;
