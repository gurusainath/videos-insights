import React from "react";
// react bootstrap
import { Container, Button, Modal, Card } from "react-bootstrap";
// layouts
import { HomePageLayoutNav } from "layouts";
// auth
import withAuth from '@lib/hoc/withAuth';
//link
import Link from 'next/link';


function EmailEditor() {
  const [show, setShow] = React.useState(false);
  return (
    <div>
      <HomePageLayoutNav />
      <Container style={{
        padding: "40px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
      }}>
        <Button onClick={() => setShow(true)}>Create Email Design</Button>
        <Modal
          show={show}
          dialogClassName="modal-60w"
          onHide={() => setShow(false)}
        >
          <Modal.Body>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Design Editor</Card.Title>
                  <Card.Text>
                    Visual, drag and drop editing with access to modify HTML when you need it.
    </Card.Text>
                  <Link href="/emaileditor/htmlEditor">
                    <Button variant="primary">Select</Button>
                  </Link>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Code Editor</Card.Title>
                  <Card.Text>
                    Feature-rich HTML editing with visual preview for complete control of every pixel.
    </Card.Text>
                  <Link href="/emaileditor/htmlEditor">
                    <Button variant="primary">Select</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default withAuth(EmailEditor);
