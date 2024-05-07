import React from 'react';
import styled from 'styled-components';
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

const Projects = () => {
    return (
        <Section id="projects">
            <Navbar />
            <div>Projects</div>
        </Section>
    )
}

export default Projects