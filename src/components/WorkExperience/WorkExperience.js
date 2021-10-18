import React,{useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
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
    desc: "od amet officia qui. Incididunt Lorem dolore ad adipisicing adipisicing proident minim nostrud culpa. Dolor adipisicing veniam Lorem minim consectetur cupidatat commodo do ut.",
  })
  const companies = [
    {
      id: "kreditbee",
      name: "KreditBee",
      time: "march 2021 - Current",
      role: "Software Engineer",      
      desc: "od amet officia qui. Incididunt Lorem dolore ad adipisicing adipisicing proident minim nostrud culpa. Dolor adipisicing veniam Lorem minim consectetur cupidatat commodo do ut.",
      link:'https://www.kreditbee.in/'
    },
    {
      id: "10xAcademy",
      name: "10x Academy",
      time: "Dec 2020 - Feb 2021",
      role: "Full Stack Developer Apprenticeship Trainee",
      desc: "Magna eiusmod amet officia qui. Incididunt Lorem dolore ad adipisicing adipisicing proident minim nostrud culpa. Dolor adipisicing veniam Lorem minim consectetur cupidatat commodo do ut.",
      link:'https://www.the10xacademy.com/'
    },
  ];
  return (<>
    <Container className={style.workExpContainer} id='Experience'>
      <Container>
      <Row style={{ marginBottom: "50px" }}>
        <Col
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
        >
          <CHeader index="02." txt="Work Experience" />
        </Col>
          <Col md={6}></Col>
      </Row>

      <Row>
        <Col
          className={style.companyNamesDiv}
          sm={2}
          style={{ minWidth: "150px", marginRight: "30px", marginBottom: '50px' }}
        >
          {companies.map((company) => (
            <div key={company.id} className={`${style.companyNamebtn} ${company.id===selectedCompany.id ? style.active : ''}`} onClick={()=>SetSelectedCompany(company)} >
              {company.name}
            </div>
          ))}
        </Col>
        <Col style={{ textAlign: "left", padding: "0 20px" , color:'#ccd6f6c4',}}>
          <SmoothList>
          <h5 style={{color:'#ccd6f6'}}>{selectedCompany.role} <a className = {style.companyName} href={selectedCompany.link} target="_blank"> @{selectedCompany.name}</a></h5>
          <p className={style.time}>{selectedCompany.time}</p>
            {selectedCompany.desc}
            </SmoothList>
        </Col>
      </Row>
      </Container>
    </Container>
    </>
  );
}
