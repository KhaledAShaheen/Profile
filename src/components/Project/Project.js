import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import { AiFillGithub } from 'react-icons/ai';
import taskmange from "../../Assets/taskmange.png";
import login from "../../Assets/login.png";
import darkLogin from "../../Assets/darklogin.png";
import transporUpload from "../../Assets/transUpload.png";
import transportMap from "../../Assets/transportMap.png";
import aiDoctor from "../../Assets/chatAIDoc.png";

import addTask from "../../Assets/addTask.png";
import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';

function Project() {
  const cards = [
    {
      images: [login, darkLogin, taskmange, addTask],
      title: "Task Management Web App",
      description: "A Python web-based task management application using Flask, integrating both SQL and NoSQL databases. The app manages user login information and tracks tasks assigned to users across various statuses such as 'in progress,' 'to-do,' and 'done.' It includes features for creating folders to group tasks, secure login, logout, and signup capabilities, and a dark mode option for improved user experience.",
      github: "https://github.com/KhaledAShaheen/Task-Management-Web-App"
    },
    {
      images: [transporUpload, transportMap],
      title: "Transportation Events Visualization Web App",
      description: "Developed a dynamic web application that efficiently visualizes and analyzes individual movement patterns. This geospatial project integrated a frontend built with JavaScript and a backend powered by Flask, alongside PostgreSQL with spatial extensions. The application allows users to interact with and explore transportation events in real-time, providing valuable geospatial insights into movement data through a user-friendly interface.",
      github: "https://github.com/KhaledAShaheen/Transportation-Events-"
    },
    {
      images: [aiDoctor],
      title: "AI Doctor",
      description: "Created an AI-powered Doctor Chatbot capable of engaging in conversations about medical terms. This project involved fine-tuning a pre-trained language model, Llama 2 by Meta, using Hugging Face. The chatbot leverages advanced natural language processing techniques to provide accurate and informative responses, enhancing user experience by offering reliable medical information in a conversational manner.",
      github: "https://github.com/KhaledAShaheen/Medical-Fine-Tunned-LLM-Chatgpt-"
    },
    
  ];

  return (
    
    <Container fluid className="project-section">
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <Row>
        {cards.map((card, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card  className='hover-card shadow-lg my-3' id="projectSection" >
              <Carousel>
                {card.images.map((image, imgIndex) => (
                  <Carousel.Item key={imgIndex}>
                    <img
                      className="d-block w-100 roundImg"
                      src={image}
                      alt={`Slide ${imgIndex}`}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Card.Body>
                <Card.Title id='title'>{card.title}</Card.Title>
                <Card.Text id = 'decsription' className="center-align">{card.description}</Card.Text>
                <a
                  href={card.github}
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub id='githubIcon' size={40} />
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <header class="custom-header">
        <a id="linkProjects" href="https://github.com/KhaledAShaheen?tab=repositories">Click me to view more cool projects!</a>
      </header>
    </Container>
  );
}

export default Project;
