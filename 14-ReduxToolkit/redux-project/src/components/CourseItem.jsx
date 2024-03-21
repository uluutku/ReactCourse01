import React from "react";
import "./CourseItem.css";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaMinusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { removeItem, increaseItem, decreaseItem } from "../control/cardSlice";

function CourseItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img src={img} alt={title} />
      <div className="details">
        <label>{title} </label>
        <label>Ücret: {price} TL</label>
      </div>
      <div className="btn-container">
        <button>
          <FaMinusCircle
            onClick={() => {
              dispatch(decreaseItem(id));
            }}
          />
        </button>

        <label>Miktar: {quantity} </label>

        <button>
          <IoAddCircleSharp
            onClick={() => {
              dispatch(increaseItem(id));
            }}
          />
        </button>
      </div>

      <button className="delete-btn">
        <TiDelete
          onClick={() => {
            dispatch(removeItem(id));
          }}
        />
      </button>
    </div>
  );
}

export default CourseItem;
