import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" id="social-icons-center">
          
          <Col size={12} sm={6} className="text-center text-sm-center" >
            <div className="social-icon">
            <a href="http://linkedin.com/in/devang-sawant-730639311" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/devang127" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
