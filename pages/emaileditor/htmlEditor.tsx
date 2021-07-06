import React from "react";
// react-bootstrap
import { EmailEditorNav } from 'layouts';
import HtmlEmailEditor from '@components/html_editor';
// context provider
import { HtmlEditorContextProvider } from "@components/contexts/HtmlEditorContextProvider";

function HtmlEditor() {

  return (
    <div>
      <HtmlEditorContextProvider>
        <EmailEditorNav />
        <HtmlEmailEditor />
      </HtmlEditorContextProvider>
    </div>
  );
}

export default HtmlEditor;
