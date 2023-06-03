import { useState, React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/imgs/contact-img.svg";
// import { status } from 'init';

export default function Contact() {
  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log(e);

    console.log("Data", formDetails);
    setButtonText("Sending");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = response.JSON;
    setFormDetails(formInitialDetails);
    if(result.code ===200){
        setStatus({success:true,message:"Message Sent Successfully!"});

    }else{
        setStatus({success:false,message:"Something went wrong, please try again or send message manually to rohitpandey73551@gmail.com"});
    }

  };
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: [value] });
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

    // const status = {
    //   success: false,
    //   message: "Hii there Rohit Pandey",
    // };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={contactImg} alt="Contact Me" />
            </Col>
            <Col md={6}>
              <h2>Get In Touch</h2>
              <form onSubmit={onFormSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) => {
                        onFormUpdate("firstName", e.target.value);
                      }}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => {
                        onFormUpdate("lastName", e.target.value);
                      }}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email"
                      onChange={(e) => {
                        onFormUpdate("email", e.target.value);
                      }}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone Number"
                      onChange={(e) => {
                        onFormUpdate("phone", e.target.value);
                      }}
                    />
                  </Col>
                  <Col sm={12} className="px-1">
                    <textarea
                      type="text"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => {
                        onFormUpdate("message", e.target.value);
                      }}
                    />
                  </Col>
                  <Col>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
