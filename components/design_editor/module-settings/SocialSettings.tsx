import React from "react";
// react-bootstrap
import { Form } from 'react-bootstrap';
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";

function SocialSettings(props: any) {
  const [state, dispatch]: any = React.useContext(DesignEditorContext);
  const [payload, setPayload] = React.useState(state.socialProperties);


  React.useEffect(() => {
    dispatch({
      type: "SOCIAL_PROPERTIES",
      payload: payload,
    });
  }, [payload]);

  const onHandleChange = (key: any, value: any) => {
    setPayload({ ...payload, [key]: value });

  };
  return (
    <Form>
      <Form.Group controlId="iconColor">
        <Form.Label>Icon Color</Form.Label>
        <Form.Control type="text" value={payload.iconColor}
          onChange={(e: any) => {
            onHandleChange("iconColor", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="iconSize">
        <Form.Label>Icon Size</Form.Label>
        <Form.Control type="text" value={payload.iconSize}
          onChange={(e: any) => {
            onHandleChange("iconSize", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="iconAlignment">
        <Form.Label>Icon Alignment</Form.Label>
        <Form.Control type="text" value={payload.iconAlignment}
          onChange={(e: any) => {
            onHandleChange("iconAlignment", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="facebookUrl">
        <Form.Label>Facebook URL</Form.Label>
        <Form.Control type="text" value={payload.facebookUrl}
          onChange={(e: any) => {
            onHandleChange("facebookUrl", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="pintrestUrl">
        <Form.Label>Pintrest URL</Form.Label>
        <Form.Control type="text" value={payload.pintrestUrl}
          onChange={(e: any) => {
            onHandleChange("pintrestUrl", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="instagramUrl">
        <Form.Label>Instagram URL</Form.Label>
        <Form.Control type="text" value={payload.instagramUrl}
          onChange={(e: any) => {
            onHandleChange("instagramUrl", e.target.value);
          }} />
      </Form.Group>
      <Form.Group controlId="linkedinUrl">
        <Form.Label>Linkedin URL</Form.Label>
        <Form.Control type="text" value={payload.linkedinUrl}
          onChange={(e: any) => {
            onHandleChange("linkedinUrl", e.target.value);
          }} />
      </Form.Group>

    </Form>
  );
}

export default SocialSettings;
