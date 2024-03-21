import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import { calculateTotal } from "./control/cardSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(calculateTotal());
  }, [cartItems]);
  return (
    <>
      <Navbar />
      <CourseList />
    </>
  );
}

export default App;
