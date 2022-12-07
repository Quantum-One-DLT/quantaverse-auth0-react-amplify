import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useWeb3Onboard } from "@web3-onboard/react/dist/context";

export const Profile = () => {
  const { user } = useWeb3Onboard;

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>

    </Container>
  );
};

export default Profile;
