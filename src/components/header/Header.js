import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <Link to="/">
                    <div
                        className="header-logo"
                    />
                    <div className="header-title">
                    Enjoy best movies
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;