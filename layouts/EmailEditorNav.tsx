import React from "react";
// react-bootstrap
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Save } from "@styled-icons/fluentui-system-regular/Save";

function EmailEditorNav(props: any) {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">EDITOR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Save size="30" />
              Save
              </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default EmailEditorNav;
