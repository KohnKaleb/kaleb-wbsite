import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Python from "./Python";
import C from "./C";
import Javascript from "./Javascript";
import Css from "./Css";
import Html from "./Html";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from '@react-three/drei'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1450px;
  margin: 0 auto;
  height: 50vh;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  width: 100%;
`;

const BottomText = styled.div`
  margin-right: 15px;
  margin-bottom: 30px;
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const Logos = styled.div`
  width: 100%;
`;

const About = () => {
  return (
    <Section id="about">
      <Navbar />
      <div>About</div>
      <Top>
        <p>
          I've been coding for over four years dabbling in mobile development,
          full stack development, AI and data science. I'm a Senior at
          UW-Madison Graduating in May 2025.
          I am also a member of the Wisconsin Air National Guard and act as a maintenance analyst,
          tracking maintenance trends, analyzing statistics and providing recommendations to leadership.
          Through my studies I have gained experience in various languages and frameworks and have gotten the opportunity to work on a variety of projects ranging from web development to machine learning, and neural networks.
          My Air Force experience has given me the opportunity to work with a variety of people and has taught me the importance of communication and teamwork, as well as statistical analysis and data visualization. I even had the opportunity
          to get deployed to Saudi Arabia to work on my skills in a combat environment.
        </p>
      </Top>
      <Bottom>
        <BottomText><BoldText>Languages</BoldText>: Python, Java, JavaScript, C, HTML, CSS, SQL</BottomText>
        <BottomText>
        <BoldText>Frameworks</BoldText>: React, Vue.js, Spring MVC, Django, Node.js, Express,
          Android Studio
        </BottomText>
        <Logos>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <Stage>
              <Python position={[-1400, 0, 0]} />
            </Stage>
            <Stage>
              <C position={[0,0,0]} />
            </Stage>
          </Canvas>
        </Logos>
      </Bottom>
    </Section>
  );
};

export default About;
