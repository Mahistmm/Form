import React, { useState } from "react";
import "./Add.css";
import axios from "../../axios";
import Header from "../Header/Header";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";

const Add = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [spoucename, setSpoucename] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");
  const [contact_no, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [noc, setNoc] = useState("");
  const [dob, setDob] = useState("");
  const [child1, setChild1] = useState("");
  const [child2, setChild2] = useState("");
  const [child3, setChild3] = useState("");

  const [gender, setGender] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/add/person", {
        firstname,
        lastname,
        spoucename,
        email,
        child1,
        child2,
        child3,
        noc,
        age,
        qualification,
        contact_no,
        address,
        dob,
        gender,
      });
      setFirstname("");
      setLastname("");
      setAge("");
      setQualification("");
      setContact("");
      setAddress("");
      setDob("");
      setChild1("");
      setChild2("");
      setChild3("");
      setNoc("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <Form className="input_field">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your FirstName"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your LastName"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>SpouceName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your LastName"
              value={spoucename}
              onChange={(e) => setSpoucename(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mobile No</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile No"
              value={contact_no}
              onChange={(e) => setContact(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Qualification</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>DOB</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter Date Of Birth"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Gender</Form.Label>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Male"
                  name="group1"
                  type={type}
                  value="male"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type={type}
                  value="Female"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="Others"
                  name="group1"
                  type={type}
                  value="others"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Number Of Childrens </Form.Label>
            <Form.Control
              value={noc}
              onChange={(e) => setNoc(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Add Child </Form.Label>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="mb-3"
              >
                Click to enter childname
              </Dropdown.Toggle>

              <Dropdown.Menu className="add_dropdown">
                <Form.Group
                  className="mb-3"
                  controlId="formGridAddress1"
                  style={{ width: 500 }}
                >
                  <Form.Label>Child1</Form.Label>
                  <Form.Control
                    placeholder="Enter children name "
                    value={child1}
                    onChange={(e) => setChild1(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formGridAddress1"
                  style={{ width: 500 }}
                >
                  <Form.Label>Child2</Form.Label>
                  <Form.Control
                    placeholder="Enter children name"
                    value={child2}
                    onChange={(e) => setChild2(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formGridAddress1"
                  style={{ width: 500 }}
                >
                  <Form.Label>Child3</Form.Label>
                  <Form.Control
                    placeholder="Enter children name"
                    value={child3}
                    onChange={(e) => setChild3(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formGridAddress1"
                  style={{ width: 500 }}
                >
                  <Form.Label>Child4</Form.Label>
                  <Form.Control placeholder="Enter children name" />
                </Form.Group>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          {/* <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group> */}
        </Row>

        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Add;
