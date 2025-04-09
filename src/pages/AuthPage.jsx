import { Card, Col, Row } from 'react-bootstrap';
import AuthForm, { STATE_LOGIN } from '../components/AuthForm';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Card, Col, Row } from 'reactstrap';

const AuthPage=(page)=> {
  const {authState}=page
  const navigate=useNavigate();
  
  const handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      navigate("/login")
    } else {
      navigate('/signup');
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

    return (
      <Row
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={6} lg={4}>
          <Card body>
            <AuthForm
              authState={authState}
              onChangeAuthState={handleAuthState}
              onLogoClick={handleLogoClick}
            />
          </Card>
        </Col>
      </Row>
    );
}

export default AuthPage;
