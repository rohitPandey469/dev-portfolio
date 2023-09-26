import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/imgs/meter1.svg";
import meter2 from "../assets/imgs/meter2.svg";
import meter3 from "../assets/imgs/meter3.svg";
import colorSharpL from "../assets/imgs/color-sharp.png";
import colorSharpR from "../assets/imgs/color-sharp2.png";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 100 },
      items: 1,
    },
  };
  return (
    <>
      <section className="skill" id="skill">
        <Container>
          <Row>
            <Col>
              <div className="skill-box">
                <h2 id="skill-title">Skills</h2>
                <p>
                  The Skills listed here are the ones on which I had worked for some period of time in past or still working. And I'm nowhere going to stop including more skills. The percentage rate here is moderately according to me (Not from a perspective of some expert hehe!).Have a look!
                  CONNECT THROUGH SOCIAL PLATFORM
                </p>
                <Carousel responsive={responsive} infinite={true} id="skill-slider">
                  <div className="item">
                    <img src={meter1} alt="" className="skill-slider-img"/>
                    <h5>HTML</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="" className="skill-slider-img"/>
                    <h5>CSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="" className="skill-slider-img"/>
                    <h5>JAVASCRIPT</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="" className="skill-slider-img"/>
                    <h5>NODE-JS</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>BOOTSTRAP</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>JAVA</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>SQL</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>mongoDB</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>PYTHON</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>CP</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>REACT-JS</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>PHP</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        <img src={colorSharpL} alt="" className="background-image-left" />
        <img src={colorSharpR} alt="" className="background-image-right" />
      </section>
    </>
  );
}
