import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import TypeWriter from 'typewriter-effect';
import f22 from '../images/f22.jpg';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

const Right = styled.div`
    flex: 3;
    position: relative;
`;

const Img = styled.img`
    
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