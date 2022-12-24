import React from "react";

const TagSwitch = ({ name, state, setState, hidden }) => (
  <span
    className={"tag" + (state === 1 ? " selected" : "") + (hidden ? " hidden" : "")}
    onClick={() => setState(state ^ 1)}
  >
    {name}
  </span>
);

export default TagSwitch;
