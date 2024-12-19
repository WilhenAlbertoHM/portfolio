import React from "react";
import "./Picture.css";
import Picture from "./Picture.jsx";


const pictures = [
    {id: 1, image: "https://via.placeholder.com/150"},
    {id: 2, image: "https://via.placeholder.com/150"},
    {id: 3, image: "https://via.placeholder.com/150"},
    {id: 4, image: "https://via.placeholder.com/150"},
    {id: 5, image: "https://via.placeholder.com/150"},
    {id: 6, image: "https://via.placeholder.com/150"},
]

const PictureList = () => {
    return (
        <div className="pictureList" id="gallery">
            <h1 className="pictureListTitle">Gallery</h1>
            {pictures.map((picture) => {
                return <Picture key={picture.id} image={picture.image} />;
            })}
        </div>
    );
};

export default PictureList;