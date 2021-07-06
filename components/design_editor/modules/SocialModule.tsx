import React from "react";
// react-bootstrap
import { Button } from 'react-bootstrap';
//styled-components
import { FacebookSquare } from "@styled-icons/boxicons-logos/FacebookSquare";
import { Pinterest } from "@styled-icons/boxicons-logos/Pinterest";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { Linkedin } from "@styled-icons/bootstrap/Linkedin";
//nextjs link
import Link from 'next/link';
//context
import { DesignEditorContext } from "@components/contexts/DesignEditorContextProvider";

function SocialModule(props: any) {
  const [state, dispatch]: any = React.useContext(DesignEditorContext);

  const socialIcons = [
    {
      icon: <FacebookSquare size={`${state.socialProperties.iconSize}px`} style={{ margin: "5px", cursor: "pointer" }} />,
      url: state.socialProperties.facebookUrl,
    },
    {
      icon: <Pinterest size={`${state.socialProperties.iconSize}px`} style={{ margin: "5px", cursor: "pointer" }} />,
      url: state.socialProperties.pintrestUrl,
    },
    {
      icon: <Instagram size={`${state.socialProperties.iconSize}px`} style={{ margin: "5px", cursor: "pointer" }} />,
      url: state.socialProperties.instagramUrl,
    },
    {
      icon: <Linkedin size={`${state.socialProperties.iconSize}px`} style={{ margin: "5px", cursor: "pointer" }} />,
      url: state.socialProperties.linkedinUrl,
    },
  ];

  return (
    <div style={{ display: "flex", justifyContent: state.socialProperties.iconAlignment, color: state.socialProperties.iconColor }}>
      {socialIcons && socialIcons.map(item => (
        < Link href={item.url} >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default SocialModule;
