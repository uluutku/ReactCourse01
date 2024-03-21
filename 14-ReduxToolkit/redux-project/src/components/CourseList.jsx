import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "./CourseItem";
import "./CourseList.css";

function CourseList() {
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  console.log("cartItems", cartItems);
  return (
    <>
      {quantity < 1 ? (
        <div>Boş</div>
      ) : (
        <>
          <div className="course-list-container">
            {cartItems[0].map((item, index) => {
              return <CourseItem {...item} key={index} />;
            })}
          </div>
        </>
      )}

      <footer>
        <hr></hr>
        <div>
          <h4>Toplam Tutar: {total} </h4>
        </div>
        <button>Temizle</button>
      </footer>
    </>
  );
}

export default CourseList;
