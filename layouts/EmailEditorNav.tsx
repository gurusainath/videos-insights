import React from "react";
// react-bootstrap
import { Nav, Navbar, Container, Button, Modal, Tabs, Tab } from 'react-bootstrap';
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { EyeFill } from "@styled-icons/bootstrap/EyeFill";
import { Save } from "@styled-icons/boxicons-solid/Save";
import { SettingsOutline } from "@styled-icons/evaicons-outline/SettingsOutline";
import Settings from "@components/html_editor/settings";
import Tags from "@components/html_editor/settings/Tags";
import { Pricetags } from "@styled-icons/evaicons-solid/Pricetags";
import { HtmlEditorContext } from "@components/contexts/HtmlEditorContextProvider";

function EmailEditorNav() {
  const [show, setShow] = React.useState(false);
  const [state, dispatch]: any = React.useContext(HtmlEditorContext);

  const [tabActive, setTabActive] = React.useState<string | null>("settings");

  function handleSetTabActive(k: string | null) {
    setTabActive(k);
  }

  return (
    <div>
      <Navbar bg="light">
        <Nav style={{ justifyContent: "space-between", fontWeight: 500, width: "100%", padding: "0 1em 0 1em" }}>
          <div style={{ display: "flex" }}>
            <Nav.Link href="#home">
              <ArrowBack size="20" className="nav-back-icon" />
            </Nav.Link>
            <Nav.Link onClick={() => setShow(true)} href="#settings">
              <SettingsOutline size="20" />
              Settings
            </Nav.Link>
          </div>
          <Nav.Link href="#home" className="design-name">
            {state.htmlGlobalDetails.designName}
          </Nav.Link>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <Nav.Link style={{ marginRight: "1em" }}>
              <EyeFill size="18px" />
              <span style={{ marginLeft: "5px" }}>Preview</span>
            </Nav.Link>
            <Button className="btn-sm">
              <Save size="18px" />
              <span style={{ marginLeft: "5px" }}>Save</span>
            </Button>
          </div>
        </Nav>
      </Navbar>
      <Modal
        show={show}
        size="sm"
        onHide={() => setShow(false)}
      >
        <Modal.Body >
          <div className="classroom-nav-tab w-100">
            {/* change rooms dropdown here */}
            <Tabs
              id="room-tab-manager"
              activeKey={tabActive}
              onSelect={(k) => handleSetTabActive(k)}
            >
              <Tab
                key={"settings"}
                eventKey={"settings"}
                className="border-0"
                title={
                  <div className="d-flex align-items-center">
                    <SettingsOutline size="20" />
                  Settings
                  </div>}
              >
                <Settings />
              </Tab>
              <Tab
                key={"tags"}
                eventKey={"tags"}
                className="border-0"
                title={
                  <div className="d-flex align-items-center">
                    <Pricetags size="20" />
                  Tags
                  </div>}
              >
                <Tags />
              </Tab>
            </Tabs>
          </div>
        </Modal.Body>
      </Modal>
    </div >
  );
}

export default EmailEditorNav;
