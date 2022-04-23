import React from "react";
import { Link, useParams } from "react-router-dom";

const Services = (props) => {
  // let { id } = useParams();
  // console.log(id);
  let id = 888111;
  return (
    <div>
      <h1>Services</h1>
      <Link to={`/services/:${id}`}>sevice1</Link>
    </div>
  );
};

export default Services;
