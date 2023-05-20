import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home';
import SearchResults from './components/SearchResults';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <BrowserRouter>
      <div id='app' className={darkMode ?  "dark-mode"  : "light-mode"} >
        <Navbar onClick={toggleDarkMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/:mediaType/:id' element={<Details/>} /> */}
          <Route path='/search/:query' element={<SearchResults  />} />
          {/* <Route path='/explore/:mediaType' element={<Explore/> } /> */}
          {/* <Route path='*' element={<Error />} /> */}
        </Routes>
      <Footer />  
      </div>
    </BrowserRouter>
  )
}

export default App
