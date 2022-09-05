import { Dropdown, Menu, Image, Label, Icon } from 'semantic-ui-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from './../utils/UserContext';

import _ from 'lodash';
import NavSearch from './NavSearch';
import AuthService from '../utils/auth';
import ShoppingCart from './../pages/ShoppingCart/ShoppingCart';

export default function Header({ userTokenData }) {
  let cartCount = 0;
  useEffect(() => {
    try {
      cartCount = UserContext.getContextValue.getUser.shoppingCart.length;
    } catch (e) {
      console.log('there is nothing in the cart');
    }
  }, [UserContext]);

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
    {
      key: 'sign-out',
      text: 'Sign Out',
      icon: 'sign out',
      as: Link,
      to: '/',
      onClick: AuthService.logout,
    },
  ];

  return (
    <>
      <div>
        <Menu attached="top">
          <Dropdown item icon="bars" simple>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/">
                Home
              </Dropdown.Item>
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
          {/* Search bar */}
          <NavSearch />

          <Menu.Menu position="right" stackable="true" dropdown="true">
            {/* semantic ui augmentation for ref */}

            {/* ternary for checking if the user is signed in */}
            {AuthService.loggedIn() ? (
              <Menu.Item>
                <Dropdown
                  trigger={
                    <span>
                      <Image
                        avatar
                        src={AuthService.getProfile().data.profilePic}
                      />{' '}
                      {AuthService.getProfile().data.email}
                    </span>
                  }
                  options={options}
                  pointing="top left"
                  icon={null}
                />
              </Menu.Item>
            ) : (
              <Menu.Item name="sign-in" as={Link} to="/sign-in">
                Sign-in
              </Menu.Item>
            )}

            <Menu.Item
              name=""
              // active={activeItem === 'shopping cart'}
              as={Link}
              to="/cart"
            >
              <Icon name="shopping cart" />

              <Label color="red" attached="bottom left" circular size="mini">
                {cartCount}
              </Label>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>

      {/* IDEA: Currency conversion */}
    </>
  );
}
