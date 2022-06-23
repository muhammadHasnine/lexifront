import lexlogoImage from 'assets/img/logo/lexlogo.png';

import SourceLink from 'components/SourceLink';

import React from 'react';
import { FaLanguage } from 'react-icons/fa';
import {
  MdAccountCircle,
  MdInsertChart,
  MdViewCarousel,
  MdExitToApp,
  MdSettings,
  MdAccessAlarm,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';

import {
  // UncontrolledTooltip,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

// const navContents = [
//   { to: '/typography', name: 'typography', exact: false, Icon: MdTextFields },
//   { to: '/tables', name: 'tables', exact: false, Icon: MdBorderAll },
// ];

const pageContents = [
  { to: '/login', name: 'login / signup', exact: false, Icon: MdAccountCircle },
  {
    to: '/login-modal',
    name: 'login modal',
    exact: false,
    Icon: MdViewCarousel,
  },
];

const navItems = [
  {
    to: '/act01',
    name: 'activity01',
    exact: true,
    isGreenBtnok: '#1EB972',
    isGreenRect: '#1EB972',
  },
  {
    to: '/actsec',
    name: 'activity02',
    exact: false,
    isGreenBtnok: '#f8f9fa',
    isGreenRect: '#172231',
  },
  {
    to: '/actthird',
    name: 'activity03',
    exact: false,
    isGreenBtnok: '#f8f9fa',
    isGreenRect: '#172231',
  },
  {
    to: '/actfour',
    name: 'activity04',
    exact: false,
    isGreenBtnok: '#f8f9fa',
    isGreenRect: '#172231',
  },
];
const navGeneralItems = [
  {
    to: '/config',
    name: 'configuration',
    exact: false,
    isGreenBtnok: '#f8f9fa',
    isGreenRect: '#172231',
    Icon: MdSettings,
  },
  { to: '/actsecs', name: 'Manage Words', exact: false, Icon: FaLanguage },
  { to: '/actthds', name: 'Reports', exact: false, Icon: MdInsertChart },
  { to: '/actfours', name: 'About', exact: false, Icon: MdAccessAlarm },
];
const navExitItems = [
  { to: '/signout', name: 'Exit', exact: true, Icon: MdExitToApp },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
    isGreenBtn: false,
  };

  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };
  greenBtnClick = index => {
    navItems[0].isGreenRect = '#172231';
    navItems[1].isGreenRect = '#172231';
    navItems[2].isGreenRect = '#172231';
    navItems[3].isGreenRect = '#172231';
    navItems.map((key) => (navItems[key].isGreenBtnok = 'white'));
    navItems[index].isGreenBtnok = '#1EB972';
    navItems[index].isGreenRect = '#1EB972';
  };
  render() {
    return (
      <aside className={bem.b()}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>
            <SourceLink className="navbar-brand d-flex">
              <img
                src={lexlogoImage}
                width="40"
                height="30"
                className="pr-2"
                alt=""
              />
              <span className="text-white">LEXISMAT</span>
            </SourceLink>
          </Navbar>
          <Nav vertical>
            <span className="ml-3" style={{ fontSize: '10px' }}>
              ACTIVITIES
            </span>
            {navItems.map(
              ({ to, name, exact, isGreenBtnok, isGreenRect }, index) => (
                <NavItem key={index} className={bem.e('nav-item')}>
                  <BSNavLink
                    id={`navItem-${name}-${index}`}
                    className="text-uppercase"
                    tag={NavLink}
                    to={to}
                    exact={exact}
                    onClick={() => this.greenBtnClick(index)}
                  >
                    <svg
                      width="260"
                      height="50"
                      viewBox="40 0 220 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="220"
                        height="50"
                        fill={isGreenRect}
                        fill-opacity="0.1"
                      />
                      <path
                        d="M32 18V20H38.59L27 31.59L28.41 33L40 21.41V28H42V18H32Z"
                        fill={isGreenBtnok}
                      />
                      <text x="49" fill={isGreenBtnok} y="32">
                        {name}
                      </text>
                    </svg>
                  </BSNavLink>
                </NavItem>
              ),
            )}
            <span className="ml-3" style={{ fontSize: '10px' }}>
              GENERAL
            </span>
            {navGeneralItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span>{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
            {navExitItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item mt-5')}>
                <span className="ml-3" style={{ fontSize: '10px' }}>
                  ACTIONS
                </span>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span>{name}</span>
                </BSNavLink>
              </NavItem>
            ))}
          </Nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
