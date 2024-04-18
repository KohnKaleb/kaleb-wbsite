import React from 'react';
import styled from 'styled-components';
import Kaleb_Resume from '../images/Kaleb_Resume.pdf';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`


const Resume = () => {
    return (
        <Section id="resume">
            <div>Resume</div>
            <Container>
                <iframe title="resume" src={Kaleb_Resume} width="50%" height="800px"/>
            </Container>
        </Section>
    )
}

export default Resume