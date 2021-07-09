import React from "react";
// react-bootstrap
import { Row } from 'react-bootstrap';
//next-link
import Link from 'next/link';
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";

function UnsubscribeModule(props: any) {
  const [state, dispatch]: any = React.useContext(DesignEditorContext);
  console.log("states unsubscribe", `${state.unsubscribeProperties.fontSize}px !important`);
  console.log("states unsubscribe", `${state.unsubscribeProperties.textColor} !important`);
  return (
    <div
      className="unsubscribe-text"
      style={{
        fontSize: `${state.unsubscribeProperties.fontSize}px`,
        color: state.unsubscribeProperties.textColor,
        fontFamily: state.unsubscribeProperties.font,
        backgroundColor: state.unsubscribeProperties.backgroundColor,
        padding: state.unsubscribeProperties.padding,
      }}
    >
      <Row >{"{{ Sender_Name }}"}</Row>
      <Row >{"{{Sender_Address}},{{Sender_City}},{{Sender_State}},{{Sender_Zip}}"}</Row>
      <Row>
        <Link href="#">
          Unsubscribe
        </Link>
      </Row>
    </div>
  );
}

export default UnsubscribeModule;
