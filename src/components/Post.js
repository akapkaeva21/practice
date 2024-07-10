import React, {useState} from "react";
import './Posts.css';
import imagepost from "../images/image.png";
import {ReactComponent as HeartIcon} from "../images/like.svg";

export const Post =({title, description, liked=false, image=imagepost})=>{
    const [isLiked, setIsLiked]=useState(liked);

    const customFilling=isLiked ? '#d74f4f':'olive';
    const like=()=>setIsLiked(!isLiked);
    const finalDescription=(
        <p>{
            description.length > 75 ? (
                <>{description.slice(0, 76)}...
                <a href="/">More</a>
                </>
            ) :description
        }</p>
    );

    return (
        <div className="post">
            <img src={image} alt="Post"/>
            <h2>{title}</h2>
            {finalDescription}
            <button onClick={like} className="buttonLike">
                <HeartIcon fill={customFilling}/>
            </button>

        </div>
    );
};