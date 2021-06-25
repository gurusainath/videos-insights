import React from "react";
// react-bootstrap
import { Form, Button } from 'react-bootstrap';
import Link from "next/link";

function Tags(props: any) {
  return (
    <Form>
      <Form.Group controlId="btnText">
        <Form.Label>Design Name</Form.Label>
        <Form.Control type="text" placeholder="Click here!" />
      </Form.Group>
      <Form.Group controlId="btnUrl">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter URL here" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Preheader</Form.Label>
        <Form.Control type="text" placeholder="#333333" />
      </Form.Group>
      <Form.Group controlId="btnWidth">
        <Form.Label>Categories</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Link href="#email">
        TEST YOUR EMAIL
  </Link>
    </Form>
  );
}

export default Tags;
