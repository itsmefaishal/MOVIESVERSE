import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults"
import fetchData from "../utils/FetchApi";


const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const searchQueryHandler = async (event) => {
    if((event.key === 'Enter' || event.type === 'click') && query.length !== 0) {
      try{
        const res = await fetchData(query);
        setShowResults(true)
        navigate(`/search/${query}`) 
        console.log(res)
        setData(res)
        return res
      }
      catch(error) {
        console.log(error)
        return error
      }
    }
  } 
 console.log(data)

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
      {showResults && <SearchResults />}
    </div>
  );
};

export default SearchBar;
