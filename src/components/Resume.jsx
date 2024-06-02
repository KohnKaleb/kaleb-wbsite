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

    @media (min-width: 768px) {
        scroll-snap-type: y mandatory;
        scroll-behavior: smooth;
        transition: scroll-snap-align 0.5s ease-in-out;
    }

    object {
        width: 30%;
        max-width: 600px;
        height: 82vh;

        @media (min-width: 768px) {
            width: 35%;
        }

        @media (min-width: 1024px) {
            width: 30%;
        }
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const ObjectContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Resume = ({toggleLight}) => {
    return (
        <Section id="resume">
            <Navbar toggleLight={toggleLight}/>
            <Container>
                <ObjectContainer>
                    <object data={Kaleb_Resume} type="application/pdf">
                        <p>Unable to display PDF file. <a href={Kaleb_Resume}>Download</a> instead.</p>
                    </object>
                </ObjectContainer>
            </Container>
        </Section>
    );
}

export default Resume;
