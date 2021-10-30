import React from "react";
import {
  Card,
  Col,
  Container,
  Image,
  NavLink,
  Row,
  Button,
} from "react-bootstrap";
import img3 from "../../images/about us/about.jpg";
import img4 from "../../images/about us/our mission.jpg";
import img5 from "../../images/about us/vision.jpg";
import img6 from "../../images/about us/our goal.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Image src={img3} fluid rounded />
        </Row>
        <h2 className="text-center fw-bold  fs-1 bg-dark text-white">
          ABOUT-<span className="">US</span>{" "}
        </h2>

        <p>
          <span className="fw-bold">GO-TOUR</span> wanted to show all flight
          options in one place, creating a simple alternative to the confusing
          sites that make travel feel like hard work. Fast forward to today and
          we’ve gone from a flight search engine to a global leader in travel.
          We're proud that more than 100 million people across the world (that's
          quite a few!) rely on our app and website each month to help them with
          their travel plans.
        </p>

        <span className="fw-bold">
          Our experience involves identifying, coordinating, and organizing
          travilling agent.
        </span>
        <NavLink className="text-center my-5" as={Link} to="/contact">
          <Button variant="outline-dark ">CONTACT US</Button>
        </NavLink>
      </Container>
      <Container className="my-4">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="h-100 p-3">
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>OUR MISSION</Card.Title>
                <Card.Text>
                  GO-TOUR is a global travel site comparing places. We don't
                  sell flight tickets, hotel rooms or car rental deals – we show
                  you an overview of available travel options, the latest
                  available prices and let you choose the offer you prefer. One
                  click and you're taken directly to your chosen site where the
                  booking is completed. Today, we inspire travelers across more
                  than 30 international markets and are internationally praised
                  for our unique product and services. We have been recommended
                  by leading media such as The Daily Telegraph, Forbes, Time and
                  AOL, and have won industry accolades for Best Meta Search
                  Website and Best Airfare Search Site.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 p-3">
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title>OUR VISION</Card.Title>

                <Card.Text>
                  We think everybody should be able to travel the world. Our
                  vision is of a world where our differences are a source of
                  inspiration and development, not intolerance and prejudice.
                  Our purpose is to give courage and encourage each one of us to
                  stay curious and be open-minded so we can all enjoy a better,
                  more diversified world.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100 p-3">
              <Card.Img variant="top" src={img6} />
              <Card.Body>
                <Card.Title>OUR GOAL</Card.Title>

                <Card.Text>
                  OUR GOAL We provide outstanding transportation coordination
                  services to offer your organization quicker, better, more
                  cost-efficient outcomes. Our goal is to make your travels look
                  good! We love what we do. Our passion is to make a difference
                  in touriest platform .
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
