import React from "react";
// react-bootstrap
import * as ModuleSettings from '@components/design_editor/module-settings';
import { Row } from 'react-bootstrap';

interface IProps {
  data: {
    type: string;
  };
}

function Settings(props: IProps) {
  console.log("settings data", props);
  const modulesSettings: any = [
    {
      type: "BUTTON",
      component: <ModuleSettings.ButtonSettings />,
    },
    {
      type: "COLUMNS",
      component: <ModuleSettings.ColumnsSettings />,
    },
    {
      type: "DIVIDER",
      component: <ModuleSettings.DividerSettings />,
    },
    {
      type: "TEXT",
      component: <ModuleSettings.TextSettings />,
    },
    {
      type: "IMAGE",
      component: <ModuleSettings.ImageSettings />,
    },
    {
      type: "IMAGETEXT",
      component: <ModuleSettings.ImageTextSettings />,
    },
    {
      type: "SOCIAL",
      component: <ModuleSettings.SocialSettings />,
    },
    {
      type: "SPACER",
      component: <ModuleSettings.SpacerSettings />,
    },
    {
      type: "UNSUBSCRIBE",
      component: <ModuleSettings.UnsubscribeSettings />,
    },
  ];

  let module = props.data && (modulesSettings.find((element: any) => element.type.toLowerCase() === props.data.type.toLowerCase()));
  return (
    <div style={{
      display: "flex",
      width: "25%",
      flexDirection: "column",
      borderLeft: "8px solid lightgrey",
    }}>
      <Row className="design-email-properties">
        <span>Property Settings</span>
      </Row>
      {module && module.component}
    </div>
  );
}

export default Settings;
