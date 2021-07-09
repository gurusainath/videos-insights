/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import DropPage from '@components/design_editor/drop-page';
import uuid from 'uuid/v4';
import BuildComponent from "@components/design_editor/build";
import { Tabs, Tab, } from 'react-bootstrap';
import DesignEditorSettings from "@components/design_editor/DesignEditorSettings";


const DesignEmailEditor = () => {

  interface IControl {
    id: string;
    type: string;
    title: string;
    controls?: Array<object>;
  };

  const [pageElements, setPageElements] = useState({
    elements: {},
    elementIds: [],
  });
  const [fieldsListKey, setFieldsListKey] = useState(1);
  const [currentItem, setCurrentItem] = React.useState<IControl | null>(null);

  // const newFieldClicked = (isColumns: boolean) => {
  //   const control = {};
  //   control.id = uuid();
  //   control.type = draggableId;
  //   control.title = `${control.id} element`;
  //   if (isColumns) {
  //     control.controls = []
  //   }
  //   const newPageElements = cloneDeep(pageElements);
  //   const pageElementIds = newPageElements.elementIds;
  //   setCurrentItem(control);

  //   // Set at bottom
  //   newPageElements.elements[control.id] = control;
  //   newPageElements.elementIds.splice(pageElementIds.length, 0, control.id);

  //   setPageElements(oldPageElements => {
  //     return {
  //       ...oldPageElements,
  //       ...newPageElements,
  //     }
  //   })
  //   if (isColumns) {
  //     const newFieldListKey = uuid();
  //     setFieldsListKey(newFieldListKey);
  //   }
  // };



  const newFieldDragged = (result: DropResult) => {
    const { destination, draggableId } = result;
    const isColumns = draggableId === 'Columns';
    const control: IControl = {
      id: uuid(),
      type: draggableId,
      title: "",
    };
    control.title = `${control.id} element`;
    // control.id = uuid();
    // control.type = draggableId;
    // control.title = `${control.id} element`;
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

  const newColFieldDragged = (result: DropResult) => {
    console.log("newColFieldDragged result", result);
    const { draggableId, destination } = result;
    const control: IControl = {
      id: uuid(),
      type: draggableId,
      title: "",
    };
    // const control = {};
    // control.id = uuid();
    // control.type = draggableId;
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
  };

  const fieldToCol = (result: DropResult) => {
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

  const reorderCol = (result: DropResult) => {
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

  const moveToCol = (result: DropResult) => {
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

  const colToField = (result: DropResult) => {
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

  const reorderPageFields = (result: DropResult) => {
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

  const doDragElementEnd = (result: DropResult) => {
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

  const deleteField = (control: any) => {
    console.log("deletefieldcontrol", control);
    const newPageElements = cloneDeep(pageElements);
    let pageElementIds = newPageElements.elementIds;
    delete newPageElements.elements[control.id];
    pageElementIds = pageElementIds.filter((fieldId: string) => (
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

  const deleteColField = (colId: string, index: number) => {
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
    <div className="design-editor">
      <DragDropContext
        onDragEnd={(result: DropResult) => doDragElementEnd(result)}
      >
        {/* <div style={{ maxWidth: "310px", borderRight: "8px solid lightgrey" }}> */}
        <BuildComponent currentItem={currentItem} />
        {/* <div style={{
          marginLeft: "20em",
          marginTop: "10em",
          backgroundColor: "#80808014",
          height: "10em",
          width: "28em",
        }}> */}
        <DropPage
          key={fieldsListKey}
          pageElements={pageElements}
          deleteField={deleteField}
          deleteColField={deleteColField}
        />
        {/* </div> */}
      </DragDropContext>
      <DesignEditorSettings />
    </div>
  );
}

export default DesignEmailEditor;