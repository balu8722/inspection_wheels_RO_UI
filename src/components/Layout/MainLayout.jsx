import React, { useEffect } from "react";
import { Content, Footer, Header, Sidebar } from "../../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import { fetchVehicleCategory, fetchVehicleTypes } from "../../redux/slices/clientsSlice";

const MainLayout = ({ children }) => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const {isAuth}=useSelector(state=>state.users)
  
  useEffect(() => {
    let _isAuth=localStorage.getItem("isAuth")
    if(_isAuth!="true"){
      navigate("/",{replace:true})
    }
  }, [isAuth]);

  useEffect(()=>{ 
    dispatch(fetchVehicleTypes())
    dispatch(fetchVehicleCategory())
  },[dispatch])

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

