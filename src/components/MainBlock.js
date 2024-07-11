import {SideBar} from "./SideBar";
import {Posts} from "./Posts";
import './MainBlock.css';
import Favorite from "./Favorite";
import {posts} from "./const";
import {useState} from "react";


export const MainBlock = ({setIsLoggedIn}) => {
    const [likedPosts, setLikedPosts] = useState([]);
    const [showLikedPosts, setShowLikedPosts] = useState(false);

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

    return(
        <>
            <SideBar setIsLoggedIn={setIsLoggedIn}/>
            <main className="main">
                {showLikedPosts ? (
                    <Favorite likedPosts={likedPosts} allPosts={posts} />
                ) : (
                    <Posts posts={posts} handleLike={handleLike} />
                )}
                <button onClick={handleShowLikedPosts}>
                    {showLikedPosts ? "Show All Posts" : "Show Liked Posts"}
                </button>
            </main>
        </>
    )
}