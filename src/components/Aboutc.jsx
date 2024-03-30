import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar.jsx';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`

const About = () => {
    return (
        <Section>
            <Navbar/>
        </Section>
    )
}

export default About