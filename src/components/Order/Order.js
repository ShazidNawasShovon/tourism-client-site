import React from "react";
import { useForm } from "react-hook-form";
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
    fetch("http://localhost:5000/orders", {
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
    <div className="add-order my-0 py-5">
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
