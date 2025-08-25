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
                <p style={{ textAlign: "center" }}>
                  Skills which I am proficient in
                </p>
                <Carousel responsive={responsive} infinite={true} id="skill-slider">
                  {/* Frontend Technologies */}
                  <div className="item">
                    <img src={meter3} alt="" className="skill-slider-img"/>
                    <h5>React.js</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="" className="skill-slider-img"/>
                    <h5>Next.js</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="" className="skill-slider-img"/>
                    <h5>TypeScript</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="" className="skill-slider-img"/>
                    <h5>JavaScript</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>Redux</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>Tailwind CSS</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>GSAP</h5>
                  </div>
                  
                  {/* Backend Technologies */}
                  <div className="item">
                    <img src={meter3} alt="" className="skill-slider-img"/>
                    <h5>Node.js</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>Express.js</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>Nest.js</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>REST APIs</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>JWT & OAuth</h5>
                  </div>
                  
                  {/* Databases */}
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>MongoDB</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>PostgreSQL</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>Firebase</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" className="skill-slider-img"/>
                    <h5>Redis</h5>
                  </div>
                  
                  {/* DevOps & Cloud */}
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>AWS (EC2, S3)</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>Docker</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" className="skill-slider-img"/>
                    <h5>Kubernetes</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" className="skill-slider-img"/>
                    <h5>CI/CD (Jenkins)</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" className="skill-slider-img"/>
                    <h5>Terraform</h5>
                  </div>
                  
                  {/* Programming Languages */}
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>Python</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>Java</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>C++</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>SQL</h5>
                  </div>
                  
                  {/* Tools & Others */}
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>Git</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>Linux</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" className="skill-slider-img"/>
                    <h5>Postman</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" className="skill-slider-img"/>
                    <h5>Jira</h5>
                  </div>
                  
                  {/* Problem Solving & Algorithms */}
                  <div className="item">
                    <img src={meter3} alt="" className="skill-slider-img"/>
                    <h5>Problem Solving</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="" className="skill-slider-img"/>
                    <h5>DSA (LeetCode 1700+)</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" className="skill-slider-img"/>
                    <h5>System Design</h5>
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
