import React, { useReducer, useState } from "react";
import TagSelect from "../components/TagSelect";
import TagSwitch from "../components/TagSwitch";
import samples from "./samples.json";

const immitateDimension = (src) => {
  let dest = [];
  for (let i = 0; i < src.length; i++) {
    dest.push(0);
  }
  return dest;
};

const Samples = () => {
  const [tagCollapsed, setTagCollapsed] = useState(false);
  const [tagStates, dispatchTagStates] = useReducer((state, [n, value]) => {
    let new_state = [...state];
    new_state[n] = value;
    return new_state;
  }, immitateDimension(samples));
  const setTagState = (n) => (value) => dispatchTagStates([n, value]);

  return (
    <>
      <div className="imgcanvas ignoremainpadding">
        <img
          className="imgdisplay"
          src={
            process.env.PUBLIC_URL +
            "/samples/" +
            tagStates.map((n) => n.toString()).join("-") +
            ".png"
          }
          alt="Pre-Generated Sample"
        />
      </div>

      <div className={"tagselect" + (tagCollapsed ? " hidden" : "")}>
        <span
          className={"collapsebutton " + (!tagCollapsed ? "blink" : "rotate")}
          onClick={() => setTagCollapsed(!tagCollapsed)}
        >
          &gt;
        </span>
        {samples.map((tagGroup, id) =>
          tagGroup.length === 1 ? (
            <TagSwitch
              key={id}
              name={tagGroup[0]}
              state={tagGroup[id]}
              setState={setTagState(0)}
              hidden={tagCollapsed}
            />
          ) : (
            <TagSelect
              key={id}
              tags={tagGroup}
              state={tagStates[id]}
              setState={setTagState(id)}
              hidden={tagCollapsed}
            />
          )
        )}
      </div>
    </>
  );
};

export default Samples;
