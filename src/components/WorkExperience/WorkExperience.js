import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CHeader from "../UI/CHeader/CHeader";
import style from "./style.module.css";
export default function WorkExperience() {
  return (
    <Container className={style.workExpContainer}>
      <Row style={{marginBottom: '50px'}}>
        <Col md={6}></Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CHeader index="02." txt="Work Experience" />
        </Col>
      </Row>

      <Row>
        <Col className={style.companyNamesDiv} sm={3} style={{minWidth:'150px',marginRight:'30px'}}>
          <div className={`${style.companyNamebtn} ${style.active}`}>KreditBee</div>
          <div className={style.companyNamebtn}>The 10x Academy</div>
        </Col>
        <Col style={{textAlign:'left',padding:'0 20px'}}>
        Quis pariatur nostrud minim cupidatat sunt sunt et. Aliquip aliqua eu commodo ea ex non dolor commodo officia incididunt quis quis velit nostrud.Eu culpa minim officia eu fugiat mollit enim.
        </Col>
      </Row>
    </Container>
  );
}
