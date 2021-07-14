import React from "react";
// react bootstrap
import { Col, Row, Image } from "react-bootstrap";
//Uppy
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/robodog/dist/robodog.css";


function Preview(props) {

  return (
    <div style={{ borderLeft: "1px solid #e9ecef" }}>
      <Row style={{ padding: "1em" }}>
        <Col><Image src={props.data.preview} width="397px" height="320px" /></Col>
        <Col>
          <Row style={{ padding: "1em" }}>
            File Name :{props.data.name}
          </Row>
          <Row style={{ padding: "1em" }}>
            Dimensions : {props.data.name}
          </Row>
          <Row style={{ padding: "1em" }}>
            Image URL : {props.data.preview}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Preview;
