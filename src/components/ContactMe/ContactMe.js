import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CButton from "../UI/CButton/button";
import CHeader from "../UI/CHeader/CHeader";
import style from "./style.module.css";

export default function ContactMe() {
  return (
    <>
      <Container id="Contact" style={{ marginTop: "50px" }}>
        <Row>
          <CHeader index="04." txt="Want to Say Something?" />
          {/* <p className={style.subHeading}>Feel free to reach out.</p> */}
        </Row>
        <Row>
          <Col>
            <p className={style.content}>
            For any query, or just to say hello, get in touch and contact me.            </p>
          </Col>
        </Row>
        <Row>
          <form
            action="mailto:prabalsaxena2401@gmail.com"
            method="post"
            enctype="text/plain"
            style={{ marginTop: "50px" }}
          >
            <Col style={{ textAlign: "left" }}>
              <span className={style.label}>Name:</span>
              <br />
              <input
                type="text"
                name="name"
                placeholder="Daenerys Targaryen "
              />
              <br />
              <br />
              <span className={style.label}> E-mail:</span>
              <br />
              <input type="text" name="mail" placeholder="abc@xyz.com" />
              <br />
              <br />
              <span className={style.label} placeholder="Hi! What's up?">
                {" "}
                Your Message:
              </span>
              <br />
              <input type="text" name="comment" placeholder="Hi! What's up?" />
              <br />
              <br />
              <br />
            </Col>
            <Col style={{ textAlign: "left" }}>
              <CButton
                mt="50px"
                pd="16px 48px"
                h="58px"
                w="203.61px"
                type="submit"
              >
                Send Mail
              </CButton>
              <div className={style.outline}></div>
            </Col>
          </form>
        </Row>
        <Row>
          <Col className={style.btm}>
            <a target="_blank"
              className={style.ContactMeTxt}
              href="https://wa.me/+919997365623/?text=Hi! I What's Up? "
            >
              {" "}
              <i className={`fab fa-whatsapp`}> </i>
              <span> Whatsapp</span>
            </a>
            <a target="_blank"
              className={style.ContactMeTxt}
              href="https://www.linkedin.com/in/prabal-saxena-478907188/ "
            >
              {" "}
              <i className={`fab fa-linkedin-in`}> </i>
              <span> LinkedIn</span>
            </a>
            <a target="_blank" className={style.ContactMeTxt} href="tel:+919997365623">
              {" "}
              <i className={`fas fa-phone-alt`}> </i>
              <span> Call</span>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
