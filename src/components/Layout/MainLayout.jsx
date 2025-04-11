import React, { useEffect } from "react";
import { Content, Footer, Header, Sidebar } from "../../components/Layout";
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";

const MainLayout = ({ children }) => {
  const navigate=useNavigate()
  const {isAuth}=useSelector(state=>state.users)
  
  useEffect(() => {
  // console.log("isAuth",isAuth)
    let _isAuth=localStorage.getItem("isAuth")
    // console.log("_isAuth",_isAuth)
    if(_isAuth!="true"){
      navigate("/",{replace:true})
    }
  }, [isAuth]);

  // const toggleSidebar = () => {
  //   const sidebar = document.querySelector(".cr-sidebar");
  //   if (!sidebar) return;

  //   sidebar.classList.toggle("cr-sidebar--open");
  // };

  return (
    <main className="cr-app bg-light">
      <Sidebar />
      <Content fluid>
        <Header />
        <div className="page_body">{children}</div>
        <Footer />
      </Content>
    </main>
  );
};

export default MainLayout;

