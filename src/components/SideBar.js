import './SideBar.css'
import {User} from "./User";
import {Navigation} from "./Navigation";
import exit from "../images/exit.png";
import React from "react";
import {Logout} from "./Logout";
export const SideBar=()=>{
    return (
        <main>
            <aside className="sidebar">
                <section className="sidebarTop">
                    <User/>
                    <Navigation/>
                </section>

                <Logout/>
            </aside>
        </main>
    )
}