import React from "react";
// react-bootstrap
import { Form } from 'react-bootstrap';
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";

function TextModule(props: any) {

  const [state, dispatch]: any = React.useContext(DesignEditorContext);

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Text goes here."
            style={{
              fontSize: `${state.textProperties.fontSize}px`,
              fontFamily: state.textProperties.font,
              color: state.textProperties.textColor,
              backgroundColor: state.textProperties.backgroundColor,
            }}
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default TextModule;
