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
      <Form style={{ padding: "1em" }}>
        <Form.Label className="settings-primary-title">TEXT SETTINGS</Form.Label>
        <Form.Group controlId="iconColor">
          <Form.Label className="settings-secondary-title">Font</Form.Label>
          <Form.Control type="text" value={payload.font}
            onChange={(e: any) => {
              onHandleChange("font", e.target.value);
            }} />
        </Form.Group>
        <Form.Group controlId="iconColor">
          <Form.Label className="settings-secondary-title">Font Size</Form.Label>
          <Form.Control type="text" value={payload.fontSize}
            onChange={(e: any) => {
              onHandleChange("fontSize", e.target.value);
            }} />
        </Form.Group>
        <Form.Group controlId="iconColor">
          <Form.Label className="settings-secondary-title">Text Color</Form.Label>
          <Form.Control type="text" value={payload.textColor}
            onChange={(e: any) => {
              onHandleChange("textColor", e.target.value);
            }} />
        </Form.Group>
        <Form.Group controlId="iconColor">
          <Form.Label className="settings-secondary-title">Background Color</Form.Label>
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
