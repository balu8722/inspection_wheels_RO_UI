// import { Content, Footer, Header, Sidebar } from '../../components/Layout';
// import React from 'react';
// import {
//   MdImportantDevices,
//   // MdCardGiftcard,
//   MdLoyalty,
// } from 'react-icons/md';
// // import NotificationSystem from 'react-notification-system';
// import { NOTIFICATION_SYSTEM_STYLE } from '../../utils/constants';

// class MainLayout extends React.Component {
//   static isSidebarOpen() {
//     return document
//       .querySelector('.cr-sidebar')
//       .classList.contains('cr-sidebar--open');
//   }

//   componentWillReceiveProps({ breakpoint }) {
//     if (breakpoint !== this.props.breakpoint) {
//       this.checkBreakpoint(breakpoint);
//     }
//   }

//   componentDidMount() {
//     this.checkBreakpoint(this.props.breakpoint);

//     setTimeout(() => {
//     //   // if (!this.notificationSystem) {
//     //   //   return;
//     //   // }

//     //   this.notificationSystem.addNotification({
//     //     title: <MdImportantDevices />,
//     //     message: 'Welome to Reduction Admin!',
//     //     level: 'info',
//     //   });
//     }, 1500);

//     setTimeout(() => {
//     //   if (!this.notificationSystem) {
//     //     return;
//     //   }

//     //   this.notificationSystem.addNotification({
//     //     title: <MdLoyalty />,
//     //     message:
//     //       'Reduction is carefully designed template powered by React and Bootstrap4!',
//     //     level: 'info',
//     //   });
//     }, 2500);
//   }

//   // close sidebar when
//   handleContentClick = event => {
//     // close sidebar if sidebar is open and screen size is less than `md`
//     if (
//       MainLayout.isSidebarOpen() &&
//       (this.props.breakpoint === 'xs' ||
//         this.props.breakpoint === 'sm' ||
//         this.props.breakpoint === 'md')
//     ) {
//       this.openSidebar('close');
//     }
//   };

//   checkBreakpoint(breakpoint) {
//     switch (breakpoint) {
//       case 'xs':
//       case 'sm':
//       case 'md':
//         return this.openSidebar('close');

//       case 'lg':
//       case 'xl':
//       default:
//         return this.openSidebar('open');
//     }
//   }

//   openSidebar(openOrClose) {
//     if (openOrClose === 'open') {
//       return document
//         .querySelector('.cr-sidebar')
//         .classList.add('cr-sidebar--open');
//     }
//     document.querySelector('.cr-sidebar').classList.remove('cr-sidebar--open');
//   }

//   render() {
//     const { children } = this.props;
//     return (
//       <main className="cr-app bg-light">
//         <Sidebar />
//         <Content fluid onClick={this.handleContentClick}>
//           <Header />
//           {children}
//           <Footer />
//         </Content>

//         {/* <NotificationSystem
//           dismissible={false}
//           ref={notificationSystem =>
//             (this.notificationSystem = notificationSystem)
//           }
//           style={NOTIFICATION_SYSTEM_STYLE}
//         /> */}
//       </main>
//     );
//   }
// }

// export default MainLayout;

import React, { useEffect } from "react";
import { Content, Footer, Header, Sidebar } from "../../components/Layout";
import { useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";

const MainLayout = ({ children }) => {
  const navigate=useNavigate()
  const {isAuth}=useSelector(state=>state.users)
  
  useEffect(() => {
  console.log("isAuth",isAuth)
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

