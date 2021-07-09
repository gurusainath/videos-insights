import React from "react";
//react-bootstrap
import { Row } from 'react-bootstrap';

function Tags() {
  return (
    <div style={{ padding: "2em" }}>
      <Row className="tags-description">
        Tags allow you to easily add information stored as custom fields to your message content. For contacts with no data in a custom field, the tag will be blank. To use a default value instead, use the following format:
        </Row>
      <Row className="settings-primary-title">
        {"{{ first_name | Valued Customer }"}
      </Row>
      <Row className="settings-primary-title">
        {"{{ Sender_name }"}
      </Row>
    </div>
  );
}

export default Tags;
