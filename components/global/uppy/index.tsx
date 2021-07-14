import React from "react";
// react bootstrap
import { Button, Row, Image } from "react-bootstrap";
// uppy imports
import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import { DashboardModal } from "@uppy/react";
import DropTarget from "@uppy/drop-target";
import Dashboard from "@uppy/dashboard";
import ThumbnailGenerator from "@uppy/thumbnail-generator";
//Uppy
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/robodog/dist/robodog.css";

import Transloadit from "@uppy/transloadit";
import Preview from "./preview";

function UppyRoot(props) {

  function date() {
    const today = new Date();
    const tomorrow = new Date(today);
    console.log(new Date(tomorrow.setDate(tomorrow.getDate() + 1)));
    return new Date(tomorrow.setDate(tomorrow.getDate() + 1));
  }

  const [modalState, setModalState] = React.useState(false);
  const [previewToggle, setPreviewToggle] = React.useState(false);
  const [imageDetails, setimageDetails] = React.useState("");

  const handleModalState = () => {
    setModalState(!modalState);
  };

  const uppyInit = Uppy({
    debug: true,
    autoProceed: false,
    restrictions: {
      maxFileSize: 2100000000,
      maxNumberOfFiles: 1,
      minNumberOfFiles: 1,
    },
    locale: {
      strings: {
        // youCanOnlyUploadFileTypes: "You can only upload images",
      },
    },
  }).use(Transloadit, {
    params: {
      auth: {
        key: "7ec517a8ecdd4bc5a09a13759adf6ad9",
        expires: date(),
      },
      steps: {
        ":original": {
          robot: "/upload/handle",
        },
        export: {
          use: [
            ":original"
          ],
          robot: "/s3/store",
          bucket: "userstats-output",
          key: "AKIAQAEUENGSVMER7ZMJ",
          secret: "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",
          path: "/${file.url_name}",
        }
      }
    }
  })
    .use(ThumbnailGenerator, {
      id: 'ThumbnailGenerator',
      thumbnailWidth: 200,
      thumbnailHeight: 200,
      thumbnailType: 'image/jpeg',
      waitForThumbnailsBeforeUpload: false
    });
  uppyInit.on("transloadit:complete", (assembly) => {
    if (assembly.results[":original"] && assembly.results[":original"].length > 0) {
      console.log(assembly.results[":original"][0].ssl_url);
      console.log("full results", assembly.results[":original"]);
    }
  }).on('thumbnail:generated', (file, preview) => {
    // const img = document.createElement('img')
    // img.src = preview
    // img.width = 100

    setimageDetails(file);
    setPreviewToggle(true);

    console.log("preview", preview);
    console.log("file", file);
    //document.body.appendChild(img)
  });


  return (
    <div>
      {!previewToggle ? (
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
      ) : (
          <Preview data={imageDetails} />
        )
      }
    </div>
  );
}

export default UppyRoot;
