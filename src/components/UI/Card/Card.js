import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import style from "./style.module.css";

export default function CCard() {
  const projects = [
    {
      title: "Snapbook",
      techUsed:'React, Firebase, Styled-Components',
      desc: "A webapp  where user can create, edit and update the Image post. User can also view other people's post",
    },
    {
      title: "ChatBox (WhatsApp Clone)",
      techUsed:'React, Firebase, Styled-Components',
      link:'https://whatsapp-colne-869b7.web.app/',
      gitHub:' https://github.com/prabal01/whatsapp-clone',
      desc: "A web app where user can create a new chat room or participate in the existing chat room. Created using ReactJs and styled using CSS. Built authentication system using firebase.",
    },
    {
      title: "Filterbar",
      techUsed:'Chat Rooms App',
      desc: "A simple Api based react app which can filter result on the basis of different options and show the results with pagination.",
    },

  ];
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project, idx) => (
          <Card
            style={{ width: "18rem", margin: "10px" }}
            className={style.card}
            key={project.title}
          >
            <Card.Body>
              <i
                className={`fas fa-laptop-code ${style.icon}`}
                style={{ fontSize: "small", color: "#64ffda" }}
              ></i>
              <Card.Title className={style.title}>{project.title}</Card.Title>
              <Card.Subtitle className={`mb-2 ${style.techUsed}`}>
                {project.techUsed}
              </Card.Subtitle>
              <Card.Text className={style.desc}>
                {project.desc}
              </Card.Text>
              
            </Card.Body>
            <Card.Footer>
            <Card.Link href={project.gitHub} target="_blank">
                <i className={`fab fa-github ${style.icon}`}></i>
              </Card.Link>
              {project.link && <Card.Link href={project.link} target="_blank">
                <i className={`fas fa-external-link-alt ${style.icon}`}></i>
              </Card.Link>}
            </Card.Footer>
          </Card>
        ))}
      </Row>
      {/* </Container> */}
    </>
  );
}
