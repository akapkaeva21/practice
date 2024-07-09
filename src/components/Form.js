import React from "react";
import search from "../images/search.svg";

export const Form =()=>{
    return (
        <form>
            <input type="text" placeholder="Search"/>
            <img src={search} alt="Search"/>
        </form>
    );
};