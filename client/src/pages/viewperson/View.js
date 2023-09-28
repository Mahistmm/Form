import React, { useState, useEffect } from "react";
import "./View.css";
import Header from "../Header/Header";
import axios from "../../axios";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const View = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenvalue = JSON.parse(localStorage.getItem("token"));
    if (!tokenvalue) {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/add/data");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="view_contents">
      <Header />
      <h2>Form Details</h2>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <Table responsive striped bordered hover variant="primary" className="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
              <th>Date Of Birth</th>
              <th>Qualification</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Number of Children</th>
              <th>Child1</th>
              <th>Child2</th>
              <th>Child3</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, index) => (
              <tr key={index}>
                <td>{element.firstname}</td>
                <td>{element.lastname}</td>
                <td>{element.age}</td>
                <td>{element.dob}</td>
                <td>{element.qualification}</td>
                <td>{element.contact_no}</td>
                <td>{element.address}</td>
                <td>{element.noc}</td>
                <td>{element.child1}</td>
                <td>{element.child2}</td>
                <td>{element.child3}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default View;
