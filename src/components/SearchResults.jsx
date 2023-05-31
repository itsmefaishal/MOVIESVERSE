import PropTypes from 'prop-types';

const SearchResults = (results) => {
console.log(results)
    return (
      <>
      {
        results  && (
          <div className="search-results">
          search results 
         </div> 
        )
      }
      </>
    )
  }

export default SearchResults;

SearchResults.propTypes = {
  results : PropTypes.object
}