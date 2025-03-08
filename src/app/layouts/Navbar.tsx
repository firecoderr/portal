import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-end gap-5 bg-blue-500 p-5">
      <NavLink to="/">Отправить форму</NavLink>
      <NavLink to="/login">Логин</NavLink>
    </div>
  );
};

export default Navbar;
