import React from "react";
// react-bootstrap
import { EmailEditorNav } from 'layouts';
import HtmlEmailEditor from '@components/HtmlEmailEditor';

function HtmlEditor(props: any) {

  return (
    <div>
      <EmailEditorNav />
      <HtmlEmailEditor />
    </div>
  );
}

export default HtmlEditor;
