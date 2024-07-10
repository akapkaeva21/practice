import React from "react";
import search from "../images/search.svg";
import './Form.css'

export const Form =()=>{
    return (
        <form className="search">
            <input type="text" placeholder="Search"/>
            <img src={search} alt="Search"/>
        </form>
    );
};