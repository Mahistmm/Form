import React, { useState, useEffect } from "react";
import "./Search.css";
import Header from "../Header/Header";
import axios from "../../axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [contact_no, setContactNo] = useState("");
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const tokenvalue = JSON.parse(localStorage.getItem("token"));
    if (tokenvalue) {
      navigate("/search");
    } else {
      navigate("/");
    }
  }, []);

  const Search_person = async (e) => {
    try {
      e.preventDefault();
      const data = await axios.post("/add/search", {
        contact_no,
      });
      if (data) {
        setData(data);
        setContactNo("");
      } else {
        alert("user is not found ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <form>
        <Form className="search">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="number"
              placeholder="Enter Mobile Number"
              value={contact_no}
              onChange={(e) => setContactNo(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={Search_person}>
            Search
          </Button>
        </Form>
      </form>

      {data ? (
        <div>
          <Table responsive variant="primary" className="table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Spoucename</th>
                <th>Age</th>
                <th>Email</th>
                <th>Date Of Birth</th>
                <th>Contact</th>
                <th>Qualification</th>
                <th>Address</th>
                <th>Number of childrens</th>
                <th>Child1</th>
                <th>Child2</th>
                <th>Child3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.data.firstname}</td>
                <td>{data.data.lastname}</td>
                <td>{data.data.spoucename}</td>
                <td>{data.data.email}</td>
                <td>{data.data.age}</td>
                <td>{data.data.dob}</td>
                <td>{data.data.contact_no}</td>
                <td>{data.data.qualification}</td>
                <td>{data.data.address}</td>
                <td>{data.data.noc}</td>
                <td>{data.data.child1}</td>
                <td>{data.data.child2}</td>
                <td>{data.data.child3}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      ) : (
        <div>
          <h1> </h1>
        </div>
      )}
    </div>
  );
};

export default Search;
