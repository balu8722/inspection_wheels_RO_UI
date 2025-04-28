import React, { useMemo, useCallback, useState } from 'react';
import logo from "../assets/img/logo/inspection_logo.png"
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../redux/slices/usersSlice';
import { Button, Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PasswordShowHide } from './PasswordShow/PasswordShowHide';
import { PostRequestHook } from '../api/Services';
import { CONFIG_URL } from '../api/api.config';
import  { showNotification } from './Notifications';

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

const AuthForm = (props) => {
  const {
    authState = STATE_LOGIN,
    onChangeAuthState,
  }=props

  const {postRequest,getRequest}=PostRequestHook()

  const [forgotPasswordMessage,setForgotPasswordMessage]=useState("")

const dispatch=useDispatch();
const navigate=useNavigate();
  const isLogin = useMemo(() => authState === STATE_LOGIN, [authState]);
  const isSignup = useMemo(() => authState === STATE_SIGNUP, [authState]);

  const handleChangeAuthState = useCallback(
    (newState) => (event) => {
      event.preventDefault();
      onChangeAuthState(newState);
    },
    [onChangeAuthState]
  );

  const handleSubmit = async(values)=> {
    if(isLogin){
      // console.log("values",values)
      let _data={username:values.username,password:values.password}
      const response=await postRequest(CONFIG_URL.SIGNIN,_data)
      // console.log("response",response)
      if(response.status==200){
        localStorage.setItem("isAuth",true)
        localStorage.setItem("token",response.data.data.token)
        localStorage.setItem("refreshtoken",response.data.data.refreshtoken)
        localStorage.setItem("role",
          response.data?.data?.roleId ? "Admin" : (response.data.data?.source_table === "subofficers"?"SO":"Client")
        );

        dispatch(
          setIsAuth({
            isAuth: true,
            token:response.data.data.token,
            refreshtoken:response.data.data.refreshtoken,
            role:response.data?.data?.roleId ? "Admin" : (response.data.data?.source_table === "subofficers"?"SO":"Client")
          })
        );
  
        showNotification("success",response?.data?.message)
        navigate("/dashboard",{replace:true})
      }else{
        showNotification("error",response?.response?.data?.message||response?.data?.message)
      }
    }else{
      const response=await getRequest(`${CONFIG_URL.FORGOT_PASSWORD}${values?.email}`)
      // console.log("response",response)
      if(response.status==200){
        setForgotPasswordMessage(response?.data?.message)
        // showNotification("success",response?.data?.message)
      }else{
        setForgotPasswordMessage("")
        showNotification("error",response?.response?.data?.message||response?.data?.message)
      }
    }
  };


  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },
    validationSchema: Yup.object(
      isSignup
        ? {
            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
          }
        : {
            username: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
          }
    ),
    onSubmit: (values,{resetForm}) => {
      // resetForm()
      handleSubmit(values)
    },
  });

  return (
    <>
      <div className="text-center pb-4">
          <img
            src={logo}
            className="rounded"
            style={{ width:130, height: 'auto'}}
            alt="logo"
          />
        </div>
      <Form onSubmit={formik.handleSubmit}>
      {!isSignup && (
        <>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.username && !!formik.errors.username}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.username}
            </Form.Control.Feedback>
          </Form.Group>

                                  <PasswordShowHide
                                    name="password"
                                    input_label="Password"
                                    placeholder="Password"
                                    handleChange={formik.handleChange}
                                    handleBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    formikValidation={formik.touched.password && formik.errors.password ? (
                                        <>
                                            <span className="text-danger small">{formik.errors.password}</span>
                                        </>
                                    ) : null}
                                />
        </>
      )}

      {isSignup && (
        <>{forgotPasswordMessage?<>
          <h6>{forgotPasswordMessage}</h6>
        </>:
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            placeholder="Enter registered email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && !!formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>}
        </>
      )}

    
      {!forgotPasswordMessage &&<div className="text-center mt-3">
        <Button
          size={isSignup ? "md" : "md"}
          variant="outline-primary"
          type="submit"
        >
          {isSignup ? 'Request Password Change' : 'Log In'}
        </Button>
      </div>}
    </Form>

    
      

    <div className="text-end mt-3">
        <Link className='text-success' to={isSignup?"/login":"/forgotpassword"} 
        onClick={handleChangeAuthState(isSignup?STATE_LOGIN:STATE_SIGNUP)}>
              {isSignup?"Back to Login":"Forgot Password"}
            </Link>
      </div>
          
    </>
  );
};

export default AuthForm;
