import { faker } from '@faker-js/faker';
import { useQuery } from '@apollo/client';
import { GET_LISTINGS } from '../utils/queries';
import { Search, Dropdown, Icon, Menu, Image } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import { useReducer, useEffect, useState, useRef, useCallback } from 'react';
import _ from 'lodash';
import exampleSearchData from './DISCARD/testingSearch.json';

// defining what the search should be on init
const searchInit = {
  loading: false,
  results: [],
  value: '',
}

// this is a little function for handling the search dispatches
function searchReducer(currState, searchAction) {
  switch (searchAction.type) {
    case 'CLEAN':
      return searchInit
    case 'START':
      return { ...currState, loading: true, value: searchAction.query }
    case 'FINISH':
      return { ...currState, loading: false, results: searchAction.results }
    case 'UPDATE': 
      return { ...currState, value: searchAction.selection }

    default:
      throw new Error()
  }
}

export default function Header() {
  const [activeItem, setActiveItem] = useState('');
  // reducer and search states for search bar
  const [searchState, searchDispatch] = useReducer(searchReducer, searchInit);
  const { loading, results, value } = searchState;

  /* Nice To Have:
   * should we be setting the listings query to a global state?
   * i remember JD talking about having states that can be accessed from any page
   * i thin ideally, we would implement that for the listing and just re-set the listings?
   * -fixedOtter
   */
  const { qData } = useQuery(GET_LISTINGS);
  const searchData = exampleSearchData.data.getListings;

  const timeoutRef = useRef();

  // semantics search handler
  const searchChangeHandler = useCallback((datBoi, data) => {
    clearTimeout(timeoutRef.current);
    searchDispatch({ type: 'START', query: data.value });
    console.log('this oyr log:')

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        searchDispatch({ type: 'CLEAN' });
        return
      }

      const regularExpression = new RegExp(_.escapeRegExp(data.value), 'i');
      const doItMatch = (query) => regularExpression.test(query.title);

      searchDispatch({
        type: 'FINISH',
        results: _.filter(searchData, doItMatch)
      });
    }, 300)
  }, []);

  // some timeout clearing
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  const handleItemClick = (e, { name }) => {
    console.log(name);
    setActiveItem({ activeItem: name });
  };
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
            <Search
              loading={loading}
              placeholder='Search for an item...'
              onResultSelect={(datBoi, data) =>
                searchDispatch({ type: 'UPDATE', selection: data.result.title })
              }
              onSearchChange={searchChangeHandler}
              results={results}
              value={value}
            />
          </Menu.Menu>

          <Menu.Menu position="right" stackable="true" simple dropdown="true">
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