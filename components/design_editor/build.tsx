import React from "react";
import { EmailEditorNav } from 'layouts';
//react-beautiful-dnd
import { DragDropContext, Droppable, Draggable, DraggableProvided } from 'react-beautiful-dnd';
// react-bootstrap
import { Card } from "react-bootstrap";

interface IProps {
  buildComponents: Array<object>;
}

function Build(props: any) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", width: "calc(25 % - 2em)" }}>
      <Droppable droppableId="BlockDroppable">
        {(provided) => (
          <div ref={provided.innerRef} style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
            {props.buildComponents && props.buildComponents.map((component, componentIndex) => (
              <Draggable key={componentIndex} draggableId={component.id} index={componentIndex}>
                {(provided: DraggableProvided) => (
                  <div ref={provided.innerRef}
                    {...provided.draggableProps} {...provided.dragHandleProps}>
                    <Card ref={provided.innerRef} className="text-center"
                      {...provided.draggableProps} {...provided.dragHandleProps}
                      style={{ width: '5.6rem', margin: "0.5em" }}>
                      <Card.Body>
                        {component.icon}
                        <Card.Text style={{ fontSize: "x-small" }}>
                          {component.title}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Build;
