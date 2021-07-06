import React from "react";
// react-bootstrap
import { Form, Button } from 'react-bootstrap';
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";

function ButtonSettings(props: any) {

  const [state, dispatch]: any = React.useContext(DesignEditorContext);
  const [payload, setPayload] = React.useState(state.btnProperties);

  React.useEffect(() => {
    dispatch({
      type: "BUTTON_PROPERTIES",
      payload: payload,
    });
  }, [payload]);

  const onHandleChange = (key: any, value: any) => {
    setPayload({ ...payload, [key]: value });
  };

  return (
    <Form >
      <Form.Group controlId="btnText">
        <Form.Label>Button Text</Form.Label>
        <Form.Control
          type="text"
          value={payload.text}
          onChange={(e: any) => {
            onHandleChange("text", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="btnUrl">
        <Form.Label>Button URL</Form.Label>
        <Form.Control type="text" value={payload.url}
          onChange={(e: any) => {
            onHandleChange("url", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Background Color</Form.Label>
        <Form.Control type="text" value={payload.backgroundColor}
          onChange={(e: any) => {
            onHandleChange("backgroundColor", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="btnWidth">
        <Form.Label>Width</Form.Label>
        <Form.Control type="text" value={payload.width}
          onChange={(e: any) => {
            onHandleChange("width", e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="btnHeight">
        <Form.Label>Height</Form.Label>
        <Form.Control type="text" value={payload.height}
          onChange={(e: any) => {
            onHandleChange("height", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="btnPadding">
        <Form.Label>Padding</Form.Label>
        <Form.Control type="text" value={payload.padding}
          onChange={(e: any) => {
            onHandleChange("padding", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="btnAlignmnet">
        <Form.Label>Button Alignment</Form.Label>
        <Form.Control type="text" value={payload.btnAlignmnet}
          onChange={(e: any) => {
            onHandleChange("btnAlignmnet", e.target.value);
          }} />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
      >
        Apply Changes
      </Button>
    </Form>
  );
}

export default ButtonSettings;
