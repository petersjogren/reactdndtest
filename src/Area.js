import React from "react";
import Draggable from "react-draggable";
import { DraggableCore } from "react-draggable";

export default function Area(props) {
  return (
    <>
      <div
        style={{
          width: "300px",
          height: "300px",
          background: "green",
        }}
      >
        <Draggable
          position={{ x: props.position.x, y: props.position.y }}
          onDrag={(e, d) => {
            console.log("pos", d.x, d.y);
            props.onDrag(d.x, d.y);
          }}
        >
          <div
            style={{
              width: props.width + "px",
              height: props.height + "px",
              background: "blue",
              position: "absolute",
            }}
          ></div>
        </Draggable>
        <Draggable
          position={{
            x: props.position.x + props.width,
            y: props.position.y + props.height,
          }}
          onDrag={(e, d) => {
            props.onResize(d.x - props.position.x, d.y - props.position.y);
            console.log("pos2", props.position.y, d.y);
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              background: "red",
            }}
          ></div>
        </Draggable>
      </div>
    </>
  );
}
