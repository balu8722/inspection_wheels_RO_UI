import React, { useMemo, useCallback, useEffect } from 'react';
import { Button, Card, Col, Form, Image, Row } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PasswordShowHide } from '../../components/PasswordShow/PasswordShowHide';
import inspection_logo from "../../assets/img/auth_bg_img.png"
import logo from "../../assets/img/logo/inspection_logo.png"
import { useNavigate, useParams } from 'react-router-dom';
import { PostRequestHook } from '../../api/Services';
import { CONFIG_URL } from '../../api/api.config';
import { showNotification } from '../../components/Notifications';

const ResetPassword = () => {
    const {token}=useParams();
    const navigate=useNavigate()

    // useEffect(()=>{
    //   if(!token){
    //     showNotification("error","Token Expired,please raise forgot password request again")
    //   }
    // },[token])
    
  const handleSubmit = async(values)=> {
    // console.log("values",values)
    const response=await PostRequestHook().putRequest(`${CONFIG_URL.RESET_PASSWORD_ADMIN}${token}`,values)
     if(response.status==200){      
            showNotification("success",response?.data?.message)
            navigate("/")
          }else{
            showNotification("error",response?.response?.data?.message||response?.data?.message)
          }
  };


  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmPassword: '',
    },
    validate: (values) => {
        let errors = {};
        if (!values.newPassword) {
            errors.newPassword = "Required";
        } 
        if (!values.confirmPassword || (values.confirmPassword != values.newPassword)) {
            errors.confirmPassword = "Must match with New Password";
        }

        return errors;
    },
    onSubmit: (values,{resetForm}) => {
      resetForm()
      handleSubmit(values)
    },
  });

  return (
    <>
      <Row className='g-0 mob_bg'>
          <Col md={7} className='h-100 d-none d-md-block'>
          <Image src={inspection_logo} className='auth_bg' />
        </Col>
        <Col md={5} className='px-md-4 px-lg-5 px-3'>
          <Card body>
     <div className="text-center pb-4">
              <img
                src={logo}
                className="rounded"
                style={{ width:130, height: 'auto'}}
                alt="logo"
              />
            </div>
          <Form onSubmit={formik.handleSubmit}>
                                <PasswordShowHide
                                    name="newPassword"
                                    input_label="New Password *"
                                    lableClass="font_color"
                                    placeholder="Enter New Password"
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                    value={formik.values.newPassword}
                                    formikValidation={formik.touched.newPassword && formik.errors.newPassword ? (
                                        <>
                                            <span className="text-danger small">{formik.errors.newPassword}</span>
                                        </>
                                    ) : null}
                                />
                                <PasswordShowHide
                                    name="confirmPassword"
                                    input_label="Confirm Password *"
                                    lableClass="font_color"
                                    placeholder="Enter Confirm Password"
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                    value={formik.values.confirmPassword}
                                    formikValidation={formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <>
                                            <span className="text-danger small">{formik.errors.confirmPassword}</span>
                                        </>
                                    ) : null}
                                />
                                <div className="text-end mt-4">
                                    <Button  type="submit" variant="outline-primary">
                                        Update Password
                                    </Button>
                                </div>
          </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ResetPassword;
