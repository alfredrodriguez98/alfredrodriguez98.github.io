import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Alfred Rodriguez </span>
            from <span className="purple">
              {" "}
              the Silicon Valley of India -{" "}
            </span>{" "}
            <span>Bengaluru.</span>
            <br />
            I'm an aspiring Blockchain Developer with more than 1.5 years of IT
            experience from top MNCs.
            <br />
            <br />
            Along with coding, here are some fun activities I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Explaining complex concepts in simple terms
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing technical blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Designing tech prototypes
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Curiousity is visualizing the same concept in different dimensions"{" "}
          </p>
          <footer className="blockquote-footer">Alfred Rodriguez</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
