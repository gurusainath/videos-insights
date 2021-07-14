import React, { useState } from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import { useRouter } from 'next/router';

//import subdomain name
import { SUB_DOMAIN_NAME } from '@constants/common';
import { UserSigninAuth } from '@lib/services/authentication.service';

//import HOC
import withoutAuth from '@lib/hoc/withoutAuth'

import { setAuthenticationToken } from '@lib/cookie'



const Signin = () => {

  const router = useRouter();

  const [formDetails, setFormDetails] = useState<any>({
    email: "deepak@teachedison.com",
    password: "Iamedison2015#$#",
    tenant: SUB_DOMAIN_NAME,
    medium: "email",
  });

  const handleFormDetails = (key: string, value: string) => { setFormDetails({ ...formDetails, [key]: value }) }
  const [alertData, setAlertData] = React.useState({
    variant: "info",
    show: false,
    message: "",
  });

  // const onFormSubmit = (e: any) => {
  //   e.preventDefault();
  //   UserSigninAuth(formDetails).then(res => {
  //     console.log("response here", res);
  //     redirectToAdmin(res);
  //   }).catch(err => {
  //     console.log("error here", err);
  //     setAlertData({
  //       variant: "danger",
  //       show: true,
  //       message: err.detail
  //         ? err.detail == "wrong password"
  //           ? "Incorrect Password."
  //           : err.detail
  //         : "The Email/Mobile Number you entered did not match our records. Please double-check and try again.",
  //     });
  //   })
  // }

  //without sign-in
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    router.push('/dashboard');
  }

  //redirecting to dashboard after log-in
  const redirectToAdmin = (tokenDetails: any) => {
    setAuthenticationToken(tokenDetails);
    router.push('/dashboard');
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      margin: "6em"
    }}>
      <Form onSubmit={onFormSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={formDetails.email}
            onChange={(e: any) => handleFormDetails("email", e.target.value)}
            required
          />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={formDetails.password}
            onChange={(e: any) => handleFormDetails("password", e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Submit
  </Button>
        <div>
          <Alert
            style={{ fontSize: "14px" }}
            className="mb-2"
            variant={alertData.variant}
            show={alertData.show}
          >
            {alertData.message}
          </Alert>
        </div>
      </Form>
    </div>
  )
}
// export default withoutAuth(Signin);
export default Signin;