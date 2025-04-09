import { useNavigate } from 'react-router-dom';
import { Content } from '../../components/Layout';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const EmptyLayout = ({ children, ...restProps }) => {
  const navigate=useNavigate()
  const {isAuth}=useSelector(state=>state.users)
  useEffect(() => {
    if(isAuth){
      navigate("/dashboards")
    }
  }, [isAuth]);
  return (
  <main className="cr-app bg-light" {...restProps}>
    <Content fluid>{children}</Content>
  </main>
)};

export default EmptyLayout;
