/* eslint-disable max-statements */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-lines-per-function */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import FieldCard from '@components/design_editor/removemodules/field-card';

const DropPage = ({
  pageElements, deleteField, deleteColField,
}) => {
  const elements = useMemo(() => {
    return pageElements.elementIds.map((elementId) => (
      pageElements.elements[elementId]
    ))
  }, [pageElements]);
  console.log("elements", pageElements);
  return (
    <div className="drop-page">
      <h3>Drop module here</h3>
      <Droppable
        droppableId="fields-list"
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          // isDraggingOver={snapshot.isDraggingOver}
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
                />
              ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

DropPage.propTypes = {
  pageElements: PropTypes.shape({
    elements: PropTypes.object,
    elementIds: PropTypes.array,
  }).isRequired,
  deleteField: PropTypes.func.isRequired,
  deleteColField: PropTypes.func.isRequired,
};

export default DropPage;
