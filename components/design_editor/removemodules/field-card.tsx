import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import * as Modules from "../modules";
// react-bootstrap
import { Nav, Card, Button } from 'react-bootstrap';
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";

interface IProps {
  type: string;
  ctrl: {
    type: string;
    id: string;
    controls: any;
    title: string;
  };
  index: number;
  elementType: String;
  deleteField: (ctrl: any) => void;
  deleteColField: (colId: string, index: number) => void;
  element: any;
  colId: string;
}

function FieldCard(props: IProps) {
  switch (props.type) {
    case 'element': {
      return (
        <Draggable
          draggableId={props.elementType}
          index={props.index}
        >
          {(provided, snapshot) => (
            <>
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >

                <Card ref={provided.innerRef} className="text-center"
                  {...provided.draggableProps} {...provided.dragHandleProps}
                  style={{ width: '6rem' }}>
                  <Card.Body>
                    {props.element.icon}
                    <Card.Text style={{ fontSize: "x-small" }}>
                      {props.element.title}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </>
          )}
        </Draggable>
      );
    }

    case 'field': {
      // const Fields = {
      //   row: Row,
      //   regular: Regular,
      // };
      // const modules: Array<object> = [
      const modules = [
        {
          type: "BUTTON",
          component: <Modules.ButtonModule />,
        },
        {
          type: "COLUMNS",
          component: <Modules.ColumnsModule ctrl={props.ctrl} deleteColField={props.deleteColField} />,
        },
        {
          type: "DIVIDER",
          component: <Modules.DividerModule />,
        },
        {
          type: "TEXT",
          component: <Modules.TextModule />,
        },
        {
          type: "IMAGE",
          component: <Modules.ImageModule />,
        },
        {
          type: "IMAGETEXT",
          component: <Modules.ImageTextModule />,
        },
        {
          type: "SOCIAL",
          component: <Modules.SocialModule />,
        },
        {
          type: "SPACER",
          component: <Modules.SpacerModule />,
        },
      ];
      let module = modules.find((element) => element.type.toLowerCase() === props.ctrl.type.toLowerCase());
      //const FieldComponent = Fields[ctrl.type];
      console.log("module", module);
      return (
        <Draggable
          draggableId={props.ctrl.id}
          index={props.index}
        >
          {(provided, snapshot) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <Card>
                <Card.Header>
                  <Nav variant="tabs" defaultActiveKey="#first"
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}>
                    <Nav.Item>
                      {module.type}
                    </Nav.Item>
                    <Nav.Item>
                      <a>
                        {props.colId ? <Delete onClick={() => props.deleteColField(props.colId, props.index)} size="20" />
                          : <Delete onClick={() => props.deleteField(props.ctrl)} size="20" />
                        }
                      </a>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  {module.component}
                </Card.Body>
              </Card>
            </div>
          )}
        </Draggable>
      );
    }

    default: return null;
  }
};

export default FieldCard;
