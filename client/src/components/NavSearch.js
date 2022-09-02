import { useQuery } from '@apollo/client';
import { GET_LISTINGS } from '../utils/queries';
import { Search, Menu } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import { useReducer, useEffect, useState, useRef, useCallback } from 'react';
import _ from 'lodash';
import exampleSearchData from './DISCARD/testingSearch.json';

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

export default function NavSearch() {
  const navigate = useNavigate();
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

  return (
    <>
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

      {/* IDEA: Currency conversion */}
    </>
  );
}
