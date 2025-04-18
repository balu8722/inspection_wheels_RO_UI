
import { STATE_LOGIN, STATE_SIGNUP } from './components/AuthForm';
import { EmptyLayout, LayoutRoute, MainLayout } from './components/Layout';
import PageSpinner from './components/PageSpinner';
import AuthPage from './pages/AuthPage';
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
const ChartPage = React.lazy(() => import('./pages/ChartPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('./pages/DropdownPage'));
const FormPage = React.lazy(() => import('./pages/FormPage'));
const InputGroupPage = React.lazy(() => import('./pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('./pages/ModalPage'));
const ProgressPage = React.lazy(() => import('./pages/ProgressPage'));
const TablePage = React.lazy(() => import('./pages/TablePage'));
const TypographyPage = React.lazy(() => import('./pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('./pages/WidgetPage'));

import Roleads from './pages/MyTray/ROLeads/ROLeads';
import Assigned from './pages/MyTray/Assigned/Assigned';
import ReAssigned from "./pages/MyTray/ReAssigned/ReAssigned";
import RoConfirmation from './pages/MyTray/RoConfirmation/RoConfirmation';
import QcHold from './pages/MyTray/QcHold/QcHold';
import InspectionCompleted from './pages/MyTray/InspectionCompleted/InspectionCompleted';
import CreateLead from './pages/LeadManagement/CreateLead/CreateLead';
import UserList from './pages/UserManagement/UserList/UserList';

import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth } from './redux/slices/usersSlice';
import ROList from './pages/AdminScreens/ManageRO/ROList';
import AddNewRO from './pages/AdminScreens/ManageRO/AddNewRo';
import ClientsList from './pages/AdminScreens/Clients/ClientsList';
import AddNewClient from './pages/AdminScreens/Clients/AddNewClient';
import ValuatorList from './pages/AdminScreens/Valuator/ValuatorList';
import AddNewValuator from './pages/AdminScreens/Valuator/AddNewValuator';
import SummaryMis from './pages/MIS/SummaryMis/SummaryMis';
import RoMis from './pages/MIS/RoMis/RoMis';

// removing popover warning
if (import.meta.env.DEV) {
  const originalConsoleError = console.error;

  console.error = (...args) => {
    const message = args[0];

    if (
      typeof message === "string" &&
      message.includes("defaultProps will be removed from function components")
    ) {
      return; // Suppress this specific warning
    }

    // originalConsoleError(...args); // Let others pass through
  };
}
// end  removing popover warning 
// function ScrollToTopOnRouteChange() {
//   const { pathname } = useLocation();

const App =()=> {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const {isAuth}=useSelector(state=>state.users)
  useEffect(()=>{
    let _isAuth= localStorage.getItem("isAuth")

    dispatch(setIsAuth(
      {
        isAuth:_isAuth=="true"?true:false,
        data:{role:"RO"}
      }
    ))
  },[])
  
       
  // console.log("isAuth",isAuth)
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
              path="/signup"
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
              path="/buttons"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ButtonPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/forms"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <FormPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/cards"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <CardPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/widgets"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <WidgetPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/button-groups"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ButtonGroupPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/input-groups"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <InputGroupPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/dropdowns"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <DropdownPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/badges"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <BadgePage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/alerts"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <AlertPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/progress"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ProgressPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/modals"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ModalPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/typography"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <TypographyPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/tables"
              element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <TablePage />
                  </React.Suspense>
                </MainLayout>
              }
            />


            {/* admin screens Routes  */}
            <Route path="/managero" element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ROList />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route path="/addnewro" element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <AddNewRO />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route path="/manageclient" element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ClientsList />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route path="/addnewclient" element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <AddNewClient />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route path="/managevaluator" element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ValuatorList />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route path="/addnewvaluator" element={
                <MainLayout>
                  <React.Suspense fallback={<PageSpinner />}>
                    <AddNewValuator />
                  </React.Suspense>
                </MainLayout>
              }
            />
          </Routes>
    );
}
export default App;
