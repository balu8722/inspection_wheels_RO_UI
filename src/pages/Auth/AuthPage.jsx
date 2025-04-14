import { Card, Col, Image, Row } from 'react-bootstrap';
import AuthForm, { STATE_LOGIN } from '../../components/AuthForm';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import inspection_logo from "../../assets/img/auth_bg_img.png"
import './authpage.scss'
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
      <Row className='g-0 mob_bg'>
          <Col md={7} className='h-100 d-none d-md-block'>
          <Image src={inspection_logo} className='auth_bg' />
          {/* <div className='d-flex align-items-center justify-content-center' style={{    height: "100%",
            background: "linear-gradient(to bottom, #6a82fb, #fc5c7d)"}}>
            <h2 className='text-white'><strong>Inspection Wheels</strong></h2>
          </div> */}
        </Col>
        <Col md={5} className='px-md-4 px-lg-5 px-3'>
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
