/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { DragDropContext } from 'react-beautiful-dnd';
import Sidebar from '@components/design_editor/removemodules/sidebar';
import DropPage from '@components/design_editor/removemodules/drop-page';
import uuid from 'uuid/v4';
//import Build from "@components/design_editor/build";
import Settings from "@components/design_editor/settings";
import Tags from "@components/design_editor/tags";
import { Tabs, Tab, } from 'react-bootstrap';
import { Build } from "@styled-icons/material/Build";
import { SettingsOutline } from "@styled-icons/evaicons-outline/SettingsOutline";
import { Pricetags } from "@styled-icons/evaicons-solid/Pricetags";

const removeDesignEditor = () => {
  const [pageElements, setPageElements] = useState({
    elements: {},
    elementIds: [],
  });
  const [fieldsListKey, setFieldsListKey] = useState(1);
  const [currentItem, setCurrentItem] = React.useState("");
  const [tabActive, setTabActive] = React.useState("build");
  const [data, setData] = React.useState({ [uuid()]: [] });

  React.useEffect(() => {
    if (currentItem) {
      handleSetTabActive("settings");
    }
    else { handleSetTabActive("build") }
  }, [currentItem]);

  function handleSetTabActive(k) {
    setTabActive(k);
  }

  const newFieldClicked = (isColumns) => {

    const control = {};
    control.id = uuid();
    control.type = draggableId;
    control.title = `${control.id} element`;
    if (isColumns) {
      control.controls = []
    }
    const newPageElements = cloneDeep(pageElements);
    const pageElementIds = newPageElements.elementIds;
    setCurrentItem(control);

    // Set at bottom
    newPageElements.elements[control.id] = control;
    newPageElements.elementIds.splice(pageElementIds.length, 0, control.id);

    setPageElements(oldPageElements => {
      return {
        ...oldPageElements,
        ...newPageElements,
      }
    })
    if (isColumns) {
      const newFieldListKey = uuid();
      setFieldsListKey(newFieldListKey);
    }
  };

  const tabRenderProperties = [
    {
      title: "Build",
      icon: <Build size="20" />,
      key: "build",
      component: <Sidebar newFieldClicked={newFieldClicked} />,
    },
    {
      title: "Settings",
      icon: <SettingsOutline size="20" />,
      key: "settings",
      component: <Settings data={currentItem} />,
    },
    {
      title: "Tags",
      icon: <Pricetags size="20" />,
      key: "tags",
      component: <div>Tags</div>,
    },
  ];

  const newFieldDragged = (result) => {
    const { destination, draggableId } = result;
    const isColumns = draggableId === 'Columns';
    const control = {};
    control.id = uuid();
    control.type = draggableId;
    control.title = `${control.id} element`;
    if (isColumns) {
      control.controls = [];
    }
    const newPageElements = cloneDeep(pageElements);
    setCurrentItem(control);
    // Set at desired index
    newPageElements.elements[control.id] = control;
    newPageElements.elementIds.splice(destination.index, 0, control.id);

    setPageElements(oldPageElements => {
      return {
        ...oldPageElements,
        ...newPageElements,
      }
    })
    if (isColumns) {
      const newFieldListKey = uuid();
      setFieldsListKey(newFieldListKey);
    }
  };
  ///



  ///


  const newColFieldDragged = (result) => {
    console.log("newColFieldDragged result", result);
    const { draggableId, destination } = result;
    const control = {};
    control.id = uuid();
    control.type = draggableId;
    control.title = `${control.id} element`;
    const colId = destination.droppableId.split(' ')[0];
    const newPageElements = cloneDeep(pageElements);
    // Set at desired index
    newPageElements.elements[colId].controls.splice(destination.index, 0, control);

    setPageElements(oldPageElements => {
      return {
        ...oldPageElements,
        ...newPageElements,
      }
    })

    // const { draggableId, destination } = result;
    // console.log(result, "result here");
    // const newPageElements = cloneDeep(pageElements);
    // let pageElementIds = newPageElements.elementIds;
    // const control = newPageElements.elements[draggableId];
    // const colId = destination.droppableId.split(' ')[0];
    // console.log("control", control);
    // console.log("colId", colId);
    // // Set at desired index
    // delete newPageElements.elements[control.id];
    // pageElementIds = pageElementIds.filter((fieldId) => (
    //   fieldId !== control.id
    // ));
    // newPageElements.elementIds = pageElementIds;

    // setPageElements(oldPageElements => {
    //   return {
    //     ...oldPageElements,
    //     ...newPageElements,
    //   }
    // })
  };

  const fieldToCol = (result) => {
    console.log("fielftocol result", result);
    const { draggableId, destination } = result;
    const newPageElements = cloneDeep(pageElements);
    let pageElementIds = newPageElements.elementIds;
    const control = newPageElements.elements[draggableId];
    const colId = destination.droppableId.split(' ')[0];
    // Set at desired index
    delete newPageElements.elements[control.id];
    setCurrentItem(control);
    pageElementIds = pageElementIds.filter((fieldId) => (
      fieldId !== control.id
    ));
    newPageElements.elements[colId].controls.splice(destination.index, 0, control);
    newPageElements.elementIds = pageElementIds;

    setPageElements(oldPageElements => {
      return {
        ...oldPageElements,
        ...newPageElements,
      }
    })
  };

  const reorderCol = (result) => {
    const { destination, source } = result;
    const newPageElements = cloneDeep(pageElements);
    const colId = destination.droppableId.split(' ')[0];
    const control = newPageElements.elements[colId].controls[source.index];
    newPageElements.elements[colId].controls.splice(source.index, 1);
    newPageElements.elements[colId].controls.splice(destination.index, 0, control);

    setPageElements(oldPageElements => {
      return {
        ...oldPageElements,
        ...newPageElements,
      }
    })
  };

  const moveToCol = (result) => {
    const { destination, source } = result;
    const newPageElements = cloneDeep(pageElements);
    const colIdSource = source.droppableId.split(' ')[0];
    const colId = destination.droppableId.split(' ')[0];
    const control = newPageElements.elements[colIdSource].controls[source.index];
    newPageElements.elements[colIdSource].controls.splice(source.index, 1);
    newPageElements.elements[colId].controls.splice(destination.index, 0, control);

    setPageElements(oldPageElements => {
      return {
        ...oldPageElements,
        ...newPageElements,
      }
    })
  };

  const colToField = (result) => {
    const { source, destination } = result;
    const newPageElements = cloneDeep(pageElements);
    const pageElementIds = newPageElements.elementIds;
    const colId = source.droppableId.split(' ')[0];
    const control = pageElements.elements[colId].controls[source.index];
    pageElementIds.splice(destination.index, 0, control.id);
    newPageElements.elements[colId].controls.splice(source.index, 1);
    newPageElements.elements[control.id] = control;
    newPageElements.elementIds = pageElementIds;

    setPageElements(oldPageElements => {
      return {
        ...oldPageElements,
        ...newPageElements,
      }
    })
  };

  const reorderPageFields = (result) => {
    const { destination, source, draggableId } = result;
    const newPageElements = cloneDeep(pageElements);
    const pageElementIds = newPageElements.elementIds;

    pageElementIds.splice(source.index, 1);
    pageElementIds.splice(destination.index, 0, draggableId);
    newPageElements.elementIds = pageElementIds;

    setPageElements(oldPageElements => {
      return {
        ...oldPageElements,
        ...newPageElements,
      }
    })
  }

  const doDragElementEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      console.log("here!!!!!");
      return;
    }
    if (
      ((destination.droppableId === source.droppableId) && (destination.index === source.index))
      || (destination.droppableId === 'elements-tab')
      || (destination.droppableId.includes('col') && (destination.droppableId.split(' ')[0] === draggableId))
      || (draggableId.includes('col') && destination.droppableId.includes('col'))
    ) {
      return;
    }
    // If element is dragged from Elements tab
    if (source.droppableId === 'elements-tab') {
      if (destination.droppableId.includes('col') && (draggableId !== 'col')) {
        // New Row field from elements excluding the add row field
        newColFieldDragged(result);
      } else {
        newFieldDragged(result);
      }
    }
    // If Page field is dragged
    if (source.droppableId === 'fields-list') {

      if (destination.droppableId.includes('col') && (draggableId !== 'col')) {
        // Regular Field is moved to the Row Field excluding the add row field
        fieldToCol(result);
      } else {
        // Regular field is moved around
        reorderPageFields(result);
      }
    }
    // If Row field is moved around
    if (source.droppableId.includes('col')) {
      if (source.droppableId === destination.droppableId) {
        // Row field is being reordered
        reorderCol(result);
      } else if (destination.droppableId.includes('col')) {
        // Row field is being dropped in a new row
        moveToCol(result);
      } else {
        // Row field is moved to the Fields list
        colToField(result);
      }
    }
  }

  const deleteField = (control) => {
    console.log("deletefieldcontrol", control);
    const newPageElements = cloneDeep(pageElements);
    let pageElementIds = newPageElements.elementIds;
    delete newPageElements.elements[control.id];
    pageElementIds = pageElementIds.filter((fieldId) => (
      fieldId !== control.id
    ));
    newPageElements.elementIds = pageElementIds;
    setPageElements(oldPageElements => {
      return {
        ...oldPageElements,
        ...newPageElements,
      }
    })
  }

  const deleteColField = (colId, index) => {
    const newPageElements = cloneDeep(pageElements);
    console.log("colId", colId);
    console.log("newPageElements.elements[colId].", newPageElements.elements[colId]);
    newPageElements.elements[colId].controls.splice(index, 1);

    setPageElements(oldPageElements => {
      return {
        ...oldPageElements,
        ...newPageElements,
      }
    })
  }
  return (
    <div className="removeApp">
      <DragDropContext
        onDragEnd={(result) => doDragElementEnd(result)}
      >
        <div style={{ maxWidth: "360px", borderRight: "1px solid lightgrey" }}>
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
        <div style={{
          marginLeft: "20em",
          marginTop: "10em",
          backgroundColor: "#80808014",
          height: "10em",
          width: "28em",
        }}>
          <DropPage
            key={fieldsListKey}
            pageElements={pageElements}
            deleteField={deleteField}
            deleteColField={deleteColField}
          />
        </div>
      </DragDropContext>
    </div>
  );
}

export default removeDesignEditor;