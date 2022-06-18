import React, { useState } from "react";

function Accordion(props) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="accordion-div">
      <div className="top">
        <span className="name"> {props.data.name}</span>
        <span onClick={() => setExpand(!expand)} className="plus-icon">
          ➕
        </span>
      </div>
      {expand ? <div className="bottom">{props.data.description}</div> : ""}
    </div>
  );
}

export default Accordion;
