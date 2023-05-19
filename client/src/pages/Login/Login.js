import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const tokenvalue = JSON.parse(localStorage.getItem("token"));
    if (tokenvalue) {
      navigate("/main");
    } else {
      navigate("/");
    }
  }, []);

  const login = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("/user/login", {
      username,
      password,
    });
    console.log(data);
    if (data && data.token) {
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/main");
    } else {
      alert(data.msg);
      navigate("/");
    }
  };

  return (
    <div>
      <form>
        <Form className="login">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={login}>
            Login
          </Button>
        </Form>
      </form>
    </div>
  );
};

export default Login;
