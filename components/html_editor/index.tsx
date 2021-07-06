import React from 'react'
import withAuth from '@lib/hoc/withAuth';
// components
import HtmlCodeComponent from "@components/html_editor/HtmlCodeComponent";
import HtmlRenderComponent from "@components/html_editor/HtmlRenderComponent";

const HtmlEmailEditor = () => {
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
