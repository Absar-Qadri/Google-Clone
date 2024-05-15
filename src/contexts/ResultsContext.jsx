import { createContext, useContext, useEffect, useReducer } from "react";

const ResultsContext = createContext();

const API_KEY = "AIzaSyChU5p2aomxQyezHRRV3LWRuLIOtqXPRXs";
const ENGINE_ID = "871cd2b12a6154f2a";

// Debugging to check if environment variables are read correctly

const baseUrl = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}`;

const initialState = {
  searchedTerm: "",
  searchResult: [],
  accessoryOpen: false,
};

// Action types
const DATA_RECEIVED = "dataRecieved";
const SEARCH = "search";
const TOGGLE_ACCESSORY = "accessory";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case DATA_RECEIVED:
      return { ...state, searchResult: action.payload };
    case SEARCH:
      return { ...state, searchedTerm: action.payload };
    case TOGGLE_ACCESSORY:
      return { ...state, accessoryOpen: !state.accessoryOpen };
    default:
      throw new Error("Unknown action");
  }
}

// Provider component
function ResultsProvider({ children }) {
  const [{ searchedTerm, searchResult, accessoryOpen }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getSearch() {
      if (!searchedTerm) return;
      try {
        const res = await fetch(`${baseUrl}&q=${searchedTerm}`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        dispatch({ type: DATA_RECEIVED, payload: data });
      } catch (error) {
        console.error("Failed to fetch search results:", error);
      }
    }
    getSearch();
  }, [searchedTerm]);

  return (
    <ResultsContext.Provider
      value={{
        searchedTerm,
        searchResult,
        dispatch,
        accessoryOpen,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
}

// Custom hook
function useResult() {
  const context = useContext(ResultsContext);
  if (context === undefined) {
    throw new Error("useResult must be used within a ResultsProvider");
  }
  return context;
}

export { useResult, ResultsProvider };
