import React from "react";
// react-bootstrap
import { DesignEditorNav } from 'layouts';
import DesignEmailEditor from '@components/design_editor';
import { DesignEditorContextProvider } from "@components/contexts/DesignEditorContextProvider";


function HtmlEditor() {

  return (
    <div>
      <DesignEditorContextProvider>
        <DesignEditorNav />
        <DesignEmailEditor />
      </DesignEditorContextProvider>
    </div >
  );
}

export default HtmlEditor;
