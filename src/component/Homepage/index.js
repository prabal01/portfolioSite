import { Particles } from "react-particles-js";
import { particleConfig } from "../../particleConfig";
import Navbar, { MyNavbar } from "../UI/navbar";
import SmoothList from "react-smooth-list";
import "./Homepage.css";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";



export const Homepage = () => {

  const [showNav, setShowNav] = useState(false)
  const toggle = () => setShowNav(!showNav)
  return (<>
      <Navbar showNav={showNav} toggle={toggle}/>
    {!showNav && <Container className='homepageContainer'>
    <Particles height="100vh" width="100vw" params={particleConfig} className='particlesBackground'/>;
        <div className="headerContent">
          <SmoothList delay='200' className='textAndButtons' style={{width:'fit-content'}}>
            <p className='titleText'>Hi,</p>
            <p className='titleText'>I am <span className="name">Prabal Saxena</span></p>
            <p>I convert coffee  ☕️  into {` </code> `}</p>
        <SmoothList>
        <div className='buttonContainer'>
        <Button variant="outline-warning " className='contactBtn'>Contact Me</Button>  
        <Button variant="danger" className='dwnldBtn'>Download Resume</Button>
        </div>
        </SmoothList>
          </SmoothList>
        </div>
    </Container>}
    </>
  );
};
