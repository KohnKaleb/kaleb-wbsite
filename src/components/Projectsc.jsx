import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import BarHop from '../images/BarHop.png';
import RunCrafter from '../images/RunCrafter.png';

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 768px) {
        height: 200vh;
    }
`
const Cards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    flex: 1;
`

const Card = styled.div`
    width: 18rem;
    height: 317px;

    &:hover {
        box-shadow: 0 0 0 2px;
    }
`

const CardImg = styled.img`
    object-fit: cover;
    width: '100%';
    height: '100%';
`

const Projects = () => {
    return (
        <Section id="projects">          
            <Navbar />
            <Cards>
                <Card className="card">
                    <CardImg src={BarHop} style={{height: "125px"}} className="card-img-top img-fluid" alt="The login page of a mobile application" />
                    <div className="card-body">
                        <h5 className="card-title">Bar Hop</h5>
                        <p className="card-text">Android Social Media App connecting people through bars they visit</p>
                        <a href="https://github.com/KohnKaleb/BarHop" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </Card>
                <Card className="card">
                    <CardImg src={RunCrafter} className="card-img-top img-fluid" alt="A map with various running routes" />
                    <div class="card-body">
                        <h5 className="card-title">Run Crafter</h5>
                        <p className="card-text">Website that allows runners to choose different running routes based on some chosen criteria</p>
                        <a href="https://github.com/KohnKaleb/create_my_runs" className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
                    </div>
                </Card>
            </Cards>
        </Section>
    )
}

export default Projects