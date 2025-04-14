
import { STATE_LOGIN, STATE_SIGNUP } from './components/AuthForm';
import { EmptyLayout, LayoutRoute, MainLayout } from './components/Layout';
import PageSpinner from './components/PageSpinner';
import AuthPage from './pages/Auth/AuthPage';
import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reduction.scss';
import Dashboard from './pages/Dashboard/Dashboard';

const AlertPage = React.lazy(() => import('./pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('./pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('./pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('./pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('./pages/ButtonPage'));
const CardPage = React.lazy(() => import('./pages/CardPage'));
// const ChartPage = React.lazy(() => import('./pages/ChartPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('./pages/DropdownPage'));
const FormPage = React.lazy(() => import('./pages/FormPage'));
const InputGroupPage = React.lazy(() => import('./pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('./pages/ModalPage'));
const ProgressPage = React.lazy(() => import('./pages/ProgressPage')); 
const TablePage = React.lazy(() => import('./pages/TablePage'));
const TypographyPage = React.lazy(() => import('./pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('./pages/WidgetPage'));

import Roleads from "./pages/ROScreens/MyTray/ROLeads/ROLeads";
import Assigned from "./pages/ROScreens/MyTray/Assigned/Assigned";
import ReAssigned from "./pages/ROScreens/MyTray/ReAssigned/ReAssigned";
import RoConfirmation from "./pages/ROScreens/MyTray/RoConfirmation/RoConfirmation";
import QcHold from "./pages/ROScreens/MyTray/QcHold/QcHold";
import InspectionCompleted from "./pages/ROScreens/MyTray/InspectionCompleted/InspectionCompleted";

import CreateLead from './pages/ROScreens/LeadManagement/CreateLead/CreateLead';
import UserList from './pages/ROScreens/UserManagement/UserList/UserList';

import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth } from './redux/slices/usersSlice';
import ROList from './pages/AdminScreens/ManageRO/ROList';
import AddNewRO from './pages/AdminScreens/ManageRO/AddNewRo';
import ClientsList from './pages/AdminScreens/Clients/ClientsList';
import AddNewClient from './pages/AdminScreens/Clients/AddNewClient';
import ValuatorList from './pages/AdminScreens/Valuator/ValuatorList';
import AddNewValuator from './pages/AdminScreens/Valuator/AddNewValuator';
import ChangePassword from './pages/Auth/ChangePassword';
import ProfileScreen from './pages/ROScreens/ProfileScreen/ProfileScreen';
import SummaryMis from './pages/ROScreens/MIS/SummaryMis/SummaryMis';
import RoMis from './pages/ROScreens/MIS/RoMis/RoMis';
import VehicleType from './pages/AdminScreens/Settings/vehicletype';
import VehicleCategory from './pages/AdminScreens/Settings/VehicleCategory';
import RCStatus from './pages/AdminScreens/Settings/RCStatus';
import ManageRoles from './pages/AdminScreens/Settings/ManageRoles';

// removing popover warning
if (import.meta.env.DEV) {
  const originalConsoleError = console.error;

  console.error = (...args) => {
    const message = args[0];

    if (
      typeof message === "string" &&
      message.includes("defaultProps will be removed from function components")
    ) {
      return; 
    }
  };
}

const App =()=> {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {isAuth}=useSelector(state=>state.users)
  useEffect(()=>{
    let _isAuth= localStorage.getItem("isAuth")
    let _role=localStorage.getItem("role")

    dispatch(setIsAuth(
      {
        isAuth:_isAuth=="true"?true:false,
        data:{role:_role}
      }
    ))
  },[])
  
    return (
      <Routes>
        <Route
          path="/"
          element={
            <EmptyLayout>
              <AuthPage authState={STATE_LOGIN} />
            </EmptyLayout>
          }
        />
        <Route
          path="/dashboards"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <Dashboard />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/ro-leads"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <Roleads />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/assigned"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <Assigned />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/reassigned"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <ReAssigned />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/ro-confirmation"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <RoConfirmation />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/qc-hold"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <QcHold />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/inspection-completed"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <InspectionCompleted />
              </React.Suspense>
            </MainLayout>
          }
        />

        <Route
          path="/create-lead"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <CreateLead />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/user-list"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <UserList />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/summary-mis"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <SummaryMis />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/ro-mis"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <RoMis />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <ProfileScreen />
              </React.Suspense>
            </MainLayout>
          }
        />

            <Route
              path="/forgotpassword"
              element={
                <EmptyLayout>
                  <AuthPage authState={STATE_SIGNUP} />
                </EmptyLayout>
              }
            />
            <Route
              path="/dashboard"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <DashboardPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/login-modal"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <AuthModalPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            {/* Repeat same structure for all routes */}
            <Route path="*" element={<Navigate to="/" />} />
            {/* <Route exact path="/buttons" component={ButtonPage} /> */}
            <Route
              path="/changepassword"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ChangePassword />
                  </React.Suspense>
                </MainLayout>
              }
            />

        {/* admin screens Routes  */}
        <Route
          path="/managero"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <ROList />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/addnewro"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <AddNewRO />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/manageclient"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <ClientsList />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/addnewclient"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <AddNewClient />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/managevaluator"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <ValuatorList />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/addnewvaluator"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <AddNewValuator />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/vehicletype"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <VehicleType />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/vehiclecategory"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <VehicleCategory />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/rcstatus"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <RCStatus />
              </React.Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/roles"
          element={
            <MainLayout>
              <React.Suspense fallback={<PageSpinner />}>
                <ManageRoles />
              </React.Suspense>
            </MainLayout>
          }
        />
      </Routes>
    );
}
export default App;
