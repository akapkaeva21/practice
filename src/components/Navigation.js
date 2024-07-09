import React from 'react';
import './Navigation.css';
import './SideBar.css'
import book from "../images/book.png";
import like from "../images/like.png";
import settings from "../images/settings.png";



export const Navigation =()=>{
    return (
        <section className="nav">
            <nav>
                <a href="/" className="active">
                    <img src={book} alt="Blog"/>
                    <span>Blog</span>
                </a>
                <a href="/">
                    <img src={like} alt="Favorites"/>
                    <span>Favorite</span>
                </a>
                <a href="/">
                    <img src={settings} alt="Settings"/>
                    <span>Settings</span>
                </a>
            </nav>
        </section>
    )
}