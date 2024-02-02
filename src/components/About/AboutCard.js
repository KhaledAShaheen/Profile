import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="#4169E1">Khaled Shaheen </span>
            from <span className="purple"> Dallas, TX</span>
            <br />
            <br />

            I am currently a volunter in a relgious organization as website developer. I am looking forward for oppuroties as a junior Software Engineer!
            <br />
            <br />
            I graduated with honors, earning a Bachelor of Science in Computer Science in December 2023 from St. Cloud State University.
            <br />
            <br />
            I am now eagerly seeking to pursue a Master's degree in Artificial Intelligence to further expand my knowledge and expertise in this dynamic field.
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
