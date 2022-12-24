import React from "react";
import introduction from "./introduction.json";

const Introduction = () => (
  <>
    <h1 className="title">What is StableDiffusion</h1>
    {introduction.map((text, id) => (
      <p key={id}>{text}</p>
    ))}
  </>
);

export default Introduction;
