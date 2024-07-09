import './Logout.css';
import {ReactComponent as Exit} from "../images/exit.svg";
import React from "react";

export const Logout =({setIsLoggedIn})=>{
    const  logout= ()=> setIsLoggedIn(false)
    return (
        <section className="logout">
            <button onClick={logout}>
               <Exit/>
                <span>Logout</span>
            </button>
        </section>
    );
};