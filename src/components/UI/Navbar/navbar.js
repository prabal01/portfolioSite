import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import SmoothList from "react-smooth-list";
import CButton from "../CButton/button";
import style from "./style.module.css";
export default function CNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "#0a192f" }}
      className={style.CNavbar}
    >
      <Container>
        <SmoothList delay="300">
          <Navbar.Brand href="#home" style={{ color: "#64ffda", paddingLeft:'30px' }}>
              <strong>
            {"< Prabal />"}
              </strong>
          </Navbar.Brand>
        </SmoothList>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{color:'#64ffda'}}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav style={{paddingLeft:'30px'}}>
            <SmoothList delay="500">
              <Nav.Link href="#About"><span className={style.menuOption}><span className={style.number}>01.</span> About</span></Nav.Link>
            </SmoothList>
            <SmoothList delay="700">
              <Nav.Link href="#Experience"><span className={style.menuOption}><span className={style.number}>02.</span> Experience</span></Nav.Link>
            </SmoothList>
            <SmoothList delay="900">
              <Nav.Link href="#Projects"><span className={style.menuOption}><span className={style.number}>03.</span> Projects</span></Nav.Link>
            </SmoothList>
            <SmoothList delay="1100">
              <Nav.Link href="#Contact"><span className={style.menuOption}><span className={style.number}>04.</span> Contact</span></Nav.Link>
            </SmoothList>
            <SmoothList delay="1300">
              <Nav.Link href="/resume.pdf" target='_blank'><CButton>Resume</CButton></Nav.Link>
            </SmoothList>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

