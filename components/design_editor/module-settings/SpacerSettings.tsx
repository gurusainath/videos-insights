import React from "react";
// react-bootstrap
import { Form, Button } from 'react-bootstrap';
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";

function SpacerSettings(props: any) {

  const [state, dispatch]: any = React.useContext(DesignEditorContext);
  const [payload, setPayload] = React.useState(state.spacerProperties);


  React.useEffect(() => {
    dispatch({
      type: "SPACER_PROPERTIES",
      payload: payload,
    });
  }, [payload]);

  const onHandleChange = (key: any, value: any) => {
    setPayload({ ...payload, [key]: value });

  };

  return (
    <Form style={{ padding: "1em" }}>
      <Form.Group controlId="height">
        <Form.Label className="settings-secondary-title">Height</Form.Label>
        <Form.Control type="text" placeholder={payload.height} value={payload.height}
          onChange={(e: any) => {
            onHandleChange("height", e.target.value);
          }} />
      </Form.Group>
    </Form>
  );
}

export default SpacerSettings;
