import React from "react";
import SmoothList from "react-smooth-list";
import "./navbar.css";
export default function Navbar({ showNav, toggle }) {
  const menuItems = [
    {
      name: "Home",
      linkTo: "/",
    },
    {
      name: "Portfolio",
      linkTo: "/",
    },
    {
      name: "Work Experience",
      linkTo: "/",
    },
    {
      name: "Intro",
      linkTo: "/",
    },
    {
      name: "Blog",
      linkTo: "/",
    },
    {
      name:'contact',
      linkTo:'/contact'
    }
  ];

  return (
    <>
      {!showNav && (
        <i className="bi bi-list navIcon" onClick={() => toggle()} />
      )}
      {showNav && (
        <div className="navMenu">
          <i
            className="bi bi-x-lg navIcon"
            style={{ fontSize: "2rem", top: "30px", right: "38px" }}
            onClick={() => toggle()}
          />
          <SmoothList delay="200" className="navMenuItems">
            {menuItems.map((item) => (
              <div className="navItemDiv" >
              <h1 className="navItem">{item.name}</h1>
              </div>
            ))}
          </SmoothList>
        </div>
      )}
    </>
  );
}
