import React from "react";
// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import { AddCircle } from "@styled-icons/ionicons-outline/AddCircle";
import { DragDropContext, Droppable, Draggable, DraggableProvided } from 'react-beautiful-dnd';
import ComponentModule from 'components/design_editor/component';
import FieldCard from '@components/design_editor/field-card';

interface IProps {
  ctrl: {
    id: number;
    controls: Array<object>;
  };
  deleteColField: (colId: string, index: number) => void;

}

function ColumnsModule(props: IProps) {
  return (
    <div>
      <Container>
        <Row style={{ height: "5em" }}>
          <Col style={{
            backgroundColor: "#9e9e9e21", marginRight: "1em"
          }}>
            <Droppable
              droppableId={`${props.ctrl.id} col`}
              direction="horizontal"
              className="rowWrapper"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {
                    props.ctrl.controls.length > 0 ?
                      // && props.ctrl.controls.map((colCtrl, index) => {
                      (
                        <Draggable
                          draggableId={props.ctrl.controls[0].id}
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
                                key={props.ctrl.controls[0].id}
                                type="field"
                                index={0}
                                ctrl={props.ctrl.controls[0]}
                                deleteColField={props.deleteColField}
                                colId={props.ctrl.id}
                              />
                            </div>
                          )}
                        </Draggable>
                      ) :
                      (
                        <div>
                          <AddCircle size="18" />
                          <span>Add Module</span>
                        </div>
                      )
                    // })
                  }
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
              droppableId={`${props.ctrl.id} col`}
              direction="horizontal"
              className="rowWrapper"
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {
                    props.ctrl.controls.length > 1 ?
                      // && props.ctrl.controls.map((colCtrl, index) => {
                      (
                        <Draggable
                          draggableId={props.ctrl.controls[1].id}
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
                                key={props.ctrl.controls[1].id}
                                type="field"
                                index={1}
                                colId={props.ctrl.id}
                                deleteColField={props.deleteColField}
                                ctrl={props.ctrl.controls[1]}
                              />
                            </div>
                          )}
                        </Draggable>
                      ) :
                      (
                        <div>
                          <AddCircle size="18" />
                          <span>Add Module</span>
                        </div>
                      )
                    // })
                  }
                  {/* {
              <DummyRowComponent />
            } */}
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

export default ColumnsModule;
