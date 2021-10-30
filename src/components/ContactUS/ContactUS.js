import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import img7 from "../../images/ContactUS/contact.png";
import img8 from "../../images/ContactUS/Ambulance-USA-Contact-US-1-832-872-6667.jpg";

const ContactUS = () => {
  return (
    <>
      <Row>
        <Image src={img7} fluid />
      </Row>
      <h2 className="text-center fw-bold  fs-1 bg-dark text-white ">
        HOW CAN WE <span className=""> HELP?</span>{" "}
      </h2>

      <Container>
        <Row xs={1} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={img8} />
              <Card.Body>
                <Card.Title className="fw-bold">CONTACT INFO</Card.Title>
                <Card.Text>
                  <span className="fw-bold">
                    Dhaka & Faridpur : 01733331676
                  </span>
                  <br />
                  <span className="fw-bold">
                    International : +1(832) 872 2222{" "}
                  </span>
                  <br />
                  Customer Service & Operations:
                  <span className="fw-bold"> Ops@goTour.com</span>
                  <br />
                  Provider Relations:
                  <span className="fw-bold"> Providers@goTour.com</span>
                  <br />
                  General Information:
                  <span className="fw-bold"> Info@goTour.com</span>
                  <br />
                </Card.Text>
                <Card.Text>
                  <span className="fw-bold">
                    InfoHeadquarters mailing address
                    <br />
                    GO-TOUR.LLC
                  </span>
                  <br />
                  Parnanduali,Magura
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUS;
