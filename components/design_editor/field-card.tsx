import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import * as Modules from "./modules";
// react-bootstrap
import { Nav, Card, Tabs, Tab } from 'react-bootstrap';
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";
import { EllipsisVertical } from "@styled-icons/ionicons-solid/EllipsisVertical";

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
                  style={{ width: '5.7rem', borderRadius: "0rem !important" }}>
                  <Card.Body className="link-header">
                    {props.element.icon}
                    <Card.Text className="build-secondary-title">
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

              isDraggingOver={snapshot.isDraggingOver}
              ref={provided.innerRef}

            >
              <div className="module-draggable"
              >
                <div className="module-navtab">
                  <Tabs defaultActiveKey="tab">
                    <Tab eventKey="tab" title={module.type} style={{
                      display: "flex",
                      alignItems: "center",
                    }}>
                      <div className="icon mr-2" {...provided.dragHandleProps}>
                        <EllipsisVertical size="18" />
                        <EllipsisVertical size="18" style={{ marginLeft: "-12px" }} />
                      </div>
                      {module.component}
                    </Tab>
                  </Tabs>
                </div>
                <a className="module-delete">
                  {props.colId ?
                    <Delete onClick={() =>
                      props.deleteColField(props.colId, props.index)}
                      size="20"
                    />
                    : <Delete onClick={() => props.deleteField(props.ctrl)} size="20" />
                  }
                </a>
              </div>
              <div>
              </div>
              {/* <Card>
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
              </Card> */}
            </div>
          )}
        </Draggable>
      );
    }

    default: return null;
  }
};

export default FieldCard;