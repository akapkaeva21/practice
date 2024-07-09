import './SideBar.css';
import exit from "../images/exit.png";
import React from "react";

export const Logout =()=>{
    return (
        <section className="sidebarButton">
            <button>
                <img src={exit} alt="Logout"/>
                Exit
            </button>
        </section>

    )
}