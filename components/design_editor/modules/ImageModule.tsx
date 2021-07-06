import React from "react";
// react-bootstrap
import { Images } from "@styled-icons/ionicons-outline/Images";

function ImageModule(props: any) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between"
    }}>
      <div>
        <Images size="30" />
        Add Image
      </div>
    </div>
  );
}

export default ImageModule;
