import React from 'react';
import {posts} from "./const"
import {Post} from "./Post";

const Favorite = ({ likedPosts, allPosts }) => {
    allPosts=posts;
    const favoritePosts = allPosts.filter(post => likedPosts.includes(post.id));

    return (
        <div>
            <h2>Favorite</h2>
            {favoritePosts.map(post => (
                <div key={post.id}>
                    <Post
                        title={post.title}
                        description={post.description}
                        liked={post.liked}
                        image={post.image}
                    />
                </div>
            ))}
        </div>
    );
}

export default Favorite;