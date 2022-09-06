import { Dropdown, Menu, Image, Label, Icon } from 'semantic-ui-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from './../utils/UserContext';

import { useQuery } from '@apollo/client';
import { GET_LISTINGS } from '../utils/queries';

import _ from 'lodash';
import NavSearch from './NavSearch';
import AuthService from '../utils/auth';

export default function Header({ userTokenData }) {
  let cartCount = 1;
  let cartCountLabel = <></>;

  const { data: qData } = useQuery(GET_LISTINGS);

  useEffect(() => {
    try {
      cartCount = UserContext.getContextValue.getUser.shoppingCart.length;
      if (cartCount > 0) {
        cartCountLabel = (
          <Label color="red" attached="bottom left" circular size="mini">
            cartCount
          </Label>
        );
      } else {
        cartCountLabel = <></>;
      }
    } catch (e) {
      console.log('there is nothing in the cart or nothing loaded');
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

  console.log('header did header');
  return (
    <>
      <header className="title-search">
        <h1 className='site-title'>The Dapper Gents' Biz-Our Bizarre Bazaar</h1>
        <h3 className='subtitle'>For All the Buzz of the Hour!</h3> 
      </header>
        <Menu attached="top" className='header'>
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
            </Dropdown.Menu>
          </Dropdown>
          {/* Search bar */}
          {qData && <NavSearch searchData={qData} />}

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

              {cartCountLabel}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    </>
  );
}
