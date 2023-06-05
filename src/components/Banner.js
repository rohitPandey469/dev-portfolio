import { React, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/imgs/header-img.svg";
function Banner() {
  const [wordNumber, setWordNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["a web Developer", "a web Designer", "a Programmer"];
  const period = 200;

  const tick = () => {
    let i = wordNumber % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.25);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setWordNumber(wordNumber + 1);
      setDelta(500 - Math.random() * 200);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1 id="banner-title">
                {"Hi I'm Rohit,"} <span> {`${text}|`}</span>
              </h1>
              <p id="banner-bio">
                Bonjour! It is Rohit Pandey, a learner, yearning to be a full
                stack web developer, a college student. Well getting into this
                field is not so hard and I knew I gotta start somewhere so this
                is it.
                <br />
                P.S. IN CONTACT SECTION NOT TO MAKE YOU FEEL INSECURE SO CAN JUST SEND NAME AND EMAIL
              </p>
              <button
                className="banner-button"
                id="banner-button"
               
              >
                <a className="btn" href="#connect">
                  Let's Connect
                  <ArrowRightCircle size={25} />
                </a>
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={HeaderImg} alt="Header-image" id="banner-img" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Banner;
