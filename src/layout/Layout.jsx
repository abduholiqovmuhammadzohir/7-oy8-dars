import React from 'react'
import { Link } from "react-router-dom"
import { IoSearchSharp } from "react-icons/io5";
import "./index.css"
import logo from "../assets/Movie.svg"
import shape from "../assets/Shape.png"
import shape1 from "../assets/Shape-1.png"
import tv from "../assets/tv.png"
import book from "../assets/Bookmark.png"
import user from "../assets/Oval.png"
import search from "../assets/search.svg"


function Layout({ children }) {
    return (
        <div className="layout-wrapper">
            <div className="sidebar">
                <div className="menus">
                    <Link to="/">
                        <img className="logo" src={logo} alt="Logo" />
                    </Link>
                    <Link to="/">
                        <img src={shape} alt="Logo" />
                    </Link>
                    <Link to="/movies">
                        <img src={shape1} alt="Logo" />
                    </Link>
                    <Link to="/series">
                        <img src={tv} alt="Logo" />
                    </Link>
                    <Link to="/bookmarks">
                        <img src={book} alt="Logo" />
                    </Link>
                </div>
                <div className="user">
                    <img src={user} alt="Logo" />
                </div>
            </div>

            <div className="main">
                <header>
                    <img src={search} alt="" />
                    <input type="text" placeholder="Search for movies or TV series" />
                </header>

                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout