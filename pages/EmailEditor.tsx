import React from 'react'
import { Form, Button, Col } from "react-bootstrap";

const EmailEditor = () => {
  return (
    <div>
      <Form style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>To</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>From</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Subject</Form.Label>
          <Form.Control placeholder="Subject" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Message</Form.Label>
          <Form.Control placeholder="Message goes here" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    </div>
  )
}

export default EmailEditor
