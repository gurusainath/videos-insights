import React from "react";
// react bootstrap
import { Container, Button, Modal, Card, Row, Col } from "react-bootstrap";
// auth
import withAuth from '@lib/hoc/withAuth';
//link
import Link from 'next/link';
// styled icons
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2";
import { EyeFill } from "@styled-icons/bootstrap/EyeFill";
import { Edit } from "@styled-icons/material-rounded/Edit";
import { Delete } from "@styled-icons/material-rounded/Delete";
//components
import DropDownComponent from "@components/page_components/DropDownComponent";

function EmailEditor() {
  const [show, setShow] = React.useState(false);

  const dropdownData = [
    {
      icon: <Edit size="14px" />,
      text: "Edit",
      toggleModal: false as false,
    },
    {
      icon: <Delete size="14px" />,
      text: "Delete",
      toggleModal: true as true,
    },
  ];

  const customTemplateData = [
    {
      title: "Offer",
      image: "./Images/offer.svg",
    },
    {
      title: "Welcome",
      image: "./Images/offer.svg",
    },
    {
      title: "Offer",
      image: "./Images/offer.svg",
    },
  ];

  const cardData = [
    {
      image: "./Images/design-editor.svg",
      title: "Design Editor",
      description: "Visual, drag and drop editing with access to modify HTML when you need it.",
      link: "/emaileditor/designEditor"
    },
    {
      image: "./Images/code-editor.svg",
      title: "Code Editor",
      description: "Feature-rich HTML editing with visual preview for complete control of every pixel.",
      link: "/emaileditor/htmlEditor"
    },
  ];

  return (
    <div>
      <div className="content-item content-search hover">
        <SearchAlt2 size="18px" className="mr-1"></SearchAlt2>
        <input
          className="form-control border-0"
          type="text"
          placeholder=" Search for classrooms, users, courses"
        />
      </div>
      <div>
        <Container className="mt-5">
          <Row className="mb-3">
            <Col className="primary-heading">
              Your email designs
                  </Col>
            <Col className="d-flex justify-content-end">
              <div className="ml-auto mr-2" style={{ fontSize: "14px" }}>
                <Button variant="link" className="link-header">Pick a template</Button>
                {/* <Button style={{ marginLeft: "1em" }} */}
                <Button className="btn-color" onClick={() => setShow(true)}>
                  Create a design
                </Button>
              </div>
              <Modal
                show={show}
                dialogClassName="modal-40w"
                onHide={() => setShow(false)}
              >
                <Modal.Body>
                  <div style={{ marginLeft: "1em" }}>
                    <Row className="modal-heading">Select Your Editing Experience </Row>
                    <Row className="modal-description">Choose to build using our visual drag-and-drop Design editor or powerful Code editor. </Row>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-around", marginTop: "1em" }}>
                    {cardData && cardData.map((card: any, cardIndex: any) => (
                      <Card style={{ width: '15rem' }} id={card.title + cardIndex}>
                        <Card.Body>
                          <Card.Img variant="top" src={card.image} style={{ height: "20px", width: "20px" }} />
                          <Card.Title className="card-heading">{card.title}</Card.Title>
                          <Card.Text className="card-description">{card.description}</Card.Text>
                          <Link href={card.link}>
                            <Button variant="link">Select</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    ))}
                  </div>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
          <Row className="mb-3 template-title">
            {customTemplateData &&
              customTemplateData.map((template: any, templateIndex: any) => (
                <Card style={{ width: '18rem' }} id={templateIndex}>
                  <Card.Img variant="top" src={template.image} />
                  <Card.Body>
                    <Card.Title className="secondary-heading template-title">
                      <div>{template.title}</div>
                      <div className="icon">
                        <EyeFill size="18px" />
                        <DropDownComponent data={dropdownData} />
                      </div>
                    </Card.Title>
                  </Card.Body>
                </Card>
              ))}
          </Row>
          {/* email Templates */}
          <Row className="mb-3 primary-heading">
            Email Templates
          </Row>
          <Row className="mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="./Images/offer.svg" />
              <Card.Body>
                <Card.Title className="secondary-heading template-title">
                  <div>Welcome</div>
                  <div className="icon">
                    <EyeFill size="18px" />
                    <DropDownComponent data={dropdownData} />
                  </div>
                </Card.Title>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </div >
  );
}

export default EmailEditor;
// export default withAuth(EmailEditor);
