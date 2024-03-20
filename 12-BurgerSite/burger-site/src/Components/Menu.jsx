import React from "react";
import { Data } from "../helpers/Data";
import "../styles/Menu.css";
import MenuItem from "./MenuItem";

export const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {Data.map((menuItem, index) => {
          return (
            <MenuItem
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
