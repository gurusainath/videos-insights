import React from "react";
// react-bootstrap
import { EmailEditorNav } from 'layouts';
import { Nav, Card, Button } from 'react-bootstrap';
import { Delete } from "@styled-icons/fluentui-system-regular/Delete";
import * as Modules from "./modules";

interface IProps {
  data: any;
  component: {
    title: string;
  };
}

function ComponentModule(props: IProps) {

  const modules: any = [
    {
      type: "BUTTON",
      component: <Modules.ButtonModule />,
    },
    {
      type: "COLUMNS",
      component: <Modules.ColumnsModule data={props.data} module={props.component} />,
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

  let module = modules.find((element: any) => element.type.toLowerCase() === props.component.title.toLowerCase());

  return (
    <div>
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
                <Delete size="20" />
              </a>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {module.component}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ComponentModule;
