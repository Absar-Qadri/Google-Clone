import { Link } from "react-router-dom";
import { useResult } from "../contexts/ResultsContext";

function SearchResultsWebsites() {
  const { searchResult } = useResult();

  if (
    !searchResult ||
    !searchResult.items ||
    !Array.isArray(searchResult.items)
  ) {
    return;
  }
  return (
    <ul className="px-20 ">
      {searchResult.items.map((searchItem, index) => (
        <li key={index} className="mt-6">
          <p className="text-blue-500 text-sm">{searchItem.displayLink}</p>
          <Link to={searchItem.formattedUrl}>
            <p className="text-xl text-indigo-700">{searchItem.title}</p>
          </Link>
          {searchItem.snippet ? (
            <p className="text-sm text-gray-500" style={{ width: "600px" }}>
              {searchItem.snippet}
            </p>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
}

export default SearchResultsWebsites;
