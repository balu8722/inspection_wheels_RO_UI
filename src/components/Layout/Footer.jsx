import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from '../../components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar className="mx-auto">
        <NavItem>
          <p className='fontsize-13'> 2025 Dollarbird Technologies pvt ltd Mysuru</p>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
