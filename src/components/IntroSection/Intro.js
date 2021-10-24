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
        <h1 className={style.iDo}>I am a Full Stack Developer.</h1>
        </SmoothList>
        <SmoothList delay='1800'>
        <p className={style.IntroPara}>
         and I am currenty working as a Software Engineer @KreditBee.<br/>
        </p>
        </SmoothList>
        <SmoothList delay='1900'>
        <a href="#Contact">
        <CButton mt='50px' pd='16px 48px'>
            Contact Me!
        </CButton>
        </a>
      </SmoothList>
      <SmoothList delay='1600'>
        <div className={style.outline}></div>
        </SmoothList>
      <Particles params={particleConfig} className={style.particle}/>
      </div>
    </Container>
  );
}
