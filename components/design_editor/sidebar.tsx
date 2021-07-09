/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-lines-per-function */
import React from 'react';
import PropTypes from 'prop-types';
//react-bootstrap
import { Droppable } from 'react-beautiful-dnd';
import FieldCard from './field-card';
import uuid from 'uuid/v4';
import { Images } from "@styled-icons/ionicons-outline/Images";
import { CardText } from "@styled-icons/bootstrap/CardText";
import { Columns } from "@styled-icons/feather/Columns";
import { FileEarmarkRichtext } from "@styled-icons/bootstrap/FileEarmarkRichtext";
import { SmartButton } from "@styled-icons/material/SmartButton";
import { PageSeparator } from "@styled-icons/remix-editor/PageSeparator"
import { DividerShort } from "@styled-icons/fluentui-system-filled/DividerShort";
import { Announcement } from "@styled-icons/zondicons/Announcement";
import { Unsubscribe } from "@styled-icons/material-outlined/Unsubscribe";


// interface IProps {
//   newFieldClicked: any,
// };


function Sidebar() {
  const elementsArray = ['regular', 'row'];
  // const buildComponents: Array<object> = [
  const buildComponents = [
    {
      id: uuid(),
      title: "Image",
      icon: <Images size="30" />,
    },
    {
      id: uuid(),
      title: "Text",
      icon: <CardText size="30" />,
    },
    {
      id: uuid(),
      title: "Columns",
      icon: <Columns size="30" />,
    },
    {
      id: uuid(),
      title: "ImageText",
      icon: <FileEarmarkRichtext size="30" />,
    },
    {
      id: uuid(),
      title: "Button",
      icon: <SmartButton size="30" />,
    },
    {
      id: uuid(),
      title: "Divider",
      icon: <DividerShort size="30" />,
    },
    {
      id: uuid(),
      title: "Spacer",
      icon: <PageSeparator size="30" />,
    },
    {
      id: uuid(),
      title: "Social",
      icon: <Announcement size="30" />,
    },
    {
      id: uuid(),
      title: "Unsubscribe",
      icon: <Unsubscribe size="30" />,
    },
  ];

  return (
    <div style={{ marginLeft: "1em" }}>
      {/* <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly", width: "calc(25 % - 2em)" }}> */}
      <div>
        <div style={{ fontWeight: 500, fontSize: "12px", paddingTop: "1em" }}>ELEMENTS</div>
        <div style={{ fontWeight: 400, fontSize: "10px", color: "#767676", paddingTop: "1em", paddingBottom: "1em" }}>Drag and drop elements you want to use.</div>
        <Droppable
          droppableId="elements-tab"
          isDropDisabled
        >
          {(provided) => (
            <div
              style={{ display: "flex", flexWrap: "wrap" }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                buildComponents.map((element, index) => (
                  <React.Fragment key={element.title}>
                    <FieldCard
                      type="element"
                      elementType={element.title}
                      element={element}
                      index={index}
                    //newFieldClicked={props.newFieldClicked}
                    />
                  </React.Fragment>
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};


export default Sidebar;
