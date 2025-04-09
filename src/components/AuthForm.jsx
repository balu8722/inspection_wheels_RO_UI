import React, { useMemo, useCallback } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import logo200Image from '../assets/img/logo/logo_200.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../redux/slices/usersSlice';

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

const AuthForm = (props) => {
  const {
    authState = STATE_LOGIN,
    showLogo = true,
    usernameLabel = 'Username',
    usernameInputProps = {
      type: 'text',
      placeholder: 'Enter username',
    },
    passwordLabel = 'Password',
    passwordInputProps = {
      type: 'password',
      placeholder: 'Enter password',
    },
    confirmPasswordLabel = 'Confirm Password',
    confirmPasswordInputProps = {
      type: 'password',
      placeholder: 'confirm your password',
    },
    onLogoClick = () => {},
    onChangeAuthState,
    buttonText,
    children,
  }=props
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

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if(isLogin){
      dispatch(setIsAuth(
        {
          isAuth:true,
          data:{role:"RO"}
        }
      ))
      localStorage.setItem("isAuth",true)
      navigate("/dashboards",{replace:true})
    }
  }, []);

  const renderButtonText = useMemo(() => {
    if (!buttonText && isLogin) return 'Login';
    if (!buttonText && isSignup) return 'Signup';
    return buttonText;
  }, [buttonText, isLogin, isSignup]);

  return (
    <Form onSubmit={handleSubmit}>
      {showLogo && (
        <div className="text-center pb-4">
          <img
            src={logo200Image}
            className="rounded"
            style={{ width: 60, height: 60, cursor: 'pointer' }}
            alt="logo"
            onClick={onLogoClick}
          />
        </div>
      )}

      <FormGroup>
        <Label for={usernameLabel}>{usernameLabel}</Label>
        <Input {...usernameInputProps} />
      </FormGroup>

      <FormGroup>
        <Label for={passwordLabel}>{passwordLabel}</Label>
        <Input {...passwordInputProps} />
      </FormGroup>

      {isSignup && (
        <FormGroup>
          <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
          <Input {...confirmPasswordInputProps} />
        </FormGroup>
      )}

      {isSignup && <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Agree the terms and policy
        </Label>
      </FormGroup>}

      <hr />
      <Button
        size="lg"
        className="bg-gradient-theme-left border-0"
        block
        onClick={handleSubmit}
      >
        {renderButtonText}
      </Button>

      <div className="text-center pt-1">
        <h6>or</h6>
        <h6>
          {isSignup ? (
            <Link to="/login" onClick={handleChangeAuthState(STATE_LOGIN)}>
              Login
            </Link>
          ) : (
            <Link to="/signup" onClick={handleChangeAuthState(STATE_SIGNUP)}>
              Signup
            </Link>
          )}
        </h6>
      </div>

      {children}
    </Form>
  );
};

export default AuthForm;
