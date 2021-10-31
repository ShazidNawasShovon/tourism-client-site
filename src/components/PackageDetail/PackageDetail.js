import React from "react";
import { Container, Image, Row, Button, NavLink } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import usePackages from "../../Hooks/usePackages";
const PackageDetail = () => {
  // using useParam for dynamic data

  const { serviceId } = useParams();
  const { packages } = usePackages();
  let packageToShow = packages?.filter((pack) => pack._id === serviceId);
  return (
    <div className="container-fluid">
      <Row>
        <Image
          src="https://preview.colorlib.com/theme/direngine/images/xbg_1.jpg.pagespeed.ic.-pmz16MBLM.webp"
          fluid
          rounded
        />
      </Row>
      <h2 className="text-center fw-bold  fs-1 bg-dark text-white">
        PACKAGE-<span className="">DETAIL</span>{" "}
      </h2>
      <Container>
        <div className="card mb-3 w-100">
          <div className="row g-0 p-2">
            <div className="col-md-4 my-auto mx-auto">
              <img
                src={packageToShow[0]?.img}
                className="img-fluid rounded "
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fw-bold fs-3">
                  {packageToShow[0]?.name},
                  <br />
                </h5>
                <p className="text-muted ">{packageToShow[0]?.place}</p>
                <p className="card-text text-muted">
                  {packageToShow[0]?.fullDetails}
                </p>
                <div className=" card-text d-flex justify-content-between align-items-center">
                  <p className="text-muted">{packageToShow[0]?.days}</p>
                  <p className=" fw-bold ">
                    {" "}
                    <span className=" fw-bold fs-5 p-2 price">
                      <span className="fw-bold">Just </span>{" "}
                      <span className="fw-bold fs-4">$</span>{" "}
                      <span className="text-danger price">
                        {packageToShow[0]?.price}
                      </span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between align-items-center">
                <small>
                  <Rating
                    className="text-warning"
                    initialRating={packageToShow[0]?.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                  ></Rating>
                  <span> ({packageToShow[0]?.rating})</span>
                </small>
                <small className="text-muted">
                  <NavLink as={Link} to={`/order/${serviceId}`}>
                    <Button variant="outline-danger">Book Now</Button>
                  </NavLink>
                </small>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PackageDetail;
