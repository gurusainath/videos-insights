import React from "react";
// react-bootstrap
import { Form } from 'react-bootstrap';
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";

function DividerSettings(props: any) {
  const [state, dispatch]: any = React.useContext(DesignEditorContext);
  const [payload, setPayload] = React.useState(state.dividerProperties);

  React.useEffect(() => {
    dispatch({
      type: "DIVIDER_PROPERTIES",
      payload: payload,
    });
  }, [payload]);

  const onHandleChange = (key: any, value: any) => {
    setPayload({ ...payload, [key]: value });

  };

  return (
    <Form>
      <Form.Label className="settings-primary-title">DIVIDER SETTINGS</Form.Label>
      <Form.Group controlId="bgColor">
        <Form.Label className="settings-secondary-title">Color</Form.Label>
        <Form.Control type="text" placeholder={payload.color} value={payload.color}
          onChange={(e: any) => {
            onHandleChange("color", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="height">
        <Form.Label className="settings-secondary-title">Height</Form.Label>
        <Form.Control type="text" value={payload.height} placeholder={payload.height}
          onChange={(e: any) => {
            onHandleChange("height", e.target.value);
          }} />
      </Form.Group>
    </Form>
  );
}

export default DividerSettings;
