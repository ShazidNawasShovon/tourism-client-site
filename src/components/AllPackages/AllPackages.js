import React from "react";
import { Container, Row } from "react-bootstrap";
import usePackages from "../../Hooks/usePackages";
import ShowData from "../ShowData/ShowData";

const AllPackages = () => {
  const { packages } = usePackages();
  return (
    <Container>
      <h2 className="text-center fw-bold mt-4 fs-1 text-dark">
        Featured <span className="text-warning"> Destination</span>{" "}
      </h2>
      <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
        {packages.map((packege) => (
          <ShowData key={packege._id} package={packege}></ShowData>
        ))}
      </Row>
    </Container>
  );
};

export default AllPackages;
