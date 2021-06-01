import React from 'react'
import withAuth from '@lib/hoc/withAuth'
import { Button } from 'react-bootstrap';
import { logout } from '@lib/cookie';

const dashboard = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "6em",
    }}>
      Dashboard
      <Button onClick={logout}>Logout</Button>

    </div>

  )

}
export default withAuth(dashboard);