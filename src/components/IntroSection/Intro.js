import style from "./style.module.css";
import React from "react";
import SmoothList from "react-smooth-list";
import CButton from "../UI/CButton/button";
import Particles from "react-particles-js";
import { particleConfig } from "../../particleConfig";
import { Container } from "react-bootstrap";

export default function Intro() {
  return (
    <Container className={style.IntroSection}>
        <div className={style.content}>
      <SmoothList delay='1500'>
        <p className={style.introStart}>Hi, My name is</p>
        </SmoothList>
        <SmoothList delay='1600'>
        <h1 className={style.name}>Prabal Saxena.</h1>
        </SmoothList>
        <SmoothList delay='1700'>
        <h1 className={style.iDo}>I convert coffee into code.</h1>
        </SmoothList>
        <SmoothList delay='1800'>
        <p className={style.IntroPara}>
          Lorem ex culpa eu sunt in consequat quis consequat elit nulla. Aliqua
          amet in minim qui laboris enim tempor aute. Velit id minim ex
          excepteur. Nisi veniam culpa Lorem nisi deserunt.
        </p>
        </SmoothList>
        <SmoothList delay='1900'>
        <CButton mt='50px' pd='16px 48px'>
            Contact Me!
        </CButton>
      </SmoothList>
      <SmoothList delay='1600'>
        <div className={style.outline}></div>
        </SmoothList>
      <Particles params={particleConfig} className={style.particle}/>
      </div>
    </Container>
  );
}
