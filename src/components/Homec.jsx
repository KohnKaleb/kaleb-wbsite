import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import TypeWriter from 'typewriter-effect';
import f22 from '../images/f22.png';

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

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
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

const Img = styled.img`
    max-width: 40%;
    max-height: auto;
    animation: animate 2s infinite ease alternate;

    @media only screen and (max-width: 768px) {
        width: 300px;
        height: 300px;
    }

    keyframes animate {
        to {
        transform: translateY(20px);
        }
    }
`;

const Home = () => {
    return (
        <Section>
            <Navbar/>
            <Container>
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
                    <Img src={f22}/>
                </Right>  
            </Container>
        </Section>
    )
}

export default Home