import React from "react";
import { Container, Nav, Row, Col, Tab } from "react-bootstrap";
import dataArray1 from "./ProjectDataFirst";
import dataArray2 from "./ProjectDataSecond";
import dataArray3 from "./ProjectDataThird";
import ProjectCard from "./ProjectCard";
import colorSharpR from "../assets/imgs/color-sharp2.png";
import navIcon1 from "../assets/imgs/nav-icon1.svg";

export default function Projects() {
  return (
    <>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                Some of the Projects which I had completed while tweaking and
                along with my mentor are listed below- <br />
                OTHER PROJECTS PRESENT ON LINKEDIN ACCOUNT{" "}
                <a
                  href="https://www.linkedin.com/in/rohit-pandey-2500b6215/"
                  target="_blank"
                  style={{
                    border:"1px solid #fff",
                    borderRadius:"50%",
                    padding:"2px 10px",
                    textAlign:"center"
                  }}
                >
                  <img src={navIcon1} alt="./." />
                </a>
              </p>
              <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav
                  activekey="first"
                  variant="pills"
                  className="justify-content-end"
                >
                  <Nav.Item id="projects-tabs-first">
                    <Nav.Link eventKey="first">Tab-1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item id="projects-tabs-second">
                    <Nav.Link eventKey="second">Tab-2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item id="projects-tabs-third">
                    <Nav.Link eventKey="third">Tab-3</Nav.Link>
                  </Nav.Item>
                  <Nav.Item id="projects-tabs-fourth">
                    <Nav.Link eventKey="fourth" disabled>
                      Tab-4
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {dataArray1.map((data, index) => {
                        return <ProjectCard key={index} {...data} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {dataArray2.map((data, index) => {
                        return <ProjectCard key={index} {...data} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {" "}
                      {dataArray3.map((data, index) => {
                        return <ProjectCard key={index} {...data} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img src={colorSharpR} alt="" className="background-image" />
      </section>
    </>
  );
}
