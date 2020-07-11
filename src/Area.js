import React from "react";
import Draggable from "react-draggable";

export default function Area(props) {
  return (
    <div style={{ width: "300px", height: "300px", background: "green" }}>
      <Draggable
        position={props.position}
        onDrag={(e, d) => {
          props.onDrag(d.x, d.y);
        }}
      >
        <div
          style={{ width: "50px", height: "50px", background: "blue" }}
        ></div>
      </Draggable>
    </div>
  );
}
