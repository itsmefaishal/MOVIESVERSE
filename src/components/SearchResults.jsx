// import PropTypes from 'prop-types';

const SearchResults = ({data}) => {
// console.log(data)
    return (
      <>
      {
        data &&
        <div className="search-results">
          search results 
        </div> 
        }
      </>
    )
  }

  export default SearchResults;

// SearchResults.propTypes = {
//   data : PropTypes.array
// }