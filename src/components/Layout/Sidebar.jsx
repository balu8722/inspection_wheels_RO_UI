
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavItem } from "reactstrap";
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
} from "react-icons/md";
import { FaGithub } from "react-icons/fa";

import logo200Image from "../../assets/img/logo/logo.svg";
import sidebarBgImage from "../../assets/img/sidebar/sidebar-4.jpg";
import SourceLink from "../../components/SourceLink";
import bn from "../../utils/bemnames";

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
  { to: "/ro-leads", name: "RO Leads", Icon: MdWeb },
  { to: "/assigned", name: "Assigned", Icon: MdAssignmentInd },
  { to: "/reassigned", name: "Reassigned", Icon: MdSwapHoriz },
  {
    to: "/ro-confirmation",
    name: "RO Confirmation",
    Icon: MdVerified,
  },
  { to: "/qc-hold", name: "QC Hold", Icon: MdPauseCircleFilled },
  {
    to: "/inspection-completed",
    name: "Inspection Completed",
    Icon: MdTaskAlt,
  },
];

// 
const leadManagement = [
  { to: "/create-lead", name: "Create", exact: true, Icon: MdPersonAdd },
];

const userManagement = [
  { to: "/user-list", name: "Users", exact: true, Icon: MdContacts },
];

const mis = [
  {
    to: "/summary-mis",
    name: "Summary Mis",
    exact: true,
    Icon: MdOutlineListAlt,
  },
  { to: "/ro-mis", name: "Ro Mis", exact: true, Icon: MdWeb },
  { to: "/mfc-global", name: "MFC Global MIS", exact: true, Icon: MdSummarize },
];

// 

const navItems = [
  { to: "/dashboard", name: "dashboard", exact: true, Icon: MdDashboard },
 
  
  { to: "/cards", name: "cards", exact: false, Icon: MdWeb },
  { to: "/charts", name: "charts", exact: false, Icon: MdInsertChart },
  { to: "/widgets", name: "widgets", exact: false, Icon: MdWidgets },
];

const navComponents = [
  { to: "/buttons", name: "buttons", Icon: MdRadioButtonChecked },
  { to: "/button-groups", name: "button groups", Icon: MdGroupWork },
  { to: "/forms", name: "forms", Icon: MdChromeReaderMode },
  { to: "/input-groups", name: "input groups", Icon: MdViewList },
  { to: "/dropdowns", name: "dropdowns", Icon: MdArrowDropDownCircle },
  { to: "/badges", name: "badges", Icon: MdStar },
  { to: "/alerts", name: "alerts", Icon: MdNotificationsActive },
  { to: "/progress", name: "progress", Icon: MdBrush },
  { to: "/modals", name: "modals", Icon: MdViewDay },
];

const navContents = [
  { to: "/typography", name: "typography", Icon: MdTextFields },
  { to: "/tables", name: "tables", Icon: MdBorderAll },
];

const pageContents = [
  { to: "/login", name: "login / signup", Icon: MdAccountCircle },
  { to: "/login-modal", name: "login modal", Icon: MdViewCarousel },
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
  const [isOpenComponents, setOpenComponents] = useState(false);
  const [isOpenContents, setOpenContents] = useState(false);
  const [isOpenPages, setOpenPages] = useState(true);
  // 
  const [isopenLead, setOpenLead] = useState(false);;
   const [isOpenUser, setOpenUser] = useState(false);

   const [isOpenMis, setOpenMis] = useState(false);

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
            <img src={logo200Image} className="pr-2" alt="logo" />
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
          <CollapsibleSection
            iconClass="custom"
            icon={MdExtension}
            label="MY Tray"
            isOpen={isOpenComponents}
            toggle={() => setOpenComponents(!isOpenComponents)}
            items={tray_components}
          />

          <CollapsibleSection
            iconClass="custom"
            icon={MdManageAccounts}
            label="Lead Management"
            isOpen={isopenLead}
            toggle={() => setOpenLead(!isopenLead)}
            items={leadManagement}
          />
          <CollapsibleSection
            iconClass="custom"
            icon={MdPeopleAlt}
            label="User Management"
            isOpen={isOpenUser}
            toggle={() => setOpenUser(!isOpenUser)}
            items={userManagement}
          />
          <CollapsibleSection
            iconClass="custom"
            icon={MdSummarize}
            label="MIS"
            isOpen={isOpenMis}
            toggle={() => setOpenMis(!isOpenMis)}
            items={mis}
          />

          {/* ***************NEW Menus */}
          {/* {navItems.map(({ to, name, exact, Icon }, index) => (
            <NavItem key={index} className={bem.e("nav-item")}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                end={exact}
              >
                <Icon className={bem.e("nav-item-icon")} />
                <span>{name}</span>
              </NavLink>
            </NavItem>
          ))} */}

          {/* <CollapsibleSection
            icon={MdExtension}
            label="Components"
            isOpen={isOpenComponents}
            toggle={() => setOpenComponents(!isOpenComponents)}
            items={navComponents}
          /> */}

          {/* <CollapsibleSection
            icon={MdSend}
            label="Contents"
            isOpen={isOpenContents}
            toggle={() => setOpenContents(!isOpenContents)}
            items={navContents}
          /> */}

          {/* <CollapsibleSection
            icon={MdPages}
            label="Pages"
            isOpen={isOpenPages}
            toggle={() => setOpenPages(!isOpenPages)}
            items={pageContents}
          /> */}
        </Nav>
      </div>
    </aside>
  );
};

export default Sidebar;

