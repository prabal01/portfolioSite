import React from "react";
import style from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import profileImg from "./profileImg.jpeg";
import CHeader from "../UI/CHeader/CHeader";
import ProgressBar from "react-bootstrap/ProgressBar";
import SmoothList from "react-smooth-list";
export default function About() {
  const skills = [
    {
      title: "React",
      exp: "90",
    },
    {
      title: "Node.Js",
      exp: "90",
    },
    {
      title: "MySQL",
      exp: "80",
    },
    {
      title: "AWS",
      exp: "65",
    },
    {
      title: "MongoDB",
      exp: "80",
    },
    {
      title: "Golang",
      exp: "70",
    },
  ];
  return (
    <>
      <div id="About" className={style.aboutSection}>
        <Container className={style.content}>
          <Row className={style.headingRow}>
            <Col>
              <CHeader index="01." txt="About" />
            </Col>
          </Row>
          <Row>
            <Col className={`${style.txtContent} h-50`}>
              <p className={style.para}>
                Hi, My name is Prabal Saxena. I love coding and building new things.
                Currently, I am working as a Software Engineer{" "}
                <a
                  className={style.coloredTxt}
                  href="https://www.kreditbee.in/"
                >
                  @KreditBee.
                </a>
              </p>
              <p className={style.coloredTxt}> Skills</p>
              <Container>
                {skills.map((skill,index) => (
                  <SmoothList delay={index*500}>
                  <Row>
                    <Col className={style.skills}>
                      <td><span className={style.coloredTxt}># </span>{skill.title}</td>
                    </Col>
                    <Col>
                      <ProgressBar now={skill.exp} visuallyHidden variant="#64ffda"  className={style.progressBar}/>
                    </Col>
                  </Row>
                  </SmoothList>
                ))}
              </Container>
            </Col>
            <Col className={style.imgContent}>
              <div className={style.outline}>
                <img src={profileImg} alt="" className={style.profileImg} />
              </div>
              {/* <div className={style.overlay}></div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
