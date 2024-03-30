import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import TypeWriter from 'typewriter-effect';

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
`;

const Right = styled.div`
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
                
                </Right>  
            </Container>
        </Section>
    )
}

export default Home