import React from "react";
// react-bootstrap
import { Form, Button } from 'react-bootstrap';

function ImageSettings(props: any) {
  return (
    <Form>
      <Form.Group controlId="btnText">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Click here!" />
      </Form.Group>
      <Button style={{ marginTop: "1em" }} variant="primary" type="submit">
        Add Image
  </Button>
    </Form>
  );
}

export default ImageSettings;
