import Avatar from 'components/Avatar';
import { UserCard } from 'components/Card';

import withBadge from 'hocs/withBadge';
import React from 'react';
import Select from 'react-select';
import { MdExitToApp, MdNotificationsActive } from 'react-icons/md';
import {
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
} from 'reactstrap';
import bn from 'utils/bemnames';

const bem = bn.create('header');

const MdNotificationsActiveWithBadge = withBadge({
  size: 'md',
  color: 'primary',
  style: {
    top: -10,
    right: -10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: <small>5</small>,
})(MdNotificationsActive);

class Header extends React.Component {
  state = {
    isOpenNotificationPopover: false,
    isNotificationConfirmed: false,
    isOpenUserCardPopover: false,
  };

  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });

    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  render() {
    const { isNotificationConfirmed } = this.state;
    const options = [{ value: 'DefaultConfig', label: 'DefaultConfig' }];
    const customStyles = {
      dropdownIndicator: base => ({
        ...base,
        color: '#FFFFFF', // Custom colour
        backgroundColor: '#1EB972',
        borderRadius: '5px',
      }),
      // control: () =>({
      // 	width:'200px'
      // })
    };
    const MyComponent = () => (
      <div style={{ borderRadius: '30px' }}>
        <Select
          options={options}
          placeholder="DefaultConfig"
          styles={customStyles}
          isClearable={true}
        />
      </div>
    );
    return (
      <Navbar light expand style={{ background: '#101E2C', color: 'Green' }}>
        <span className="mr-2">Default Config</span>
        <Nav navbar className={bem.e('nav-right')}>
          <NavItem>
            <NavLink id="Popover2">
              <Avatar
                onClick={this.toggleUserCardPopover}
                className="can-click"
              />
            </NavLink>
            <div className="rounded" style={{ borderRadius: '15px' }}>
              <Popover
                placement="bottom-end"
                isOpen={this.state.isOpenUserCardPopover}
                toggle={this.toggleUserCardPopover}
                target="Popover2"
                className="p-0 rounded"
                style={{ minWidth: 250 }}
              >
                <PopoverBody className="p-0 border border-0">
                  <UserCard className="border-light ">
                    <span className="ml-4">
                      UserID<span className="ml-2">:</span>
                      <span className="ml-2">SEASET</span>
                    </span>
                    <span className="ml-4">
                      Email<span className="ml-3">:</span>
                      <span className="ml-2">sesat@google.com</span>
                    </span>
                    <div className="border border-1 mt-3 ">
                      <div className="ml-4 mt-2">
                        <span className="ml-2 mt-5">Configuration file</span>
                      </div>
                      <div className="ml-2 mr-2 mb-3 mt-2">
                        <MyComponent />
                      </div>
                    </div>
                    <div className="ml-2 mt-2">
                      <MdExitToApp className="ml-2 mt-3 mb-3" /> Sign out
                    </div>
                  </UserCard>
                </PopoverBody>
              </Popover>
            </div>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
