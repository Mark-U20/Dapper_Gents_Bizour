import { faker } from '@faker-js/faker';
import { useQuery } from '@apollo/client';
import { GET_LISTINGS } from '../utils/queries';
import { Search, Dropdown, Icon, Menu, Image } from 'semantic-ui-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useReducer, useEffect, useState, useRef, useCallback } from 'react';
import _ from 'lodash';
import exampleSearchData from './DISCARD/testingSearch.json';
import { Button } from 'react-bootstrap';

// defining what the search should be on init
const searchInit = {
  loading: false,
  results: [],
  value: '',
};

// this is a little function for handling the search dispatches
function searchReducer(currState, searchAction) {
  switch (searchAction.type) {
    case 'CLEAN':
      return searchInit;
    case 'START':
      return { ...currState, loading: true, value: searchAction.query };
    case 'FINISH':
      //get all suggestions from the search and add an id to each one
      const mergedSuggestions = searchAction.results.map((suggestion) => {
        return { ...suggestion, key: suggestion._id };
      });
      return { ...currState, loading: false, results: mergedSuggestions };
    case 'UPDATE':
      return { ...currState, value: searchAction.selection };

    default:
      throw new Error();
  }
}

export default function Header({user}) {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('');
  // reducer and search states for search bar
  const [searchState, searchDispatch] = useReducer(searchReducer, searchInit);
  const { loading, results, value } = searchState;

  //state holding the path to the clicked search item
  const [searchPath, setSearchPath] = useState('');
  //listens to searchPath and navigates to the path when it changes
  useEffect(() => {
    if (searchPath.length > 2) {
      const path = searchPath;
      setSearchPath('');
      navigate(path);
    }
  }, [searchPath]);

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

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        searchDispatch({ type: 'CLEAN' });
        return;
      }

      const regularExpression = new RegExp(_.escapeRegExp(data.value), 'i');
      const doItMatch = (query) => regularExpression.test(query.title);

      searchDispatch({
        type: 'FINISH',
        results: _.filter(searchData, doItMatch),
      });
    }, 300);
  }, []);

  // some timeout clearing
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  console.log(user);

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

          <Menu.Menu position="right">
            <Search
              loading={loading}
              placeholder="Search for an item..."
              onResultSelect={(event, data) => {
                event.preventDefault();
                event.stopPropagation();
                event.nativeEvent.stopImmediatePropagation();
                setSearchPath('/' + data.result._id);
                searchDispatch({
                  type: 'UPDATE',
                  selection: data.result.title,
                });
              }}
              onSearchChange={searchChangeHandler}
              results={results}
              value={value}

              //onclick will take you to the listing page
            />
          </Menu.Menu>

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
              active={activeItem === 'shopping cart'}
              as={Link}
              to="/cart"
              icon="shopping cart"
            ></Menu.Item>

            <Menu.Item
              name="sign-in"
              active={activeItem === 'sign-in'}
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
