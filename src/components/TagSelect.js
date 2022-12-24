import React from "react";

const TagSelect = ({ tags, state, setState, hidden }) => (
  <>
    {tags.map((tag, id) => (
      <span
        key={id}
        className={"tag" + (id === state ? " selected" : "") + (hidden ? " hidden" : "")}
        onClick={() => setState(id)}
      >
        {tag}
      </span>
    ))}
  </>
);

export default TagSelect;
