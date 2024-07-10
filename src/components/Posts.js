import React from "react";
import {Form} from "./Form";
import './Posts.css';

export const Posts =()=>{
    return (
        <div className='posts'>
            <section className="postsHeader">
                 <h1>Posts</h1>
                 <Form/>
            </section>
        </div>
    );
};