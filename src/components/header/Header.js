import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="rmdb-header">
            <div className="rmdb-header-content">
                <Link to="/">
                    <div
                        className="rmdb-logo"
                    />
                    <div className="title">
                    Enjoy best movies
                    </div>
                </Link>
                <div
                    className="rmdb-tmdb-logo"
                />
            </div>
        </div>
    );
}

export default Header;