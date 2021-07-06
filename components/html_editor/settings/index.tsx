import React from "react";
// react-bootstrap
import { Form, Button } from 'react-bootstrap';
import Link from "next/link";
import { HtmlEditorContext } from "@components/contexts/HtmlEditorContextProvider";


function Settings() {

  const [state, dispatch]: any = React.useContext(HtmlEditorContext);
  const [payload, setPayload] = React.useState(state.htmlGlobalDetails);
  const onHandleChange = (key: any, value: any) => {
    console.log("key value", { ...payload, [key]: value });
    setPayload({ ...payload, [key]: value });
    dispatch({
      type: "HTML_GLOBAL",
      payload: payload,
    });
  };

  return (
    <Form>
      <Form.Group controlId="design-name">
        <Form.Label>Design Name</Form.Label>
        <Form.Control type="text" value={payload.designName}
          onChange={(e: any) => {
            onHandleChange("designName", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" value={payload.subject}
          onChange={(e: any) => {
            onHandleChange("subject", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="preheader">
        <Form.Label>Preheader</Form.Label>
        <Form.Control type="text" value={payload.preheader}
          onChange={(e: any) => {
            onHandleChange("preheader", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="categories">
        <Form.Label>Categories</Form.Label>
        <Form.Control type="text" value={payload.categories}
          onChange={(e: any) => {
            onHandleChange("categories", e.target.value);
          }} />
      </Form.Group>
      <Link href="#email">
        TEST YOUR EMAIL
  </Link>
    </Form>
  );
}

export default Settings;
