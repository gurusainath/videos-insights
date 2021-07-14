import React from "react";
// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable, DraggableProvided } from 'react-beautiful-dnd';
import FieldCard from '@components/design_editor/field-card';
//uuid
import uuid from 'uuid/v4';

interface IProps {
  ctrl: {
    id: number;
    controls: Array<object>;
  };
  deleteImgTxtField: (ImageTextId: string, index: number) => void;

}

function ImageTextModule(props: IProps) {
  return (
    <div>
      <Container>
        <Row style={{ height: "5em" }}>
          <Col style={{ backgroundColor: "#9e9e9e21", marginRight: "1em" }}>
            <Droppable
              droppableId={`${props.ctrl.id} imgTxt`}
              direction="horizontal"
              className="rowWrapper"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <Draggable
                    draggableId={uuid()}
                    index={0}
                  >
                    {(provided, snapshot) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      // isDragging={snapshot.isDragging}
                      >
                        <FieldCard
                          key={uuid()}
                          type="field"
                          index={0}
                          ctrl={props.ctrl.controls[0]}
                          deleteImgTxtField={props.deleteImgTxtField}
                          ImageTextId={props.ctrl.id}
                        />
                      </div>
                    )}
                  </Draggable>
                  {/* {
              <DummyRowComponent />
            } */}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Col>
          <Col style={{ backgroundColor: "#9e9e9e21", marginRight: "1em" }}>
            <Droppable
              droppableId={`${props.ctrl.id} imgText`}
              direction="horizontal"
              className="rowWrapper"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <Draggable
                    draggableId={uuid()}
                    index={0}
                  >
                    {(provided, snapshot) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      // isDragging={snapshot.isDragging}
                      >
                        <FieldCard
                          key={uuid()}
                          type="field"
                          index={1}
                          ctrl={props.ctrl.controls[1]}
                          deleteImgTxtField={props.deleteImgTxtField}
                          ImageTextId={props.ctrl.id}
                        />
                      </div>
                    )}
                  </Draggable>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Col>
          {/* <Col style={{ backgroundColor: "#9e9e9e21", marginRight: "1em" }}>
            <AddCircle size="18" />
            Add Module</Col> */}
        </Row>
      </Container>
    </div >
  );
}

export default ImageTextModule;
