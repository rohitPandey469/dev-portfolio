import { useState, React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/imgs/contact-img.svg";

export default function Contact() {
  const onFormSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending")
    if (
      formDetails.firstName &&
      formDetails.email 
    ) {
      const url =
        "https://contact-form-try-cfebc-default-rtdb.firebaseio.com/try-contact-form.json";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      };
      const res = await fetch(url, options);
      if (res) {
        alert("Data Sent");
        setFormDetails(formInitialDetails);
        setButtonText("Send");
        setStatus({success:true,message:"Data sent successfully"})
      } else {
        alert("Something went wrong");
        setStatus({success:false,message:"Oops! Something went wrong!"})
      }
    } else {
      alert("Fill out all the fields!");
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
  const [status,setStatus]=useState({success:false,message:""});

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
              <form>
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
                    <button type="submit" onClick={onFormSubmit}>
                      <span>{buttonText}</span>
                    </button>

                  </Col>
                  <Col className={status.success===false?"danger":"success"}>{status.message}</Col>
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
