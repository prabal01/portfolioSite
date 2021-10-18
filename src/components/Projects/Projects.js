import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CCard from "../UI/Card/Card";
import CHeader from "../UI/CHeader/CHeader";
import style from "./style.module.css";
export default function Projects() {
  return (<>
    <Container className={style.projectContainer} id='Projects'>
      <Container >
        <Row style={{marginBottom:'50px'}}>
          <Col>
            <CHeader index="03." txt="Projects" />
          </Col>
        </Row>
        <Row>
            <Col>
            <CCard/>
            </Col>
        </Row>
      </Container>
    </Container>
    </>
  );
}
