import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../UI/CButton/button";
import CHeader from "../UI/CHeader/CHeader";
import style from "./style.module.css";

export default function ContactMe() {
  return (
    <>
      <Container id='Contact' style={{marginTop:'50px'}}>
        <Row>
          <CHeader index="04." txt="Want to Say Something?" />
          <p className={style.subHeading}>Feel free to reach out.</p>
        </Row>
        <Row>
          <Col>
            <p className={style.content}>
              Laborum commodo ut ipsum ex Lorem velit esse.Non aute duis anim
              reprehenderit exercitation laborum adipisicing velit fugiat.Irure
              laborum consequat anim Lorem magna ullamco elit nulla laboris
              excepteur sit.Cillum commodo esse excepteur ipsum mollit sint
              dolore.
            </p>
          </Col>
        </Row>
        <Row>
            <Col style={{textAlign:"left"}}>
          <CButton
            mt="50px"
            pd="16px 48px"
            h='58px'
            w='203.61px'
            >
            Contact Me!
          </CButton>
          <div className={style.outline}></div>
              </Col>
              </Row>
      </Container>
    </>
  );
}
