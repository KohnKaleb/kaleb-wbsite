import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logos = styled.div``;

const About = () => {
  return (
    <Section id="about">
      <Navbar />
      <div>About</div>
      <Top>
        <h1>Kaleb Kohn</h1>
        <p>
          I've been coding for over four years dabbling in mobile development,
          full stack development, AI and data science. I'm a Senior at
          UW-Madison Graduating in May 2025.
        </p>
      </Top>
      <Bottom>
        <div>Languages: Python, Java, JavaScript, C, HTML, CSS, SQL</div>
        <div>
          Frameworks: React, Vue.js, Spring MVC, Django, Node.js, Express,
          Android Studio
        </div>
        <Logos></Logos>
      </Bottom>
    </Section>
  );
};

export default About;
