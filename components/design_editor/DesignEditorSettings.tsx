import React from "react";
// react-bootstrap
import { Form, Row } from 'react-bootstrap';
import Link from "next/link";
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";


function DesignEditorSettings() {

  const [state, dispatch]: any = React.useContext(DesignEditorContext);
  const [payload, setPayload] = React.useState(state.emailProperties);
  const onHandleChange = (key: any, value: any) => {
    console.log("key value", { ...payload, [key]: value });
    setPayload({ ...payload, [key]: value });
    dispatch({
      type: "DESIGN_GLOBAL",
      payload: { ...payload, [key]: value },
    });
  };

  return (
    <div style={{
      width: "50%",
      borderLeft: "8px solid lightgrey",
    }}>
      <Row className="design-email-properties">
        <span>EMAIL DESIGN SETTINGS</span>
      </Row>
      <Form style={{ padding: "1em" }}>
        <Form.Group controlId="design-name">
          <Form.Label className="settings-secondary-title">Design Name</Form.Label>
          <Form.Control type="text" value={payload.designName}
            onChange={(e: any) => {
              onHandleChange("designName", e.target.value);
            }} />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label className="settings-secondary-title">Subject</Form.Label>
          <Form.Control type="text" value={payload.subject}
            onChange={(e: any) => {
              onHandleChange("subject", e.target.value);
            }} />
        </Form.Group>
        <Form.Group controlId="preheader">
          <Form.Label className="settings-secondary-title">Preheader</Form.Label>
          <Form.Control type="text" value={payload.preheader}
            onChange={(e: any) => {
              onHandleChange("preheader", e.target.value);
            }} />
        </Form.Group>
        <Form.Group controlId="categories">
          <Form.Label className="settings-secondary-title">Categories</Form.Label>
          <Form.Control type="text" value={payload.categories}
            onChange={(e: any) => {
              onHandleChange("categories", e.target.value);
            }} />
        </Form.Group>
        <Form.Label className="settings-primary-title">
          TEST YOUR EMAIL
  </Form.Label>
      </Form>
    </div>
  );
}

export default DesignEditorSettings;
