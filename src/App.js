import styled from "styled-components"
import About from "./components/Aboutc.jsx";
import Contact from "./components/Contactc.jsx";
import Home from "./components/Homec.jsx";
import Projects from "./components/Projectsc.jsx";
import sky from "./images/sky.png";
import Resume from "./components/Resume.jsx";
import { useState } from 'react';

const Container = styled.div`
  height: 100vh;
  background-size: cover;
  background-position: center;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  font-family: var(--bs-font-sans-serif);
`;

function App() {
  const [toggleLight, setToggleLight] = useState("light");
  const [background, setBackground] = useState(sky);

  return (
    <Container data-bs-theme={toggleLight} style={{ color: toggleLight === "light" ? 'black' : "#DEE2E6", backgroundImage: `url(${background})` }}>
      <Home toggleLight={toggleLight} setToggleLight={setToggleLight} background={background} setBackground={setBackground}/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact toggleLight={toggleLight} setToggleLight={setToggleLight}/>
    </Container>
  );
}

export default App;
