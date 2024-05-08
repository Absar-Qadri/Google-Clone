import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useResult } from "../contexts/ResultsContext";
import Search from "../components/Search";
import SearchHeader from "../components/SearchHeader";
import SearchResultsWebsites from "../components/SearchResultsWebsites";

function SearchResult() {
  const navigate = useNavigate();

  const { searchedTerm } = useResult();

  useEffect(
    function () {
      if (searchedTerm === null) {
        navigate("/");
      }
    },
    [navigate, searchedTerm]
  );

  return (
    <>
      <div className="flex items-center">
        <Link to={"/"}>
          <img
            className="w-32"
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
            alt="Google-logo"
          />
        </Link>
        <div className="-mt-14 ml-10">
          <Search />
        </div>
      </div>
      <SearchHeader />

      <SearchResultsWebsites />
    </>
  );
}

export default SearchResult;
