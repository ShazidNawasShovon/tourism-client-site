import { useEffect, useState } from "react";
import Rating from "react-rating";

const usePackages = () => {
  // packages to be rendered on the UI
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("https://agile-inlet-86907.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  <Rating
    className="text-warning"
    initialRating={packages.rating}
    emptySymbol="far fa-star icon-color"
    fullSymbol="fas fa-star icon-color"
    readonly
  ></Rating>;
  return { packages, setPackages };
};

export default usePackages;
