import React from "react";
// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap';

function ColumnsSettings(props: any) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center"
    }}>
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
}

export default ColumnsSettings;
