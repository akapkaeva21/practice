import React, {useState} from "react";
import './Posts.css';
import imagepost from "../images/image.png";
import {ReactComponent as HeartIcon} from "../images/like.svg";
import {posts} from "./const";

export const Post =({title, description, liked=false, image=imagepost})=>{
    const [isLiked, setIsLiked]=useState(liked);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const customFilling=isLiked ? '#d74f4f':'olive';
    const like=()=>setIsLiked(!isLiked);

    const handleToggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="post">
            <img src={image} alt="Post"/>
            <h2>{title}</h2>
            {showFullDescription ? (
                <p>{description}</p>
            ) : (
                <p>{description.length > 75 ? `${description.slice(0, 76)} ...` : description}</p>
            )}
            {description.length > 75 && (
                <button onClick={handleToggleDescription} className="buttonMore">
                    {showFullDescription ? 'Less' : 'More'}
                </button>
            )}
            <button onClick={like} className="buttonLike">
                <HeartIcon fill={customFilling}/>
            </button>
        </div>
    );
};
