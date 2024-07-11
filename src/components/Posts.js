import React from "react";
import {Form} from "./Form";
import './Posts.css';
import {Post} from "./Post";
import {posts} from "./const";

export const Posts =()=>{
    return (
        <div className="posts">
            <section className="postsHeader">
                 <h1>Posts</h1>
                 <Form/>
            </section>
            <section className="postsPage">
                {
                    posts.map((post)=>{
                        return(
                            <Post
                                title={post.title}
                                description={post.description}
                                liked={post.liked}
                                image={post.image}
                            />)
                    })
                }
            </section>
        </div>
    );
};