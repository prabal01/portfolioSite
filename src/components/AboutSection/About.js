import React from "react";
import style from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import profileImg from "./profileImg.jpeg";
import CHeader from "../UI/CHeader/CHeader";
export default function About() {
  return (
    <div id="#About" className={style.aboutSection}>
      <Container className={style.content}>
        <Row className={style.headingRow}>
          <Col>
<CHeader index='01.' txt='About'/>
          </Col>
        </Row>
        <Row>
          <Col className={`${style.txtContent} h-50`}>
            <p className={style.para}>
              Anim veniam occaecat irure qui ex magna minim irure do pariatur.
            </p>
            <p className={style.para}>
              Anim veniam occaecat irure qui ex magna minim irure do pariatur.
              Lorem ullamco ea aute reprehenderit ad enim est exercitation
              officia ipsum proident exercitation ex. Aliquip dolor amet minim
              quis magna sit proident proident duis enim eiusmod voluptate.
              Aliquip est ea culpa laboris. Labore duis excepteur magna dolor in
              proident consectetur ullamco commodo id adipisicing ad quis Lorem.
            </p>
            <p className={style.para}>
              Anim veniam occaecat irure qui ex magna minim irure do pariatur.
              Lorem ullamco ea aute reprehenderit ad enim est exercitation
              officia ipsum proident exercitation ex.{" "}
            </p>
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
  );
}
