
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavItem } from "reactstrap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdWeb,
  MdInsertChart,
  MdWidgets,
  MdExtension,
  MdKeyboardArrowDown,
  MdRadioButtonChecked,
  MdGroupWork,
  MdChromeReaderMode,
  MdViewList,
  MdArrowDropDownCircle,
  MdStar,
  MdNotificationsActive,
  MdBrush,
  MdViewDay,
  MdTextFields,
  MdBorderAll,
  MdSend,
  MdPages,
  MdAccountCircle,
  MdViewCarousel,
  MdAssignmentInd,
  MdSwapHoriz,
  MdVerified,
  MdPauseCircleFilled,
  MdTaskAlt,
  MdManageAccounts,
  MdPersonAdd,
  MdPeopleAlt,
  MdContacts,
  MdSummarize,
  MdOutlineListAlt,
  MdSettings,
} from "react-icons/md";
import { FiChevronsRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

import logo200Image from "../../assets/img/logo/logo.svg";
import logo from "../../assets/img/logo/inspection_logo.png";
import sidebarBgImage from "../../assets/img/sidebar/sidebar-4.jpg";
import SourceLink from "../../components/SourceLink";
import bn from "../../utils/bemnames";
import { useSelector } from "react-redux";

const bem = bn.create("sidebar");

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const sidebarLabels = [
  { to: "/dashboards", name: "Dashboard", exact: true, Icon: MdDashboard },
];
// 

const tray_components = [
  { to: "/leadboard/so-leads", name: "SO Leads", Icon: MdWeb },
  { to: "/leadboard/allocated", name: "Allocated", Icon: MdAssignmentInd },
  { to: "/leadboard/reassigned", name: "Reallocated", Icon: MdSwapHoriz },
  {
    to: "/leadboard/so-confirmation",
    name: "SO Confirmation",
    Icon: MdVerified,
  },
  { to: "/leadboard/qc-hold", name: "QC Hold", Icon: MdPauseCircleFilled },
  {
    to: "/leadboard/so-leads",
    name: "Client Leads",
    Icon: MdWeb,
  },
  {
    to: "/leadboard/lead-approved",
    name: "Lead Approved",
    Icon: MdTaskAlt,
  },

  // {
  //   to: "/leadboard/lead-approved",
  //   name: "Completed Leads",
  //   Icon: MdTaskAlt,
  // },
];

// 
const leadManagement = [
  { to: "/create-lead", name: "Create", exact: true, Icon: MdPersonAdd },
];

const userManagement = [
  { to: "/user-list", name: "Users", exact: true, Icon: MdContacts },
];

const mis = [
  // {
  //   to: "/summary-mis",
  //   name: "Summary Mis",
  //   exact: true,
  //   Icon: MdOutlineListAlt,
  // },
  { to: "/mis/so-mis", name: "So MIS", exact: true, Icon: MdWeb },
  // { to: "/mfc-global", name: "MFC Global MIS", exact: true, Icon: MdSummarize },
];
const clientmis = [
  { to: "/mis/client-mis", name: "Client MIS", exact: true, Icon: MdWeb },
];

const adminNavItems = [
  // { to: "/dashboard", name: "dashboard", exact: true, Icon: MdDashboard },
 
  
  { to: "/manageclient", name: "Manage Client", exact: false, Icon: MdInsertChart },
  { to: "/managero", name: "Manage RO", exact: false, Icon: MdWeb },
  { to: "/managevaluator", name: "Manage Valuator", exact: false, Icon: MdWidgets }
];

const settings = [
  { to: "/roles", name: "Manage Roles", Icon: FiChevronsRight },
  { to: "/vehicletype", name: "Vehicle Type", Icon: FiChevronsRight },
  { to: "/vehiclecategory", name: "Vehicle Category", Icon: FiChevronsRight },
  { to: "/rcstatus", name: "RC status", Icon: FiChevronsRight },
  // { to: "/input-groups", name: "Reasons Type", Icon: FiChevronsRight },
  // { to: "/dropdowns", name: "Account Type", Icon: FiChevronsRight }
];

const clientLeadmgmt = [
  { to: "/create-lead", name: "Manage Lead", exact: true, Icon: MdPersonAdd },
];

const CollapsibleSection = ({ icon: Icon, label, isOpen, toggle, items }) => (
  <>
    <NavItem className={bem.e("nav-item")} onClick={toggle}>
      <div className="nav-link d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Icon className={bem.e("nav-item-icon")} />
          <span>{label}</span>
        </div>
        <MdKeyboardArrowDown
          className={bem.e("nav-item-icon")}
          style={{
            padding: 0,
            transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)",
            transition: "transform 0.3s",
          }}
        />
      </div>
    </NavItem>
    <Collapse isOpen={isOpen}>
      {items.map(({ to, name, Icon }, index) => (
        <NavItem key={index} className={bem.e("nav-item sub-collapse")}>
          <NavLink
            to={to}
            onClick={()=>{
              if (window.innerWidth <= 767) {
                document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
              }
            }}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <Icon className={bem.e("nav-item-icon")} />
            <span>{name}</span>
          </NavLink>
        </NavItem>
      ))}
    </Collapse>
  </>
);


const Sidebar = () => {
  const {role}=useSelector(state=>state.users)
  // let role=userdata?.role?userdata?.role:"";
     console.log("role",role);
     const normalizedRole = role?.trim().toLowerCase();
     const filteredTrayComponents =
       normalizedRole === "admin"
         ? tray_components
         : normalizedRole === "client"
         ? tray_components.filter((item) =>
             ["Client Leads", "Lead Approved"].includes(item.name)
           )
         : tray_components.filter(
             (item) => !["Client Leads", "Lead Approved"].includes(item.name)
           );

  const [isOpenComponents, setOpenComponents] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [isOpenPages, setOpenPages] = useState(true);
  // 
  const [isopenLead, setOpenLead] = useState(false);;
   const [isOpenUser, setOpenUser] = useState(false);

   const [isOpenClientMgmt, setOpenClientMgmt] = useState(false);
    const [isOpenMis, setOpenMis] = useState(false);
   const location = useLocation();
useEffect(() => {
  const openPaths = [
    "/ro-leads",
    "/assigned",
    "/reassigned",
    "/ro-confirmation",
    "/qc-hold",
    "/inspection-completed",
  ];

  if (openPaths.includes(location.pathname)) {
    setOpenComponents(true);
  } else {
    setOpenComponents(false);
  }
}, [location.pathname]);

      return (
        // <aside className={bem.b()} data-image={sidebarBgImage}>
        <aside
          className={`${bem.b()} cr-sidebar--open`}
          data-image={sidebarBgImage}
        >
          <div className={bem.e("background")} style={sidebarBackground} />
          <div className={bem.e("content")}>
            <Navbar>
              <SourceLink className="navbar-brand d-flex">
                <img src={logo200Image} className="img-fluid pr-2" alt="logo" />
                {/* <span className="text-white">
              Reduction <FaGithub />
            </span> */}
              </SourceLink>
            </Navbar>
            <Nav vertical>
              {/* ***************NEW Menus */}
              {sidebarLabels.map(({ to, name, exact, Icon }, index) => (
                <NavItem key={index} className={bem.e("nav-item")}>
                  <NavLink
                    to={to}
                    onClick={() => {
                      if (window.innerWidth <= 767) {
                        document
                          .querySelector(".cr-sidebar")
                          .classList.toggle("cr-sidebar--open");
                      }
                    }}
                    className={({ isActive }) =>
                      `nav-link ${isActive ? "active" : ""}`
                    }
                    end={exact}
                  >
                    <Icon className={bem.e("nav-item-icon")} />
                    <span>{name}</span>
                  </NavLink>
                </NavItem>
              ))}

              {/* <CollapsibleSection
                iconClass="custom"
                icon={MdExtension}
                label="Lead Management"
                isOpen={isOpenClientMgmt}
                toggle={() => setOpenClientMgmt(!isOpenClientMgmt)}
                items={clientLeadmgmt}
              /> */}

              <CollapsibleSection
                iconClass="custom"
                icon={MdExtension}
                label="Lead Board"
                isOpen={isOpenComponents}
                toggle={() => setOpenComponents(!isOpenComponents)}
                items={filteredTrayComponents}
              />
              <CollapsibleSection
                iconClass="custom"
                icon={MdManageAccounts}
                label="Lead Management"
                isOpen={isopenLead}
                toggle={() => setOpenLead(!isopenLead)}
                items={leadManagement}
              />
               {role == "Admin" &&
                adminNavItems.map(({ to, name, exact, Icon }, index) => (
                  <NavItem key={index} className={bem.e("nav-item")}>
                    <NavLink
                      to={to}
                      onClick={() => {
                        if (window.innerWidth <= 767) {
                          document
                            .querySelector(".cr-sidebar")
                            .classList.toggle("cr-sidebar--open");
                        }
                      }}
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      end={exact}
                    >
                      <Icon className={bem.e("nav-item-icon")} />
                      <span>{name}</span>
                    </NavLink>
                  </NavItem>
                ))}
              {(role === "Admin") && (
                <>
                  <NavItem className={bem.e("nav-item")}>
                    <NavLink
                      to={"/user-list"}
                      onClick={() => {
                        if (window.innerWidth <= 767) {
                          document
                            .querySelector(".cr-sidebar")
                            .classList.toggle("cr-sidebar--open");
                        }
                      }}
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      end={false}
                    >
                      <MdPeopleAlt className={bem.e("nav-item-icon")} />
                      <span>Manage Users</span>
                    </NavLink>
                  </NavItem>
                  
                </>
              )}
              
              {(role === "SO") && (
                <>
                  <CollapsibleSection
                    iconClass="custom"
                    icon={MdPeopleAlt}
                    label="User Management"
                    isOpen={isOpenUser}
                    toggle={() => setOpenUser(!isOpenUser)}
                    items={userManagement}
                  />

                  
                </>
              )}
              {(role === "Admin") && (
                <>
                  <NavItem className={bem.e("nav-item")}>
                    <NavLink
                      to={"/mis/so-mis"}
                      onClick={() => {
                        if (window.innerWidth <= 767) {
                          document
                            .querySelector(".cr-sidebar")
                            .classList.toggle("cr-sidebar--open");
                        }
                      }}
                      className={({ isActive }) =>
                        `nav-link ${isActive ? "active" : ""}`
                      }
                      end={false}
                    >
                      <MdSummarize className={bem.e("nav-item-icon")} />
                      <span>MIS</span>
                    </NavLink>
                  </NavItem>
                  
                </>
              )}
              {(role === "SO") && (
              <CollapsibleSection
                    iconClass="custom"
                    icon={MdSummarize}
                    label="MIS"
                    isOpen={isOpenMis}
                    toggle={() => setOpenMis(!isOpenMis)}
                    items={mis}
                  />)}
              {(role === "Client") && (
                <>
                  <CollapsibleSection
                    iconClass="custom"
                    icon={MdSummarize}
                    label="MIS"
                    isOpen={isOpenMis}
                    toggle={() => setOpenMis(!isOpenMis)}
                    items={clientmis}
                  />
                </>
              )}

             

              {role == "Admin" && (
                <>
                  <CollapsibleSection
                    iconClass="custom"
                    icon={MdSettings}
                    label="Settings"
                    isOpen={openSettings}
                    toggle={() => setOpenSettings(!openSettings)}
                    items={settings}
                  />
                </>
              )}
            </Nav>
          </div>
        </aside>
      );
};

export default Sidebar;

