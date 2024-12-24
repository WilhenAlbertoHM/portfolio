import React from "react";
import "./Picture.css";
import Picture from "./Picture.jsx";


const pictures = [
    {id: 1, image: "Gallery/hike.jpg"},
    {id: 2, image: "Gallery/towertoronto.jpg"},
    {id: 3, image: "Gallery/jfklib.jpg"},
    {id: 4, image: "Gallery/montreal.jpg"},
    {id: 5, image: "Gallery/umbday.jpg"},
    {id: 6, image: "Gallery/quincycenter.jpg"},
    {id: 7, image: "Gallery/isc.jpg"},
    {id: 8, image: "Gallery/uhall.jpg"},
    {id: 9, image: "Gallery/nightumb.jpg"},
]

const PictureList = () => {
    return (
        <div className="pictureList" id="gallery">
            <h1 className="pictureListTitle">
                Gallery <img className="pictureListTitleIcon" src="https://www.svgrepo.com/show/503863/camera.svg" />
            </h1>
            <div className="pictureListContainer">
                {pictures.map((picture) => {
                    return <Picture key={picture.id} image={picture.image} />;
                })}
            </div>
        </div>
    );
};

export default PictureList;