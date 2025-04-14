import Avatar from '../../components/Avatar';
import { UserCard } from '../../components/Card';
import Notifications from '../../components/Notifications';
import SearchInput from '../../components/SearchInput';
import { notificationsData } from '../../demos/header';
import withBadge from '../../hocs/withBadge';
import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import {
  MdClearAll,
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdNotificationsActive,
  MdNotificationsNone,
  MdPersonPin,
  MdVpnKey
} from "react-icons/md";
import {
  Button,
  ListGroup,
  ListGroupItem,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
} from 'reactstrap';
import bn from '../../utils/bemnames';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAuth } from '../../redux/slices/usersSlice';
const bem = bn.create('header');

// const MdNotificationsActiveWithBadge = withBadge({
//   size: 'md',
//   color: 'primary',
//   style: {
//     top: -10,
//     right: -10,
//     display: 'inline-flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   children: <small>5</small>,
// })(MdNotificationsActive);

const Header =() => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [isOpenUserCardPopover,setOpenUserCardPopover]=useState(false)
  

  const toggleUserCardPopover = () => {
    setOpenUserCardPopover(!isOpenUserCardPopover)
    // this.setState({
    //   isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    // });
  };

  const logout=()=>{
    localStorage.clear();
    dispatch(setIsAuth(false))
    dispatch(setIsAuth(
          {
            isAuth:false,
            data:{role:""}
          }
        ))
    navigate("/",{replace:true})
  }

  const handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar ').classList.toggle('cr-sidebar--open');
  };

    return (
      <Navbar light expand className={bem.b("")}>
        <Nav navbar className="mr-2">
          <Button outline onClick={handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
        <Nav navbar>{/* <SearchInput /> */}</Nav>

        <Nav navbar className={bem.e("nav-right")}>
          <NavItem className="d-md-inline-flex w-100 align-self-center">
            <NavLink className="d-none d-md-inline-flex ">
              Global Search: <SearchInput />
            </NavLink>
            <NavLink>
              <Form.Select className="selective-field">
                <option value="0">Vehicle Reg NO</option>
                <option value="1">RO Lead</option>
              </Form.Select>
            </NavLink>
            {/* <NavLink id="Popover1" className="position-relative">
              {isNotificationConfirmed ? (
                <MdNotificationsNone
                  size={25}
                  className="text-secondary can-click"
                  onClick={this.toggleNotificationPopover}
                />
              ) : (
                <MdNotificationsActiveWithBadge
                  size={25}
                  className="text-secondary can-click animated swing infinite"
                  onClick={this.toggleNotificationPopover}
                />
              )}
            </NavLink> */}
            {/* <Popover
              placement="bottom"
              isOpen={this.state.isOpenNotificationPopover}
              toggle={this.toggleNotificationPopover}
              target="Popover1"
            >
              <PopoverBody>
                <Notifications notificationsData={notificationsData} />
              </PopoverBody>
            </Popover> */}
          </NavItem>

          <NavItem className="text-center">
            <NavLink id="Popover2">
              <Avatar onClick={toggleUserCardPopover} className="can-click" />
            </NavLink>
            <Popover
              placement="bottom-end"
              isOpen={isOpenUserCardPopover}
              toggle={toggleUserCardPopover}
              target="Popover2"
              className="p-0 border-0"
              style={{ minWidth: 150 }}
            >
              <PopoverBody className="p-0 border-light">
                {/* <UserCard> */}
                <ListGroup flush>
                  <ListGroupItem
                    tag="button"
                    action
                    className="pr_button border-light"
                    onClick={() => {
                      navigate("/profile", { replace: true });
                      setOpenUserCardPopover(!isOpenUserCardPopover);
                    }}
                  >
                    <MdPersonPin /> Profile
                  </ListGroupItem>
                  <ListGroupItem
                    tag="button"
                    action
                    className="pr_button border-light"
                    onClick={() => {
                      navigate("/changepassword");
                      toggleUserCardPopover();
                    }}
                  >
                    <MdVpnKey /> Change Password
                  </ListGroupItem>
                  <ListGroupItem
                    tag="button"
                    action
                    className="pr_button  border-light"
                    onClick={() => {
                      logout();
                    }}
                  >
                    <MdExitToApp /> Signout
                  </ListGroupItem>
                </ListGroup>
                {/* </UserCard> */}
              </PopoverBody>
            </Popover>
          </NavItem>
        </Nav>
      </Navbar>
    );
  // }
}

export default Header;
