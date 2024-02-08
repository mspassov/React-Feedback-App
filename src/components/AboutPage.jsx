import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About Page</h1>
        <p>Sample React project for a simple Feedback form</p>
        <p>Beta Version 1.0.1</p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
