import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';

import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state

  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => {
    console.log(name);
    setActiveItem({ activeItem: name });
  };

  return (
    <Menu stackable>
      {/* semantic ui augmentation for ref */}
      <Menu.Item as={Link} to="/profile">
        {/* user profile image */}
        <img
          className="ui avatar image"
          alt="logo"
          src="https://cdn2.thecatapi.com/images/ebv.jpg"
        />
      </Menu.Item>

      <Menu.Item
        name={'features'}
        active={activeItem === 'features'}
        color={'blue'}
        onClick={handleItemClick}

      >
        Features
      </Menu.Item>

      <Menu.Item
        name="testimonials"
        active={activeItem === 'testimonials'}
        onClick={handleItemClick}

      >
        Testimonials
      </Menu.Item>

      <Menu.Item
        name="sign-in"
        active={activeItem === 'sign-in'}
        onClick={handleItemClick}
        as={Link}
        to="/sign-in"

      >
        Sign-in
      </Menu.Item>
    </Menu>
  );
};

export default AppNavbar;
