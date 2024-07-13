import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi everyone, I am <span className="#4169E1">Khaled Shaheen</span> from <span className="purple">Dallas, TX</span>
          <br />
          <br />
          I graduated with honors, earning a Bachelor of Science in Computer Science in December 2023 from St. Cloud State University. After finishing my bachelor's, I started my Master's in Data Science at Texas Tech University. I expect to complete my masters on December 2025.
          <br />
          <br />

          I am curious about learning new technologies and staying up-to-date by researching and learning. Along with my master's, I am enrolled in various courses to sharpen my skills and gain new ones. I am working on multiple personal projects, including AI, generative AI, and their implementation in software engineering.
          <br />
          <br />
          I am also a volunteer website developer for a religious organization and am looking for opportunities as a Junior Software Engineer. My dedication to continuous learning and my hands-on experience with cutting-edge technologies make me a strong candidate for any software engineering role.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Playing Games (Fornite, Fifa, etc.)
          </li>
          <li className="about-activity">
            <ImPointRight /> Working Out
          </li>
          <li className="about-activity">
            <ImPointRight /> Reading
          </li>
        </ul>
        <p style={{ color: "#1E90FF", fontStyle: "italic" }}>
          "For the things we have to learn before we can do them, we learn by doing them."{" "}
        </p>
        <footer className="blockquote-footer">Aristotle</footer>
      </blockquote>
    </Card.Body>
  </Card>
  

  );
}

export default AboutCard;
