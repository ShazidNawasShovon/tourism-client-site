import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddPackage.css";
const AddPackage = () => {
  // Taken From React Hook Form
  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm();
  // Taken From React Hook Form On Submit
  const onSubmit = (data) => {
    axios
      .post("https://agile-inlet-86907.herokuapp.com/packages", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Package Added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-package my-0 py-5">
      <h2 className="fw-bold">Please Add a Package</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: true,
            maxLength: 30,
          })}
          placeholder="Full Name"
        />
        {errors?.name?.type === "required" && <p>This field is required</p>}
        {errors?.name?.type === "maxLength" && (
          <p>Name cannot exceed 30 characters</p>
        )}
        <input
          {...register("place", {
            maxLength: 20,
          })}
          placeholder="Place or Country Name"
        />
        {errors?.name?.type === "maxLength" && (
          <p>Name cannot exceed 20 characters</p>
        )}

        <input type="number" {...register("price")} placeholder="Price" />
        <input
          type="number || float"
          {...register("rating")}
          placeholder="Rating"
        />
        <textarea
          {...register("days")}
          placeholder="How many days & nights is this package ?
        Ex:(2 days 3 Nights)"
        />
        <textarea {...register("details")} placeholder="Short Description" />
        <textarea {...register("fullDetails")} placeholder="Full Description" />

        <input
          {...register("img", { required: true })}
          placeholder="Please Insert an Image url"
        />
        {errors?.img?.type === "url" && <p>Please Insert an image url</p>}
        {errors?.name?.type === "required" && (
          <p>Required ! Please insert an image url. Be careful!</p>
        )}
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddPackage;
