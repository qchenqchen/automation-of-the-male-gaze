import React from "react";
import about from "./about.json";

const About = () => (
  <>
    <h1 className="title">About This Site</h1>
    {about.map((text, id) => (
      <p key={id}>{text}</p>
    ))}
    <p style={{ textAlign: "right" }}>December 2022</p>
  </>
);

export default About;
