import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults"
import fetchData from "../utils/FetchApi";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if((event.key === 'Enter' || event.type === 'click') && query.length !== 0) {
      const res = fetchData(`t=${query}`)
      .then((response => response))
      setData(res)
      console.log(res)
      setShowResults(true)
      navigate(`/search/s=${query}`) 
    }
  } 

  return (
    <div className="search-bar">
      <input  
      type="text" 
      placeholder="search your favourites ..." 
      onChange={(event) => setQuery(event.target.value)}
      onKeyUp={searchQueryHandler}
      />
      <button
      type="submit"
      id="search-btn"
      onClick={searchQueryHandler}
      >
        Search
      </button>
      {showResults && <SearchResults data={data} />}
    </div>
  );
};

export default SearchBar;
