import React from 'react'
import withAuth from '@lib/hoc/withAuth';
import parse from 'html-react-parser';
import { CodeEditor } from '@components/AceEditor';
import { Nav, Navbar, Container, Modal, Tabs, Tab, Row, Image } from 'react-bootstrap';
import { Images } from "@styled-icons/bootstrap/Images";
// components
import UppyUploader from "@components/global/uppy";
//import { Unsplash } from "components/app/classrooms";

const HtmlEmailEditor = () => {
  const [htmlString, sethtmlString] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [tabActive, setTabActive] = React.useState<string | null>("unsplash-images");

  function handleSetTabActive(k: string | null) {
    setTabActive(k);
  }

  const renderEmailTemplate = (newValue) => {
    sethtmlString(newValue);
    console.log("change", htmlString);
  }
  return (
    <div>
      <div style={{
        height: "200px", display: "flex", justifyContent: "center"
      }}>
        <div>
          <div className="editor-title">
            <span> HTML</span>
            <div onClick={() => setShow(true)}><a><Images size="30" /></a></div>
            <Modal
              show={show}
              dialogClassName="modal-90w"
              onHide={() => setShow(false)}
            >
              <Modal.Body>
                <div className="classroom-nav-tab w-100">
                  {/* change rooms dropdown here */}
                  <Tabs
                    style={{ paddingLeft: "30px", paddingRight: "30px" }}
                    id="room-tab-manager"
                    activeKey={tabActive}
                    onSelect={(k) => handleSetTabActive(k)}
                  >
                    <Tab
                      key={"unsplash-images"}
                      eventKey={"unsplash-images"}
                      className="border-0"
                      title={<div className="d-flex align-items-center">Images</div>}
                    >
                      <div className="tab-item-container" style={{ padding: "0px 16px" }}>
                      </div>
                    </Tab>
                    <Tab
                      key={"upload"}
                      eventKey={"upload"}
                      className="border-0"
                      title={<div className="d-flex align-items-center">Upload</div>}
                    >
                      <div
                        className="tab-item-container text-center mt-4 ml-4 mr-4 mb-1"
                        style={{
                          //padding: "233px 0px",
                          border: "1px dashed #e2e2e2",
                          display: "flex",
                          justifyContent: "space-evenly",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <UppyUploader
                            button="active font-medium"
                            buttonTitle="Click here to upload"
                          />
                        </div>
                        <div style={{ borderLeft: "1px solid #e9ecef" }}>
                          <Row style={{ padding: "1em" }}>Image details</Row>
                          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZskW69ZZ6CkDhj48BeExYCGg1cGQR6QWPWQ&usqp=CAU" thumbnail />
                          <Row style={{ padding: "1em" }}>File Name</Row>
                          <Row style={{ padding: "1em" }}>Dimensions</Row>
                          <Row style={{ padding: "1em" }}>Image URL</Row>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </Modal.Body>
            </Modal>
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

export default withAuth(HtmlEmailEditor);
