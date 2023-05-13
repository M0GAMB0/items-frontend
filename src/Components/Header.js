import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <h2
      className="my-3 text-center"
      onClick={() => navigate("/")}
      style={{ cursor: "pointer" }}
    >
      HostBuddy Inc Assignment
    </h2>
  );
};

export default Header;
