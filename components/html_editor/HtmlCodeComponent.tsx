import React from 'react'
import withAuth from '@lib/hoc/withAuth';
import { CodeEditor } from '@components/html_editor/AceEditor';
import { Modal, Tabs, Tab, Row, Image } from 'react-bootstrap';
import { Images } from "@styled-icons/bootstrap/Images";
// components
import UppyUploader from "@components/global/uppy";
import { HtmlEditorContext } from "@components/contexts/HtmlEditorContextProvider";

const HtmlCodeComponent = () => {
  const [state, dispatch]: any = React.useContext(HtmlEditorContext);
  const [htmlString, sethtmlString] = React.useState(state.htmlString);
  const [show, setShow] = React.useState(false);
  const [tabActive, setTabActive] = React.useState<string | null>("unsplash-images");


  function handleSetTabActive(k: string | null) {
    setTabActive(k);
  }

  const renderEmailTemplate = (newValue: string) => {
    sethtmlString(newValue);
    dispatch({
      type: "HTML_STRING",
      payload: newValue,
    });
  }
  return (
    <div style={{
      width: "100%"
    }}>
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
                    className="tab-item-containermt-4 ml-4 mr-4 mb-1"
                    style={{
                      //padding: "233px 0px",
                      border: "1px dashed #e2e2e2",
                    }}
                  >
                    <div>
                      <UppyUploader
                        button="active font-medium"
                        buttonTitle="Click here to upload"
                      />
                    </div>
                    {/* <div style={{ borderLeft: "1px solid #e9ecef" }}>
                      <Row style={{ padding: "1em" }}>Image details</Row>
                      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZskW69ZZ6CkDhj48BeExYCGg1cGQR6QWPWQ&usqp=CAU" thumbnail />
                      <Row style={{ padding: "1em" }}>File Name</Row>
                      <Row style={{ padding: "1em" }}>Dimensions</Row>
                      <Row style={{ padding: "1em" }}>Image URL</Row>
                    </div> */}
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
      />
    </div>

  )
}

// export default withAuth(HtmlCodeComponent);
export default HtmlCodeComponent;
