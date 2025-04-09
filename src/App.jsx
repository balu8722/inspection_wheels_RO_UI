// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import { STATE_LOGIN, STATE_SIGNUP } from './components/AuthForm';
import { EmptyLayout, LayoutRoute, MainLayout } from './components/Layout';
import PageSpinner from './components/PageSpinner';
import AuthPage from './pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navigate, Routes } from "react-router-dom";
import PropTypes from "prop-types";

// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/reduction.scss';
import Dashboard from './pages/Dashboard/Dashboard';
// import MyTray from './pages/MyTray/MyTray'
// import "./styles/styles.scss"

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
// import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Roleads from './pages/MyTray/ROLeads/ROLeads';


const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

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

    originalConsoleError(...args); // Let others pass through
  };
}

class App extends React.Component {
  
  // render() {
  //   return (
  //     <BrowserRouter basename={"/react-reduction"}>
  //       <Routes>
  //         <LayoutRoute
  //           exact
  //           path="/login"
  //           layout={EmptyLayout}
  //           component={(props) => (
  //             <AuthPage {...props} authState={STATE_LOGIN} />
  //           )}
  //         />
  //         <LayoutRoute
  //           exact
  //           path="/signup"
  //           layout={EmptyLayout}
  //           component={(props) => (
  //             <AuthPage {...props} authState={STATE_SIGNUP} />
  //           )}
  //         />

          // <MainLayout breakpoint={this.props.breakpoint}>
          //   <React.Suspense fallback={<PageSpinner />}>
          //     <Route exact path="/" component={DashboardPage} />
          //     <Route exact path="/login-modal" component={AuthModalPage} />
          //     <Route exact path="/buttons" component={ButtonPage} />
          //     <Route exact path="/cards" component={CardPage} />
          //     <Route exact path="/widgets" component={WidgetPage} />
          //     <Route exact path="/typography" component={TypographyPage} />
          //     <Route exact path="/alerts" component={AlertPage} />
          //     <Route exact path="/tables" component={TablePage} />
          //     <Route exact path="/badges" component={BadgePage} />
          //     <Route exact path="/button-groups" component={ButtonGroupPage} />
          //     <Route exact path="/dropdowns" component={DropdownPage} />
          //     <Route exact path="/progress" component={ProgressPage} />
          //     <Route exact path="/modals" component={ModalPage} />
          //     <Route exact path="/forms" component={FormPage} />
          //     <Route exact path="/input-groups" component={InputGroupPage} />
          //     <Route exact path="/charts" component={ChartPage} />
          //   </React.Suspense>
          // </MainLayout>
  //         <Navigate to="/" />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // }
  render() {
    
    return (
      <BrowserRouter>
        <Provider store={store}>
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
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <Dashboard />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/ro-leads"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <Roleads />
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
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <DashboardPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/login-modal"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
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
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ButtonPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/forms"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <FormPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/cards"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <CardPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/widgets"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <WidgetPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/button-groups"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ButtonGroupPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/input-groups"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <InputGroupPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/dropdowns"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <DropdownPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/badges"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <BadgePage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/alerts"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <AlertPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/progress"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ProgressPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/modals"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <ModalPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/typography"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <TypographyPage />
                  </React.Suspense>
                </MainLayout>
              }
            />
            <Route
              path="/tables"
              element={
                <MainLayout breakpoint={this.props.breakpoint}>
                  <React.Suspense fallback={<PageSpinner />}>
                    <TablePage />
                  </React.Suspense>
                </MainLayout>
              }
            />
          </Routes>
        </Provider>
      </BrowserRouter>
    );
  }
}

// const query = ({ width }) => {
//   if (width < 575) {
//     return { breakpoint: 'xs' };
//   }

//   if (576 < width && width < 767) {
//     return { breakpoint: 'sm' };
//   }

//   if (768 < width && width < 991) {
//     return { breakpoint: 'md' };
//   }

//   if (992 < width && width < 1199) {
//     return { breakpoint: 'lg' };
//   }

//   if (width > 1200) {
//     return { breakpoint: 'xl' };
//   }

//   return { breakpoint: 'xs' };
// };
// const query = ({ width }) => {
//   if (width < 576) {
//     return { breakpoint: "xs" };
//   }
//   if (width >= 576 && width <= 767) {
//     return { breakpoint: "sm" };
//   }
//   if (width >= 768 && width <= 991) {
//     return { breakpoint: "md" };
//   }
//   if (width >= 992 && width <= 1199) {
//     return { breakpoint: "lg" };
//   }
//   if (width >= 1200) {
//     return { breakpoint: "xl" };
//   }

//   return { breakpoint: "xs" };
// };

// App.propTypes = {
//   breakpoint: PropTypes.any,
// };


// export default componentQueries(query)(App);
export default App;
