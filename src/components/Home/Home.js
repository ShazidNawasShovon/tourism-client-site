import { Card, Carousel, Col, Container, Row } from "react-bootstrap";

import img0 from "../../images/banner/img-11.jpg";
import img1 from "../../images/banner/img-12.jpg";
import img2 from "../../images/banner/img-13.jpg";
import img4 from "../../images/home-section/img1.svg";
import img5 from "../../images/home-section/img2.svg";
import img6 from "../../images/home-section/img3.svg";
import ShowData from "../ShowData/ShowData";
import usePackages from "../../Hooks/usePackages";
const Home = () => {
  const { packages } = usePackages();
  return (
    <>
      <div className="container-fluid">
        <Carousel fade variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100  border rounded-5"
              src={img0}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Switzerland</h3>
              <p className="text-white">
                Swiss Cows – Say Cheese or Chocolate! Zermatt and Matterhorn:
                The Toblerone mountain.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Second slide" />

            <Carousel.Caption>
              <h3>Australia</h3>
              <p>
                Australia is globally famous for its natural wonders, wide-open
                spaces, beaches, deserts, "The Bush"
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Indonesia</h3>
              <p className="text-white">
                Indonesia is the world's largest island country and the
                14th-largest country
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h2 className="text-center fw-bold  fs-1 bg-dark text-white">
          GO-TOUR
        </h2>
      </div>
      <Container>
        <h2 className="text-center fw-bold my-3 fs-1  ">
          Welcome to <span className="text-info">GO-</span>
          <span className="text-info">TOUR</span>{" "}
        </h2>

        <br />
      </Container>
      <Container>
        <div className="card mb-3 w-100">
          <div className="row g-0 p-2 h-100">
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">
                  To help you make the most of your time in this amazing
                  country, refer often to our list of the top things to do while
                  you are traveling with us. we make your travel easier.Mother
                  Earth along with mankind have co-created some of the most
                  spectacular places on this planet. From sprawling cities to
                  spectacular national parks, it is hard to keep your bucket
                  list stagnant.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://preview.colorlib.com/theme/adventure/img/xabout-img.jpg.pagespeed.ic.DNvoj5XHxr.webp"
                className="img-fluid  rounded"
                alt=""
              />
            </div>
          </div>
          <div className="row g-0 p-2 h-100">
            <div className="col-md-4">
              <img
                src="https://preview.colorlib.com/theme/travel2/images/ximg_2.jpg.pagespeed.ic.KB4J-vC9lf.webp"
                className="img-fluid rounded"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="container bg-light  rounded">
                  <div>
                    <h2 className="fw-bold">OUR CUSTOMERS INCLUDE</h2>
                  </div>
                  <div>
                    <ul>
                      <li>Domestic and International Touriest</li>
                      <li>Private Pay Individuals &amp; Institutions</li>
                      <li>Rehabilitation Centers</li>
                      <li>Workers Compensation Management Companies</li>
                      <li>International Liason</li>
                      <li>Embassies and Consulates</li>
                      <li>Repatriation Organizations</li>
                      <li>International Tourism Assistance Organizations</li>
                      <li>Medical Tourism &amp; Travel Assistance</li>
                      <li>VIP Provider Industries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 p-2 h-100">
            <div className="col-md-8">
              <div className="card-body ">
                <p className="card-text">
                  The ultimate primary purpose of attractions is to attract the
                  customer's attention so that they can come to a specific
                  location and explore the various attractions on vacation. In
                  the travel and tourism industry, attractions therefore play a
                  particularly important role as this attracts tourists from all
                  over the world.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://preview.colorlib.com/theme/travel2/images/ximg_3.jpg.pagespeed.ic.gd4lnyCcRC.webp"
                className="img-fluid rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
      <div className="container-fluid bg-light my-5">
        <Container>
          <h2 className="text-center fw-bold mt-4 fs-1 text-dark my-3">
            Take a <span className="text-warning">Step Ahead</span>{" "}
          </h2>
          <Row xs={1} md={3} className="g-4 text-center bg-light">
            <Col>
              <Card className="h-100">
                <Card.Img variant="top" className="h-50 p-2" src={img4} />
                <Card.Body>
                  <Card.Title className="fw-bold">
                    Ready when you are
                  </Card.Title>
                  <Card.Text>
                    See where you can travel to right now and find the best
                    deals across thousands of flights, hotels and car hire
                    options
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Img variant="top" className="w-100" src={img5} />
                <Card.Body>
                  <Card.Title className="fw-bold">
                    Plan with confidence
                  </Card.Title>
                  <Card.Text>
                    Stay one step ahead with flexible flight tickets, free hotel
                    and car cancellation and the cleanest rooms around.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100">
                <Card.Img variant="top" className="h-50" src={img6} />
                <Card.Body>
                  <Card.Title className="fw-bold">Keep it simple</Card.Title>
                  <Card.Text>
                    No hidden fees. No hidden charges. No funny business. With
                    us, you’ll always know exactly where your money goes. So you
                    can relax before your trip even begins
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="card mb-3 p-3">
          <div className="row g-0">
            <div className="col-md-4 ratio ratio-16x9">
              <iframe
                className="rounded"
                src="https://www.youtube.com/embed/vzSHcyXfNPw"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fw-bold fs-2 ">Nature Beauty</h5>
                <p className="card-text text-muted">
                  Iceland is famous for being called the Land of Fire and Ice
                  because of its volcanoes and glaciers. It is dotted with
                  natural wonders such as The Blue Lagoon and Dettifoss
                  Waterfall. Iceland is also known for its rich cultural
                  history, Norse mythology, folklore, and having no official
                  family names
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
          Special offers & <span className="text-warning"> Packages</span>{" "}
        </h2>
        <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
          {packages.slice(0, 6).map((packege) => (
            <ShowData key={packege._id} package={packege}></ShowData>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
