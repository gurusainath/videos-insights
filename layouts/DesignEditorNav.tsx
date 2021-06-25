import React from "react";
// react-bootstrap
import { Nav, Navbar, Container } from 'react-bootstrap';
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { EyeFill } from "@styled-icons/bootstrap/EyeFill";
import { Save } from "@styled-icons/boxicons-solid/Save";

function DesignEditorNav(props: any) {

  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Nav style={{ justifyContent: "space-between", fontWeight: 500, width: "100%" }}>
            <Nav.Link href="#home">
              <ArrowBack size="20" />
            </Nav.Link>
            <Nav.Link href="#home">
              Design Name
              </Nav.Link>
            <div style={{ display: "flex" }}>
              <Nav.Link href="#home">
                <EyeFill size="18px" />
                <span style={{ marginLeft: "5px" }}>Preview</span>
              </Nav.Link>
              <Nav.Link href="#home">
                <Save size="18px" />
                <span style={{ marginLeft: "5px" }}>Save</span>
              </Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default DesignEditorNav;
