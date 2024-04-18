import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
`
const Container = styled.div`
`

const Top = styled.div`
`

const Bottom = styled.div`
`

const Contact = () => {
    return (
        <Section id="contact">
            <Container>
                <Top>
                    <div>Contact</div>
                    <a target="_blank" rel="noreferrer" href="https://github.com/KohnKaleb"><FaGithub/></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kalebkohn/"><FaLinkedin/></a>
                </Top>
                <Bottom>
                    <div>Reach out ot me</div>
<<<<<<< HEAD
=======
                    <input>Name</input>
                    <input>Email</input>
                    <input>Message</input>
>>>>>>> 2668252702dffd2496347f1dc3cf1ed0c3e7c079
                    <button>Submit</button>
                </Bottom>
            </Container>
        </Section>
    )
}

export default Contact