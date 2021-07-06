import React from "react";
// react-bootstrap
import { Nav, Navbar, Button } from 'react-bootstrap';
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { EyeFill } from "@styled-icons/bootstrap/EyeFill";
import { Save } from "@styled-icons/boxicons-solid/Save";

function DesignEditorNav() {

  return (
    <div>
      <Navbar bg="light">
        <Nav style={{ justifyContent: "space-between", fontWeight: 500, width: "100%", padding: "0 1em 0 1em" }}>
          <Nav.Link href="#home">
            <ArrowBack size="22" className="nav-back-icon" />
          </Nav.Link>
          <Nav.Link href="#home" className="design-name">
            Design Name
              </Nav.Link>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Nav.Link href="#home" className="link-header">
              <EyeFill size="18px" />
              <span style={{ marginLeft: "5px" }} >Preview</span>
            </Nav.Link>
            <Nav.Link href="#home">
              <Button size="sm">
                <Save size="18px" />
                <span style={{ marginLeft: "5px" }}>Save</span>
              </Button>
            </Nav.Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}

export default DesignEditorNav;
