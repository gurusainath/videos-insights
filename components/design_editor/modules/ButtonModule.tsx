import React from "react";
// react-bootstrap
import { Nav, Card, Button } from 'react-bootstrap';
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";


function ButtonModule() {
  const [state, dispatch]: any = React.useContext(DesignEditorContext);
  return (
    <div style={{
      display: "flex",
      justifyContent: state.btnProperties.btnAlignmnet,
      flexGrow: 1,
    }}>
      <Button
        style={{
          backgroundColor: state.btnProperties.backgroundColor,
          width: `${state.btnProperties.width}px`,
          height: `${state.btnProperties.height}px`,
          padding: `${state.btnProperties.padding}px`,
        }}
        href={state.btnProperties.url}
      >{state.btnProperties.text}</Button>
    </div>
  );
}

export default ButtonModule;
