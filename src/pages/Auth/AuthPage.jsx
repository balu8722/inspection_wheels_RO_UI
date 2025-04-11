import { Card, Col, Image, Row } from 'react-bootstrap';
import AuthForm, { STATE_LOGIN } from '../../components/AuthForm';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import inspection_logo from "../../assets/img/auth_bg_img.png"
// import { Card, Col, Row } from 'reactstrap';

const AuthPage=(page)=> {
  const {authState}=page
  const navigate=useNavigate();
  
  const handleAuthState = authState => {
    if (authState === STATE_LOGIN) {
      navigate("/login")
    } else {
      navigate('/forgotpassword');
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

    return (
      <Row className='g-0'
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Col md={7} className='h-100'>
          <Image src={inspection_logo} className='auth_bg' />
          {/* <div className='d-flex align-items-center justify-content-center' style={{    height: "100%",
            background: "linear-gradient(to bottom, #6a82fb, #fc5c7d)"}}>
            <h2 className='text-white'><strong>Inspection Wheels</strong></h2>
          </div> */}
        </Col>
        <Col md={5} className='px-5'>
          <Card body>
            <AuthForm
              authState={authState}
              onChangeAuthState={handleAuthState}
            />
          </Card>
        </Col>
      </Row>
    );
}

export default AuthPage;
