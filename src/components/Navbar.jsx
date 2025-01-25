import { useState } from "react";

import { SearchColorCode } from "./SearchColorCode";
import PropTypes from "prop-types";

const Navbar = ({ onSearch, onReset }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">The Color Wall Project</div>
            <div className="search-container">
                <SearchColorCode onSearch={onSearch} />
                <button onClick={onReset} className="reset-button">
                    Reset
                </button>
            </div>
            <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
                <a href="#top" className="navbar-link">
                    Home
                </a>
                <a href="#about" className="navbar-link">
                    About
                </a>
                <a href="#contact" className="navbar-link">
                    Contact
                </a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    );
};
Navbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
};

export { Navbar };
