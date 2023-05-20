import PropTypes from 'prop-types';

const SearchResults = (props) => {
  // console.log(props.data)

    return (
      <div className="search-results">
        search results 
      </div>
    )
  }

  export default SearchResults;

SearchResults.propTypes = {
  data : PropTypes.string
}