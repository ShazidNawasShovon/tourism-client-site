import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import usePackages from "../../Hooks/usePackages";
import "./Order.css";
const Order = () => {
  const { serviceId } = useParams();
  const { packages } = usePackages();

  let packageToShow = packages.filter((pack) => pack._id === serviceId);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    // const savedCart = ;
    data.cart = packageToShow;
    fetch("https://agile-inlet-86907.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Your Order is Placed,\n We will Contact with You very Soon !");
        reset();
      });
  };

  return (
    <div className="add-order my-0 py-5 container-fluid">
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
              </div>
            </div>
          </div>
        </div>
      </Container>
      <h2 className="fw-bold">Order Process</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={user.displayName} {...register("name")} />
        <input
          defaultValue={user.email}
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error">This field is required</span>}{" "}
        <input placeholder="Address" defaultValue="" {...register("address")} />
        <input placeholder="City" defaultValue="" {...register("city")} />
        <input
          placeholder="phone number"
          defaultValue=""
          {...register("phone", { required: true })}
        />
        {errors?.phone?.type === "required" && <p>This field is required</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Order;
