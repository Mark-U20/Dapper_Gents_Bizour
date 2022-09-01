import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Header() {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (e, { name }) => {
    console.log(name);
    setActiveItem({ activeItem: name });
  };

  return (
    <>
      {/* <div className="ui top inverted attached menu link ">
        <span className="item link grey">
          <i className="bars icon"></i>
        </span>
      </div> */}
      <div>
        <Menu attached="top">
          <Dropdown item icon="bars" simple as={Link} to="/">
            <Dropdown.Menu>
              <Dropdown.Item>StoreX</Dropdown.Item>
              <Dropdown.Item>StoreY</Dropdown.Item>
              <Dropdown.Item>StoreZ</Dropdown.Item>
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

          <Menu.Menu position="right" stackable="true">
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
      {/* ShoppingCart link*/}
      {/* Search Bar */}
      {/* Home link */}
      {/* Wishlist */}

      {/* IDEA: Currency conversion */}
    </>
  );
}

export default Header;
