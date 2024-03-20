import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banneryeni.jpg";
import "../styles/Home.css";

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <Button>Sipariş Ver</Button>
        </Link>
      </div>
    </div>
  );
};
