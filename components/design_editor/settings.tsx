import React from "react";
// react-bootstrap
import * as ModuleSettings from '@components/design_editor/module-settings';

interface IProps {
  data: {
    type: string;
  };
}

function Settings(props: IProps) {
  console.log(props);
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
  ];

  let module = props.data && (modulesSettings.find((element: any) => element.type.toLowerCase() === props.data.type.toLowerCase()));
  return (
    <div style={{
      display: "flex",
      padding: "1em",
      flexDirection: "column"
    }}>
      {module && module.component}
    </div>
  );
}

export default Settings;
