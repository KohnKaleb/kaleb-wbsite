import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import BarHop from '../images/BarHop.png';
import RunCrafter from '../images/RunCrafter.png';
import CustomModal from './CustomModal';


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

const Projects = ({toggleLight}) => {
    const [showModal, setShowModal] = useState(false);
    const [projectHead, setProjectHead] = useState("");
    const [pieData, setPieData] = useState([]);
    const [barData, setBarData] = useState([]);

    const projectText = (project) => {
        switch (project) {
            case "barHop":
                return () => {
                    setShowModal(true);
                    setProjectHead(project);
                    setPieData([{name: "Java", value: 100}]);
                    setBarData([{name: "10/15 - 10/21", value: 2}, {name: "10/29 - 11/4", value: 2},  {name: "11/5 - 11/11", value: 6}, {name: "11/12 - 11/18", value: 1}, {name: "11/19 - 11/25", value: 6}, {name: "11/26 - 12/2", value: 7}, {name: "12/3 - 12/9", value: 3}, {name: "12/10 - 12/16", value: 4}])
                }
            case "runCrafter":
                return () => {
                    setShowModal(true);
                    setProjectHead(project);
                    setPieData([{name: "Python", value: 69.8}, {name: "HTML", value: 26.3}, {name: "CSS", value: 3.9}]);
                    setBarData([{name: "9/24 - 9/30", value: 18}, {name: "10/1 - 10/7", value: 11},  {name: "10/8 - 10/14", value: 4}, {name: "10/15 - 10/21", value: 2}])
                
                }
            default:
              return () => {}
        }
    }

    return (
      <Section id="projects">
        <Navbar toggleLight={toggleLight} />
        <CustomModal showModal={showModal} toggleLight={toggleLight} setShowModal={setShowModal} modalHeading={projectHead} modalBody="body" pieData={pieData} barData={barData} />
        <Cards>
          <div onClick={projectText("barHop")}>
            <Card className="card">
              <CardImg
                src={BarHop}
                style={{ height: "125px" }}
                className="card-img-top img-fluid"
                alt="The login page of a mobile application"
              />
              <div className="card-body">
                <h5 className="card-title">Bar Hop</h5>
                <p className="card-text">
                  Android Social Media App connecting people through bars they
                  visit
                </p>
                <a
                  href="https://github.com/KohnKaleb/BarHop"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </Card>
          </div>
          <div onClick={projectText("runCrafter")}>
            <Card className="card">
              <CardImg
                src={RunCrafter}
                className="card-img-top img-fluid"
                alt="A map with various running routes"
              />
              <div class="card-body">
                <h5 className="card-title">Run Crafter</h5>
                <p className="card-text">
                  Website that allows runners to choose different running routes
                  based on some chosen criteria
                </p>
                <a
                  href="https://github.com/KohnKaleb/create_my_runs"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </Card>
          </div>
        </Cards>
      </Section>
    );
}

export default Projects