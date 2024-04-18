import styled from "styled-components"
import About from "./components/Aboutc.jsx";
import Contact from "./components/Contactc.jsx";
import Home from "./components/Homec.jsx";
import Projects from "./components/Projectsc.jsx";
import background from "./images/background.jpg";
import Resume from "./components/Resume.jsx";

const Container = styled.div`
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
`;

function App() {
  return (
    <Container>
      <Home/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
    </Container>
  );
}

export default App;
