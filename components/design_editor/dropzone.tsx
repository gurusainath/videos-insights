import React from "react";
// react-bootstrap
import { DragDropContext, Droppable, Draggable, DraggableProvided, DroppableProvided } from 'react-beautiful-dnd';
import { Container, Card } from 'react-bootstrap';
import ComponentModule from 'components/design_editor/component';



function DropZone(props: any) {
  console.log("props.data", props.data);
  console.log(props.components);

  return (
    <div>
      {Object.keys(props.data).map((list, i) => (
        <Droppable key={list} droppableId={list}>
          {(provided: DroppableProvided) => (
            <Container
              ref={provided.innerRef}>
              {props.data[list].length
                ? props.data[list].map(
                  (item: any, index: number) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot: any) => (
                        <div ref={provided.innerRef} {...provided.draggableProps}
                          isDragging={snapshot.isDragging}
                          style={provided.draggableProps.style}>
                          <div {...provided.dragHandleProps}>
                            <ComponentModule component={item} data={props.data} />
                          </div>
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  )
                )
                : !provided.placeholder && (
                  <div>Drop items here</div>
                )}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      ))}
      drag component here
    </div>
  );
}

export default DropZone;




