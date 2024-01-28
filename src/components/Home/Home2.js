import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            As a computer science student, I have always been fascinated by the inner workings of computers. Initially, I saw computers as tools to assist me with my schoolwork, but as I began using various apps and websites for studying, I couldn't help but wonder how they were built and why they sometimes malfunctioned. The more I used applications, the more ideas for improvement sparked in my mind, fueling my determination to apply my creative inspirations to enhance these programs.

              <br />
              <br />Fortunately, I found guidance from my dad, a talented computer programmer, who enlightened me by saying, "It all boils down to programming and maintenance." With those words, my endless journey into the world of software development began, driven by a deep desire to explore and fulfill my passion.

              <i>
                <b className="purple"> C++, Javascript and Go. </b>
              </i>
              <br />
              <br />
              Today, as a software developer, I thrive on solving complex problems and meticulously maintaining the implementation of robust solutions. Leveraging my skills, I collaborate with management, departments, and customers to identify end-user requirements and specifications, ensuring the development of tailored solutions that meet their needs. 
            &nbsp;
              <i>
              </i>
              <br />
              <br />
              If you're interested in working with a motivated and dedicated software developer who is eager to make a difference, I would love to connect and explore potential opportunities.
 <b className="purple">Node.js</b> a
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KhaledAShaheen?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/khaledshaheen1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
