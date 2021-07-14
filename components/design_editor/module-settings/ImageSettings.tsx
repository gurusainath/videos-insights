import React from "react";
// react-bootstrap
import { Form, Button } from 'react-bootstrap';

function ImageSettings(props: any) {
  return (
    <Form style={{ padding: "1em" }}>
      <Form.Group controlId="btnText">
        <Form.Label className="settings-secondary-title">Image</Form.Label>
        <Form.Control type="text" placeholder="Click here!" />
      </Form.Group>
      <Button style={{ marginTop: "1em" }} variant="primary" type="submit">
        Add Image
  </Button>
    </Form>
  );
}

export default ImageSettings;
