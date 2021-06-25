import React from 'react'
import withAuth from '@lib/hoc/withAuth';
import parse from 'html-react-parser';
import { CodeEditor } from '@components/html_editor/AceEditor';
import { Nav, Navbar, Container, Modal, Tabs, Tab, Row, Image } from 'react-bootstrap';
import { Images } from "@styled-icons/bootstrap/Images";
// components
import UppyUploader from "@components/global/uppy";
import { HtmlEditorContext } from "@components/contexts/HtmlEditorContextProvider";
import HtmlCodeComponent from "@components/html_editor/HtmlCodeComponent";
import HtmlRenderComponent from "@components/html_editor/HtmlRenderComponent";

const HtmlEmailEditor = () => {
  const [htmlString, sethtmlString] = React.useState("");
  const [show, setShow] = React.useState(false);
  const [tabActive, setTabActive] = React.useState<string | null>("unsplash-images");
  const [state, dispatch]: any = React.useContext(HtmlEditorContext);

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
        display: "flex"
      }}>
        <HtmlCodeComponent />
        <HtmlRenderComponent />
      </div>
    </div>
  )
}

export default withAuth(HtmlEmailEditor);
