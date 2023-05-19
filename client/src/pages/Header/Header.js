import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          sticky="top"
          key={expand}
          bg="primary"
          variant="dark"
          expand={expand}
          className="mb-3"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Offcanvas
              className="container"
              id={`offcanvasNavbar-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header
                closeButton
                className="close"
              ></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="/main" className="nav_link home">
                    Home
                  </Nav.Link>
                  <Nav.Link href="/add" className="nav_link">
                    Add
                  </Nav.Link>
                  <Nav.Link href="/search" className="nav_link">
                    Search
                  </Nav.Link>
                  <Nav.Link href="/view" className="nav_link">
                    View
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Header;
