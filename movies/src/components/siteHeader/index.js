import React, { useState } from "react";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';

function SiteHeader() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const navigate = useNavigate();

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
    setShowOffcanvas(false);
  };

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Upcoming", path: "/movies/upcoming" },
    { label: "TV Series", path: "/series" },
    { label: "Popular People", path: "/actors" },
    { label: "More", subMenu: [
      { label: "Latest Movies", path: "/movies/latest" },
      { label: "Movie Favorites", path: "/movies/favorites" },
      { label: "TV Show Favorites", path: "/series/favorites" },
    ] },
  ];

  return (
    <>
      <Navbar bg="secondary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontSize: '25px' }}>GalacticFlicks</Navbar.Brand>
          <span className="slogan" style={{ fontSize:"16px" , marginLeft: "40px", marginRight: "40px" }}>
            The Universe of Movies Awaits Your Discovery
          </span>
          <Navbar.Toggle onClick={() => setShowOffcanvas(!showOffcanvas)} />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto">
              {menuOptions.map((opt) => (
                opt.subMenu ? (
                  <NavDropdown title={opt.label} id={opt.label} key={opt.label}>
                    {opt.subMenu.map((subOpt) => (
                      <NavDropdown.Item
                        key={subOpt.label}
                        as={Link}
                        to={subOpt.path}
                        onClick={() => handleMenuSelect(subOpt.path)}
                      >
                        {subOpt.label}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    key={opt.label}
                    as={Link}
                    to={opt.path}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </Nav.Link>
                )
              ))}
            </Nav>
          </Navbar.Collapse>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="warning">Search</Button>
          </Form>
        </Container>
      </Navbar>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav">
            {menuOptions.map((opt) => (
              <li key={opt.label} className="nav-item">
                <a
                  href={opt.path}
                  className="nav-link"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </a>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SiteHeader;
