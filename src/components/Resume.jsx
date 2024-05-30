import React from 'react';
import styled from 'styled-components';
import Kaleb_Resume from '../images/Kaleb_Resume.pdf';
import Navbar from './Navbar';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    transition: scroll-snap-align 0.5s ease-in-out;
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

const ObjectContainer = styled.div`
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -50px;
`

const Resume = ({toggleLight}) => {
    return (
        <Section id="resume">
            <Navbar toggleLight={toggleLight}/>
            <Container>
                <ObjectContainer>
                <object data={Kaleb_Resume} type="application/pdf" width="35%" height="820px">
                    <p>Unable to display PDF file. <a href={Kaleb_Resume}>Download</a> instead.</p>
                </object>
                </ObjectContainer>
            </Container>
        </Section>
    )
}

export default Resume