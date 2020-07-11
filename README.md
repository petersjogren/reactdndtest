# Simple controlled drag test

## Install

npm install
npm start

## Description

Controlled drag means that the position is controlled not by the component that is dragged but instead is controlled by external state. Dragging information is reported from the dragged component in a callback function.

The Draggable from react-draggable can be used in a controlled manner by providing position. The onDrag reports the position during the drag operation. But other components can be controlled with the position props so that state and positions are always in sync. Draggable has an internal state with the position but since it has a position prop and also report the position with onDrag during drag operations it is the same as a controlled component.

To really control the position use DraggableCore from react-draggable instead.
