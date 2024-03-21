import React from "react";
import "./CourseItem.css";

function CourseItem({ id, title, price, img, quantity }) {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="details">
        <label>{title} </label>
        <label>Ücret: {price} TL</label>
        <label>Miktar: {quantity} </label>
      </div>
    </div>
  );
}

export default CourseItem;
