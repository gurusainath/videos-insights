import React from "react";
import { EmailEditorNav } from 'layouts';
//react-beautiful-dnd
import { DragDropContext, Droppable, Draggable, DraggableProvided } from 'react-beautiful-dnd';
// react-bootstrap
import { Card, Tabs, Tab } from "react-bootstrap";
import Sidebar from '@components/design_editor/sidebar';
import { SettingsOutline } from "@styled-icons/evaicons-outline/SettingsOutline";
import Settings from "@components/design_editor/settings";
import { Pricetags } from "@styled-icons/evaicons-solid/Pricetags";
import Tags from "@components/design_editor/tags";
import { Build } from "@styled-icons/material/Build";

interface IProps {
  currentItem: {
    id: string;
    type: string;
    title: string;
    controls?: Array<object>;
  };
};

function BuildComponent(props: IProps) {
  const [tabActive, setTabActive] = React.useState("build");

  React.useEffect(() => {
    if (props.currentItem && props.currentItem.type != "Columns") {
      handleSetTabActive("settings");
    }
    else { handleSetTabActive("build") }
  }, [props.currentItem]);


  const tabRenderProperties = [
    {
      title: "Build",
      icon: <Build size="20" />,
      key: "build",
      // component: <Sidebar newFieldClicked={newFieldClicked} />,
      component: <Sidebar />,
    },
    {
      title: "Settings",
      icon: <SettingsOutline size="20" />,
      key: "settings",
      component: <Settings data={props.currentItem} />,
    },
    {
      title: "Tags",
      icon: <Pricetags size="20" />,
      key: "tags",
      component: <Tags />,
    },
  ];

  function handleSetTabActive(k: string | null) {
    setTabActive(k);
  }
  return (
    <div style={{ width: "25%", borderRight: "8px solid lightgrey" }}>
      <div className="classroom-nav-tab">
        <Tabs id="room-tab-manager" activeKey={tabActive} onSelect={(k) => handleSetTabActive(k)}>
          {tabRenderProperties &&
            tabRenderProperties.length > 0 &&
            tabRenderProperties.map((tabData, tabIndex) => (
              <Tab
                key={tabData.key}
                eventKey={tabData.key}
                className="border-0"
                title={
                  <div className="d-flex align-items-center">
                    {tabData.icon}&ensp;
                      {tabData.title}
                  </div>
                }
              >
                <div className="tab-item-container">{tabData.component}</div>
              </Tab>
            ))}
        </Tabs>
      </div>
    </div>
  );
}

export default BuildComponent;
