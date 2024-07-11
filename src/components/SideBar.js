import './SideBar.css'
import {User} from "./User";
import {Navigation} from "./Navigation";
import React, {useState} from "react";
import {Logout} from "./Logout";
import {posts} from "./const";
import {Posts} from "./Posts";
import Favorite from "./Favorite";

export const SideBar=({setIsLoggedIn})=>{

    const [likedPosts, setLikedPosts] = useState([]);
    const [showLikedPosts, setShowLikedPosts] = useState(false); // добавляем состояние для отображения только лайкнутых постов


    const handleLike = (postId) => {
        if (likedPosts.includes(postId)) {
            setLikedPosts(likedPosts.filter(id => id !== postId));
        } else {
            setLikedPosts([...likedPosts, postId]);
        }
    };

    const handleShowLikedPosts = () => {
        setShowLikedPosts(!showLikedPosts);
    };
    return (
        <main>
            <aside className="sidebar">
                <section className="sidebarTop">
                    <User/>
                    <Navigation likedPosts={likedPosts} />

                </section>

                <Logout setIsLoggedIn={setIsLoggedIn}/>
            </aside>
        </main>
    )
}