import React, {useCallback} from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from './Navbar';
import TypeWriter from 'typewriter-effect';
import f22 from '../images/f22.png';
import moon from '../images/moon.png';
import sun from '../images/sun.png';
import space from '../images/space.jpeg';
import sky from '../images/sky.png';
import orion from '../images/orion.png';

const Section = styled.div`
    height: 100%;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 768px) {
        height: 200vh;
    }
`;

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;

    @media only screen and (max-width: 768px) {
        flex: 1;
        align-items: center;
    }
`;

const Right = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    position: relative;

    @media only screen and (max-width: 768px) {
        flex: 1;
        width: 100%;
        justify-content: center;
        padding: 0;
    }
`;

const TopCorner = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 30px;
    z-index: 100;

    @media only screen and (max-width: 768px) {
        top: 0;
        right: 0;
    }
`

const animate = keyframes`
    to {
        transform: translateY(70px);
    }
`;

const Icon = styled.img`
    z-index: 5000;
    width: 60px;
    height: 60px;
`

const Img = styled.img`
    max-width: 40%;
    max-height: auto;
    animation: ${animate} 3s infinite ease alternate;

    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }
`;

const PlainButton = styled.button`
z-index: 5000;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

const Home = ({setToggleLight, setBackground, toggleLight }) => {
    const [icon, setIcon] = React.useState(moon)
    const [aircraft, setAircraft] = React.useState(f22)

    const toggleDark = useCallback(() => {
        if (icon === moon) {
            setIcon(sun);
            setAircraft(orion);
            setToggleLight("dark");
            setBackground(space);
        } else {
            setIcon(moon);
            setToggleLight("light");
            setAircraft(f22);
            setBackground(sky);
        }
    }, [icon, setToggleLight, setBackground]);

    return (
        <Section id="home">
            <Navbar toggleLight={toggleLight} />
            <Container>
                <TopCorner>
                    <PlainButton onClick={toggleDark}>
                        <Icon src={icon} alt=""/>
                    </PlainButton>
                </TopCorner>
                <Left>
                    <h1>Kaleb Kohn</h1>
                    <h3>Software Developer</h3>
                    <TypeWriter
                        options={{
                            loop: true
                        }}
                        onInit={(typewriter) => { 
                            typewriter
                            .typeString("Passionate about all realms of software development")
                            .pause(2000)
                            .deleteAll()
                            .typeString("Connect with me!")
                            .pause(2000)
                            .deleteAll()
                            .typeString("Check out my other work!")
                            .deleteAll()
                            .start();
                        }}
                    />
                </Left>
                <Right>
                    <Img src={aircraft}/>
                </Right>  
            </Container>
        </Section>
    )
}

export default React.memo(Home)