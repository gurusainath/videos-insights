import React from "react";
// react-bootstrap
import { Nav, Navbar, Container } from 'react-bootstrap';

function HomePageLayoutNav(props: any) {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">
              Email Design Library
              </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomePageLayoutNav;
