import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import game from "../../Assets/Projects/game.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI-Assistant"
              description="
              Asynchronous command execution & speech recognition and interpretation
Supports two different user input modes (text or speech), user can write or speek in the mic.
Answers in general questions (via call Wolfram API), e.g ('Jarvis tell me the highest building')
Change input mode on run time, triggered by a phrase e.g 'Jarvis change settings')
Easy voice-command customization
Configurable assistant name (e.g 'Jarvis', 'Sofia', 'John' etc.) (change on run time supported)
Log preview in console
Vocal or/and text response"
              link="https://github.com/Abhisheksharma99/AI-assistant"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Pig Game"
              description="
              The game has 2 players, playing in rounds
              In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
              BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
              The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
              The first player to reach 20 points on GLOBAL score wins the game
          "
              link="https://github.com/Abhisheksharma99/Pig-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Webcode---livecode-editor"
              description="
              This is a code editor where you can write HTML, CSS, JS code and see the output there itself.
              You can also download the source code.
              The changes done are reflected immediately in the adjacent window.
              Similar to codepen, jsfiddle.
          
          "
              link="https://github.com/Abhisheksharma99/Webcode---livecode-editor"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
