import React from 'react'
import withAuth from '@lib/hoc/withAuth';
import parse from 'html-react-parser';
import { CodeEditor } from '@components/AceEditor';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Save } from "@styled-icons/fluentui-system-regular/Save";
import { Undo } from "@styled-icons/evil/Undo";
import { Redo } from "@styled-icons/evil/Redo";

const EmailEditor = () => {
  const [htmlString, sethtmlString] = React.useState("");
  const renderEmailTemplate = (newValue) => {
    sethtmlString(newValue);
    console.log("change", htmlString);
  }
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">EDITOR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <Save size="48" />
              Save
              </Nav.Link>
            <Nav.Link href="#features">
              <Undo size="48" />
              Undo</Nav.Link>
            <Nav.Link href="#pricing">
              <Redo size="48" />
              Redo</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div style={{
        height: "200px", display: "flex", justifyContent: "center"
      }}>
        <div>
          <div className="editor-title">
            HTML
        </div>
          <CodeEditor
            language="html"
            theme="monokai"
            name="code-editor"
            value={htmlString}
            onChange={(newCode) => renderEmailTemplate(newCode)}
            width="600px"
            height="600px"
          />
        </div>
        <div>
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
          </div>
          <div>
            <div className="editor-title">
              Subject:
        </div>
            <div className="editor-container">
              {parse(htmlString)}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default withAuth(EmailEditor);
