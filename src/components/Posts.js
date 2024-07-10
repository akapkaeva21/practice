import React from "react";
import {Form} from "./Form";
import './Posts.css';
import {Post} from "./Post";
import post1 from "../images/1.jpg";
import post2 from "../images/2.jpg";
import post3 from "../images/3.jpg";

export const Posts =()=>{
    return (
        <div className="posts">
            <section className="postsHeader">
                 <h1>Posts</h1>
                 <Form/>
            </section>
            <section className="postsPage">
                <Post
                    title="Cipolucho"
                    description="Cipolucho is a family-run Italian restaurant located in a restaurant complex, and uses vegetables and herbs from its own rooftop greenhouse to prepare its dishes"
                    image={post1}

                />
                <Post
                    title="Mushmula"
                    description="The chefs of 'Mushmula' have honed their culinary skills for years in Georgian restaurants and thoroughly know the intricacies of the national culinary art!"
                    image={post2}

                />
                <Post
                    title="Percini"
                    description="Percini is an atmospheric Italian restaurant for the whole family. A business lunch, a meeting with friends or a family dinner – the cozy interiors of the restaurant are suitable for any occasion. Percini's cuisine combines traditional recipes, modern gastronomic trends, signature dishes based on Italian classics and popular Italian hits"
                    image={post3}
                />
                <Post
                    title="Post 4"
                    description="Cipolucho is a family-run Italian restaurant located in a restaurant complex, and uses vegetables and herbs from its own rooftop greenhouse to prepare its dishes"
                />
                <Post
                    title="Post 5"
                    description="Cipolucho is a family-run Italian restaurant located in a restaurant complex, and uses vegetables and herbs from its own rooftop greenhouse to prepare its dishes"
                />
                <Post
                    title="Post 6"
                    description="Cipolucho is a family-run Italian restaurant located in a restaurant complex, and uses vegetables and herbs from its own rooftop greenhouse to prepare its dishes"
                />
            </section>
        </div>
    );
};