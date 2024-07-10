import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/weather.png";
import projImg2 from "../assets/img/TicTac.png";
import projImg3 from "../assets/img/starbucks.png";
import projImg4 from "../assets/img/amazo.jpg"
import projImg5 from "../assets/img/portfolio.png"
import projImg6 from "../assets/img/Solid_black.jpg"
import colorSharp from "../assets/img/color-sharp.png"


import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "Weather Forecast Application",
      description: "The application that predict the conditions of the atmosphere for a given location and time",
      imgUrl: projImg1,
      Link: "https://devang127.github.io/WeatherForecastwebsite/"
    },
    {
      title: "Tic Tac Toe Application",
      description: "A game in which two players take turns in drawing either an ` O' or an ` X' in one square of a grid consisting of nine squares",
      imgUrl: projImg2,
      Link: "https://devang127.github.io/tictactoe/"
    },
    {
      title: "Starbucks website clone",
      description: "Design " ,
      imgUrl: projImg3,
      Link: "https://devang127.github.io/Satrbucks/"
    },
    {
      title: "Amazon website clone",
      description: "Design ",
      imgUrl: projImg4,
      Link: "https://devang127.github.io/Amazon-Website-Clone/"
    },
    {
      title: "Portfolio Website",
      description: "Develop & Design ",
      imgUrl: projImg5,
      Link: "https://devang127.github.io/WeatherForecastwebsite/"
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                Link={project.Link}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="second-txt">
                        <ol>
                          <li>Google cloud skill boost - Google Cloud career readiness Associate Cloud
                          Engineer track.</li><br></br>
                          <li>AWS Academy Graduate - AWS Academy Introduction to Cloud Semester
                          </li>
                        </ol>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <div className="second-txt">
                        <ol>
                          <li>Developed multiple personal projects showcasing front-end development skills.
                          </li><br></br>
                          <li>Contributor to open-source projects on GitHub.</li>
                        </ol>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
      
    </section>
  )
}
