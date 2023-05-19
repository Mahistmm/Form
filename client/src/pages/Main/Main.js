import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const tokenvalue = JSON.parse(localStorage.getItem("token"));
    if (tokenvalue) {
      navigate("/main");
    } else {
      navigate("/");
    }
  }, []);
  return <div>Main</div>;
};

export default Main;
