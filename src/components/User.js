import React from 'react';
import './User.css';
import avatar from "../images/avatar.jpg";

export const User =()=>{
    return (
        <section className="user">
            <div className="avatar">
                <img src={avatar} alt="avatar"/>
            </div>
            <h3>Gelya</h3>
        </section>
    )
}