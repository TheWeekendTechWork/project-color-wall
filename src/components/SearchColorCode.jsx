import { useState } from "react";
import PropTypes from "prop-types";

const SearchColorCode = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search color code..."
                className="search-input"
            />
            <div className="search-buttons">
                <button onClick={handleSearch} className="search-button">
                    Search
                </button>
            </div>
        </div>
    );
};
SearchColorCode.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export { SearchColorCode };
