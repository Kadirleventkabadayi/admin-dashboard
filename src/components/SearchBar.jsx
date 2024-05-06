import React, { useState } from "react";
import "./styles/searchBar.css";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState(""); // Arama sorgusu için state tanımlayın

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value); // Input değişikliklerini state'e kaydedin
  };

  return (
    <div className="search-bar">
      <form
        className="search-form d-flex align-items-center"
        method="POST"
        action="#"
      >
        <input
          type="text"
          name="query"
          placeholder="Search"
          title="Enter search keyword"
          value={searchQuery} // Input değerini state'ten alın
          onChange={handleInputChange}
        />
        <Link to={searchQuery} className="search-link">
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
