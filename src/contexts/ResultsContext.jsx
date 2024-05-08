import { createContext, useContext, useEffect, useReducer } from "react";

const ResultsContext = createContext();
const API_KEY = "AIzaSyChU5p2aomxQyezHRRV3LWRuLIOtqXPRXs";
const ENGINE_ID = "871cd2b12a6154f2a";
const baseUrl = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}`;

const initialState = {
  searchedTerm: "",
  searchResult: [],
  accessoryOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecieved":
      console.log(action.payload);

      return { ...state, searchResult: action.payload };
    case "search":
      return { ...state, searchedTerm: action.payload };

    case "accessory":
      return { ...state, accessoryOpen: !state.accessoryOpen };
    default:
      throw new Error("Unknown action");
  }
}

function ResultsProvider({ children }) {
  const [{ searchedTerm, searchResult, accessoryOpen }, dispatch] = useReducer(
    reducer,
    initialState
  );
  useEffect(
    function () {
      async function getSearch() {
        if (!searchedTerm) return;
        const res = await fetch(`${baseUrl}&q=${searchedTerm}`);
        const data = await res.json();
        dispatch({ type: "dataRecieved", payload: data });
      }
      getSearch();
    },
    [searchedTerm]
  );
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

function useResult() {
  const context = useContext(ResultsContext);
  if (context === undefined) throw new Error("Context used in wrong place");
  return context;
}

export { useResult, ResultsProvider };
