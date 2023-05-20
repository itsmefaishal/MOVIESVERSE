function navbar(props)  {
    return (
        <div className="navbar">
          <div className="icon">
            <img src="moviesverse.png" alt="hero-icon"  />
            <p>MoviesVerse</p>
          </div>
          <label className="switch">
            <input type="checkbox"  onClick={props.onClick}/>
            <span className="slider"></span>
          </label>
        </div>
    );
  }
  
  export default navbar;