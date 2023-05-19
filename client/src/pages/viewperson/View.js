import React, { useState, useEffect } from "react";
import "./View.css";
import Header from "../Header/Header";
import axios from "../../axios";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const View = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tokenvalue = JSON.parse(localStorage.getItem("token"));
    if (tokenvalue) {
      navigate("/view");
    } else {
      navigate("/");
    }
  }, []);

  const view = async () => {
    const data = await axios.get("/add/data");
    setData([...data.data]);
  };

  useEffect(() => {
    view();
  }, []);

  return (
    <div className="view_contents">
      <Header />
      <h2>Form Details</h2>
      <div>
        {data ? (
          <div>
            <Table
              responsive
              striped
              bordered
              hover
              variant="primary"
              className="table"
            >
              <thead>
                <tr>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Age</th>
                  <th>Date Of Birth</th>
                  <th>Qualification</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Number of childrens</th>
                  <th>Child1</th>
                  <th>Child2</th>
                  <th>Child3</th>
                </tr>
              </thead>
              {data.map((element, index) => (
                <tbody key={index}>
                  <tr>
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
                </tbody>
              ))}
            </Table>
          </div>
        ) : (
          <div>
            <h1>No user data</h1>
          </div>
        )}
      </div>
      {/* <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table> */}
    </div>
  );
};

export default View;
