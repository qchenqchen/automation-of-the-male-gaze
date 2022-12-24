import React from "react";
import furthermore from "./furthermore.json";

const Furthermore = () => (
  <>
    <h1 className="title">Furthermore</h1>
    {furthermore.map((text, id) => (
      <p key={id}>{text}</p>
    ))}
  </>
);

export default Furthermore;
