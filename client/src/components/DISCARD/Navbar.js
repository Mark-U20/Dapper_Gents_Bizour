import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Auth from "../../utils/auth";

const AppNavbar = () => {
  // set modal display state

  const { activeItem } = this.state;

  const handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  return (
    <Menu stackable>
      <Menu.Item>
        <img alt="logo" src="https://react.semantic-ui.com/logo.png" />
      </Menu.Item>

      <Menu.Item
        name="features"
        active={activeItem === "features"}
        onClick={this.handleItemClick}
      >
        Features
      </Menu.Item>

      <Menu.Item
        name="testimonials"
        active={activeItem === "testimonials"}
        onClick={this.handleItemClick}
      >
        Testimonials
      </Menu.Item>

      <Menu.Item
        name="sign-in"
        active={activeItem === "sign-in"}
        onClick={this.handleItemClick}
      >
        Sign-in
      </Menu.Item>
    </Menu>
  );
};

export default AppNavbar;
