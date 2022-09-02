import { faker } from '@faker-js/faker';
import { useQuery } from '@apollo/client';
import { GET_LISTINGS } from '../utils/queries';
import { Search, Dropdown, Icon, Menu, Image } from 'semantic-ui-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useReducer, useEffect, useState, useRef, useCallback } from 'react';
import _ from 'lodash';
import exampleSearchData from './DISCARD/testingSearch.json';
import { Button } from 'react-bootstrap';
import NavSearch from './NavSearch';

export default function Header() {
  // changes profile image and name randomly on load
  const trigger = (
    <span>
      <Image avatar src={faker.internet.avatar()} /> {faker.name.fullName()}
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
              as={Link}
              to="/cart"
              icon="shopping cart"
            ></Menu.Item>

            <Menu.Item name="sign-in" as={Link} to="/sign-in">
              Sign-in
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>

      {/* IDEA: Currency conversion */}
    </>
  );
}
