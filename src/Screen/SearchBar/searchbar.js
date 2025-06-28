import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import './searchbar.css';

const SearchBar = () => {
    return (
    <div className="searchbar-container">
        <input
            className="searchbar-input" 
            type="text" 
            placeholder="Search for products, brands and more" 
        />
        <button className="searchbar-btn">
            <SearchIcon />
        </button>
    </div>
    );
};
export default SearchBar;