import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import FieldCard from '@components/design_editor/field-card';

interface Iprops {
  pageElements: {
    elements: object;
    elementIds: Array;
  };
  deleteField: string;
  deleteColField: string;
}

const DropPage = ({ pageElements, deleteField, deleteColField, deleteImgTxtField }) => {
  const elements = useMemo(() => {
    return pageElements.elementIds.map((elementId) => (
      pageElements.elements[elementId]
    ))
  }, [pageElements]);
  console.log("dorp page elements", pageElements);

  return (
    <div style={{ width: "50%" }}>
      <div className="subject-title">
        <span className="editor-subject">Subject:</span>
        <span style={{ color: "#C4C4C4" }}>Enter subject</span>
      </div>
      <div className="subject-title" style={{ borderBottom: "1px solid #e9ecef" }}>
        <span className="editor-subject">Preheader:</span>
        <span style={{ color: "#C4C4C4" }}>Enter preheader</span>
      </div>
      <div className={pageElements.elementIds.length > 0 ? "drop-page-hidden" : "drop-page"}>
        {pageElements.elementIds.length < 1 && <h3>Drop module here</h3>}
        <Droppable
          droppableId="fields-list"
        >
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                elements.length > 0 && elements.map((element, index) => (
                  <FieldCard
                    key={element.id}
                    type="field"
                    index={index}
                    ctrl={element}
                    deleteField={deleteField}
                    deleteColField={deleteColField}
                    deleteImgTxtField={deleteImgTxtField}
                  />
                ))
              }
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div >
    </div>
  );
};

export default DropPage;
