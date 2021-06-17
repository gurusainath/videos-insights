import React from "react";
// react bootstrap
import { Button } from "react-bootstrap";
// uppy imports
import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import { DashboardModal } from "@uppy/react";
import DropTarget from "@uppy/drop-target";
import Dashboard from "@uppy/dashboard";
//Uppy
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/robodog/dist/robodog.css";

function UppyRoot(props) {
  const [modalState, setModalState] = React.useState(false);
  const handleModalState = () => {
    setModalState(!modalState);
  };

  const uppyInit = Uppy({
    id: "uppy1",
    autoProceed: true,
    debug: true,
    restrictions: {
      maxFileSize: 2100000000,
      maxNumberOfFiles: 1,
      minNumberOfFiles: 1,
    },
    meta: { attributes: JSON.stringify({ key: "value" }) },
  }).use(XHRUpload, {
    endpoint: "url",
    formData: true,
    metaFields: ["attributes"],
    fieldName: "asset",
    method: "post",
    getResponseData(responseText, response) {
      // console.log(response);
      // console.log(responseText);
      if (responseText) {
        const payloadAsset = JSON.parse(responseText);
      }
      return {};
    },
  });


  return (
    <div>
      <Button
        className={
          props.button
            ? `primary-medium-button small ${props.button}`
            : `btn-sm pl-3 pr-3 primary-medium-button font-weight-light`
        }
        onClick={handleModalState}
        disabled={modalState}
      >
        {modalState ? "Uploading..." : props.buttonTitle ? props.buttonTitle : "Upload From File"}
      </Button>
      <div>
        <DashboardModal uppy={uppyInit} open={modalState} onRequestClose={handleModalState} />
      </div>
    </div>
  );
}

export default UppyRoot;
