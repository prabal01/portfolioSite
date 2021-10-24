import React, { useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import SmoothList from "react-smooth-list";
import CHeader from "../UI/CHeader/CHeader";
import style from "./style.module.css";
export default function WorkExperience() {
  const [selectedCompany, SetSelectedCompany] = useState({
    id: "kreditbee",
    name: "KreditBee",
    time: "march 2021 - Current",
    role: "Software Engineer",
    active: true,
    work: [
      {
        title: "Built a complete admin dashboard for managing the pay card.",
        taskDesc: [
          "Technologies used: React, Redux, Redux-Saga, Axios and others",
        ],
      },
      {
        title:
          "Built the complete Cash withdrawal, Repayment and Card management flow for the KreditBee Card.",
        taskDesc: [
          "Worked in a very strict deadline",
          "Created multiple responsive styled-components to make a robust Front End",
          "Created seamless flow and haldled edge cases.",
          "Technologies used: React, Redux, Redux-Saga, Axios and others",
        ],
      },
      {
        title: "Built the Front End for Auto Debit",
        taskDesc: [
          "Technologies used: React, Redux, Redux-Saga, Axios and others.",
        ],
      },
    ],
  });
  const companies = [
    {
      id: "kreditbee",
      name: "KreditBee",
      time: "march 2021 - Current",
      role: "Software Engineer",
      active: true,
      work: [
        {
          title: "Built a complete admin dashboard for managing the pay card.",
          taskDesc: [
            "Technologies used: React, Redux, Redux-Saga, Axios and others",
          ],
        },
        {
          title:
            "Built the complete Cash withdrawal, Repayment and Card management flow for the KreditBee Card.",
          taskDesc: [
            "Worked in a very strict deadline",
            "Created multiple responsive styled-components to make a robust Front End",
            "Created seamless flow and haldled edge cases.",
            "Technologies used: React, Redux, Redux-Saga, Axios and others",
          ],
        },
        {
          title: "Built the Front End for Auto Debit",
          taskDesc: [
            "Technologies used: React, Redux, Redux-Saga, Axios and others.",
          ],
        },
      ],
    },

    {
      id: "10xAcademy",
      name: "10x Academy",
      time: "Dec 2020 - Feb 2021",
      role: "Full Stack Developer Apprenticeship Trainee",
      work: [
        {
          title:
            "Created a web app from scratch where user can post, like and view image posts.",
          taskDesc: [
            "Used MongoDB for handling data, Express.Js to serve API's and React.Js to build the frontend.",
            "Created multiple react components and styled them using CSS.",
            "Used Axios to make a request from frontend to backend",
            "Collaborated with the team using Git and GitHub",
            "Created the APIs on the backend to find, insert, update the data to the database.",
          ],
        },
      ],
      link: "https://www.the10xacademy.com/",
    },
  ];

  return (
    <>
      <Container className={style.workExpContainer} id="Experience">
        <Container>
          <Row style={{ marginBottom: "50px" }}>
            <Col>
              <CHeader index="02." txt="Work Experience" />
            </Col>
            <Col md={6}></Col>
          </Row>

          <Row>
            <Col
              className={style.companyNamesDiv}
              sm={2}
              style={{
                minWidth: "150px",
                marginRight: "30px",
                marginBottom: "50px",
              }}
            >
              {companies.map((company) => (
                <div
                  key={company.id}
                  className={`${style.companyNamebtn} ${
                    company.id === selectedCompany.id ? style.active : ""
                  }`}
                  onClick={() => SetSelectedCompany(company)}
                >
                  {company.name}
                </div>
              ))}
            </Col>
            <Col
              style={{
                textAlign: "left",
                padding: "0 20px",
                color: "#ccd6f6c4",
              }}
            >
              <SmoothList>
                <h5 style={{ color: "#ccd6f6" }}>
                  {selectedCompany.role}{" "}
                  <a
                    className={style.companyName}
                    href={selectedCompany.link}
                    target="_blank"
                  >
                    {" "}
                    @{selectedCompany.name}
                  </a>
                </h5>
                <p className={style.time}>{selectedCompany.time}</p>
                {selectedCompany.work.map((task) => {
                  return (
                    <Container>
                      <Table responsive="xl">
                        <th style={{ color: "#ccd6f6" }}>{task.title}</th>
                        <tr>
                          <td style={{ color: "#ccd6f6c4" }}>
                            {task.taskDesc.map((desc, index) => {
                              return (
                                <>
                                  <span>
                                    <span className={style.number}>
                                      0{index + 1}
                                    </span>
                                    : {desc}
                                  </span>
                                  <br />
                                </>
                              );
                            })}
                          </td>
                        </tr>
                      </Table>
                    </Container>
                  );
                })}
              </SmoothList>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
