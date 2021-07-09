import React from 'react'
import withAuth from '@lib/hoc/withAuth';
import parse from 'html-react-parser';
// components
import { HtmlEditorContext } from "@components/contexts/HtmlEditorContextProvider";

const HtmlRenderComponent = () => {
  const [state, dispatch]: any = React.useContext(HtmlEditorContext);

  return (
    <div style={{ width: "100%" }}>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
      </div>
      <div>
        <div className="subject-title">
          <span className="editor-subject">Subject:</span>
          <span style={{ color: "#C4C4C4" }}>{state.htmlGlobalDetails.subject}</span>
        </div>
        <div className="editor-container">
          {parse(state.htmlString)}
        </div>
      </div>
    </div>
  )
}

export default withAuth(HtmlRenderComponent);
