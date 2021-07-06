import React from "react";
// react-bootstrap
import { Form } from 'react-bootstrap';
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";

function TextSettings(props: any) {

  const [state, dispatch]: any = React.useContext(DesignEditorContext);
  const [payload, setPayload] = React.useState(state.textProperties);


  React.useEffect(() => {
    dispatch({
      type: "TEXT_PROPERTIES",
      payload: payload,
    });
  }, [payload]);

  const onHandleChange = (key: any, value: any) => {
    setPayload({ ...payload, [key]: value });

  };

  return (
    <div>
      <Form>
        <Form.Group controlId="iconColor">
          <Form.Label>Font</Form.Label>
          <Form.Control type="text" value={payload.font}
            onChange={(e: any) => {
              onHandleChange("font", e.target.value);
            }} />
        </Form.Group>
        <Form.Group controlId="iconColor">
          <Form.Label>Font Size</Form.Label>
          <Form.Control type="text" value={payload.fontSize}
            onChange={(e: any) => {
              onHandleChange("fontSize", e.target.value);
            }} />
        </Form.Group>
        <Form.Group controlId="iconColor">
          <Form.Label>Text Color</Form.Label>
          <Form.Control type="text" value={payload.textColor}
            onChange={(e: any) => {
              onHandleChange("textColor", e.target.value);
            }} />
        </Form.Group>
        <Form.Group controlId="iconColor">
          <Form.Label>Background Color</Form.Label>
          <Form.Control type="text" value={payload.backgroundColor}
            onChange={(e: any) => {
              onHandleChange("backgroundColor", e.target.value);
            }} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default TextSettings;
