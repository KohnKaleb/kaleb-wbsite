import React from 'react';
import styled from 'styled-components';
import Kaleb_Resume from '../images/Kaleb_Resume.pdf';
import Navbar from './Navbar';

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
`

const Container = styled.div`
    display: grid;
    place-items: center;
    height: auto;
    width: 100%;
`

const IframeContainer = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -50px;
`

const Resume = () => {
    return (
        <Section id="resume">
            <Navbar />
            <Container>
                <IframeContainer>
                    <iframe title="resume" src={Kaleb_Resume} width="50%" height="800px"/>
                </IframeContainer>
            </Container>
        </Section>
    )
}

export default Resume