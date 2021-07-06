import React from "react";
// react-bootstrap
import { Row } from 'react-bootstrap';
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";

function DividerModule(props: any) {

  const [state, dispatch]: any = React.useContext(DesignEditorContext);

  return (
    <div>
      <hr
        style={{
          color: state.dividerProperties.color,
          height: `${state.dividerProperties.height}px`,
          opacity: "initial"
        }} />
    </div>
  );
}

export default DividerModule;
