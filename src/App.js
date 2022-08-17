import "./App.css";
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";
import Key from "./Config.js";
import axios from "axios";
import { SearchForm } from "./components/searchForm";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState(
    "Dancing, Cars, Computers, Ferrari"
  );
  const [loadingData, setLoadingData] = useState(true);

  const searchQuery = (searchTerm) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Key}&tags=${searchTerm}&safe_search=1&content_type=1&media=photos&per_page=24&format=json&nojsoncallback=1`
      )
      .then((responseData) => {
        setImages(responseData.data.photos.photo);
        setSearchTerm(searchTerm);
        setLoadingData(false);
      });
  };

  useEffect(() => {
    searchQuery(searchTerm);
  }, []);

  return (
    <div className="container">
      <h1>Unit 7, Flickr Gallery App</h1>
      <Router>
        <SearchForm onSearch={searchQuery} />
        <nav className="main-nav">
          <Nav />
        </nav>

        <h2>Results for {searchTerm}</h2>

        <div className="photo-container">
          {loadingData ? (
            <h1>Loading Data...</h1>
          ) : (
            <Routes>
              <Route
                path="/:search"
                exact
                element={
                  <PhotoList data={images} performSearch={searchQuery} />
                }
              />
              <Route
                path="/"
                exact
                element={
                  <PhotoList data={images} performSearch={searchQuery} />
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;