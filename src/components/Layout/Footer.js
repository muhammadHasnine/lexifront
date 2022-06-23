import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import { FaLanguage } from 'react-icons/fa';
const Footer = () => {
  return (
    <Navbar style={{ background: '#101E2C' }}>
      <Nav navbar>
        <NavItem>
          <FaLanguage style={{ color: '#1EB972' }} />
          <span className="ml-2" style={{ color: '#1EB972' }}>
            Manage Words
          </span>
          <span
            style={{
              fontFamily: 'Gilroy-Regular',
              right: '30px',
              position: 'absolute',
              color: 'rgba(255, 255, 255, 0.54)',
            }}
          >
            ©2022 <span style={{ color: '#F1B02D' }}>Lexismat.</span> All Rights
            Reserved
          </span>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
