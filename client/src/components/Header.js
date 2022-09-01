
import { faker } from '@faker-js/faker';
import { Dropdown, Icon, Menu, Segment, Image } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => {
    console.log(name);
    setActiveItem({ activeItem: name });
  };
  // changes profile image and name randomly on load
  const trigger = (
    <span>
      <Image avatar src={faker.internet.avatar()} /> {faker.name.findName()}
    </span>
  );
  const options = [
    { key: 'user', text: 'Account', icon: 'user', as: Link, to: '/profile' },

    {
      key: 'wishlist',
      text: 'wishlist',
      icon: 'heart outline',
      as: Link,
      to: '/wishlist',
    },
    {
      key: 'settings',
      text: 'Settings',
      icon: 'settings',
      as: Link,
      to: '/settings',
    },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', as: Link, to: '/' },
  ];

  return (
    <>
      <div>
        <Menu attached="top">
          <Dropdown item icon="bars" simple as={Link} to="/">
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/pokemon">
                Pokemon
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/computer">
                Computer Parts
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/random">
                Random Stuff
              </Dropdown.Item>
              {/* <Dropdown.Divider />  can split dropdowns*/}
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Menu position="right">
            <div className="ui right aligned category search item">
              <div className="ui transparent icon input">
                <input
                  className="prompt"
                  type="text"
                  placeholder="Search items..."
                />
                <i className="search link icon" />
              </div>
              <div className="results" />
            </div>
          </Menu.Menu>

          <Menu.Menu position="right" stackable="true" simple dropdown="true">
            {/* semantic ui augmentation for ref */}

            <Menu.Item as={NavLink} to="/cart">
                <Icon name="shopping cart"></Icon>
            </Menu.Item>

            <Menu.Item>
              <Dropdown
                trigger={trigger}
                options={options}
                pointing="top left"
                icon={null}
              />
            </Menu.Item>

            <Menu.Item
              name=""
              active={activeItem === 'shopping cart'}
              onClick={handleItemClick}
              as={Link}
              to="/cart"
              icon="shopping cart"
            ></Menu.Item>

            <Menu.Item
              name="sign-in"
              active={activeItem === 'sign-in'}
              onClick={handleItemClick}
              as={Link}
              to="/sign-in"
            >
              Sign-in
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>

      {/* IDEA: Currency conversion */}
    </>
    
  );
}

export default Header;
