import React from 'react'
import { Form, Button, Col, Image } from "react-bootstrap";
import Link from 'next/link';
import ReactDOMServer from 'react-dom/server';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/theme-monokai";
import withAuth from '@lib/hoc/withAuth';
import Handlebars from "handlebars";

const EmailEditor = () => {
  let data = {
    "COMPANY_NAME": "EDIOSN OS",
    "COURSE_NAME": "IELTS COURSE",
    "COURSE_URL": "https://google.com",
  };
  const EmailTemplate = `
  <div className="editor-container">
      <h1>Welcome to {{COMPANY_NAME}}</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZskW69ZZ6CkDhj48BeExYCGg1cGQR6QWPWQ&usqp=CAU" />
      <div className="editor-text">
        Thank you for enrolling  to {{COURSE_NAME}}. To get access to the course, please click the button below.
        </div>
      <button href="{{COURSE_URL}}">Click to access the course</button>
      <div className="editor-text">{{COMPANY_NAME}}
        </div>
    </div>`

  //const el = new DOMParser().parseFromString(ReactDOMServer.renderToStaticMarkup(EmailTemplate), "text/xml");
  const template = Handlebars.compile(EmailTemplate);

  const el = new DOMParser().parseFromString(ReactDOMServer.renderToStaticMarkup(template(data)), "text/xml");

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      marginTop: "100px",
      justifyContent: "space-around"
    }}>

      {/* <div>{ReactDOMServer.renderToStaticMarkup(EmailTemplate)}</div> */}
      <AceEditor
        placeholder="Placeholder Text"
        mode="html"
        theme="monokai"
        name="ace-editor"
        //onLoad={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        wrapEnabled={true}
      // value={ReactDOMServer.renderToStaticMarkup(EmailTemplate)}
      />
      <div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
        </div>
        {EmailTemplate}
      </div>
    </div>
  )
}

export default withAuth(EmailEditor);
