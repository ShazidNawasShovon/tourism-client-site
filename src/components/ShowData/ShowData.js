import { Card, Col, NavLink, Button } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import "./ShowData.css";
const ShowData = (props) => {
  // Destructuring Data

  const { name, price, place, rating, days, details, img, _id } = props.package;

  return (
    <div>
      <Col className="h-100">
        <Card variant=" mx-auto " className="h-100">
          <Card.Img variant="top p-3  " src={img} className="rounded" />
          <Card.Body>
            <Card.Title>
              {" "}
              <strong className="fw-bold">{name},</strong>{" "}
              <small>{place}</small>
            </Card.Title>
            <Card.Text className="d-flex justify-content-between align-items-center">
              {" "}
              <span className="text-muted">{days}</span>
              <span className="  p-2 price">
                <strong className="fw-bold fs-4">Just $</strong>{" "}
                <strong className="fw-bold fs-4"></strong>{" "}
                <span className="text-danger price">{price}</span>
              </span>
            </Card.Text>
            <Card.Text>
              {" "}
              <span className="text-muted">{details}</span>{" "}
            </Card.Text>

            <NavLink as={Link} to={`/package/${_id}`}>
              <Button variant="outline-danger">Details</Button>
            </NavLink>
          </Card.Body>
          <Card.Footer className=" d-flex justify-content-between align-items-center">
            <span>
              <Rating
                className="text-warning"
                initialRating={rating}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly
              ></Rating>
              <strong> ({rating})</strong>
            </span>

            <small className="text-muted">
              <NavLink as={Link} to={`/order/${_id}`}>
                <Button variant="outline-danger">Book Now</Button>
              </NavLink>
            </small>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default ShowData;
