import React from "react";
import "./float.css";

const Float = ({image, text1, text2 }) => {
  return (
    <div className="float">
      <img src={image} alt=""/>
      <span>
        {text1} <br />
        {text2}
      </span>
    </div>
  );
};

export default Float;
