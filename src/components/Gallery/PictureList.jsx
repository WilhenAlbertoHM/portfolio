import React from "react";
import "./Picture.css";
import Picture from "./Picture.jsx";


const pictures = [
    {id: 1, image: "../../../public/Gallery/hike.jpg"},
    {id: 2, image: "../../../public/Gallery/towertoronto.jpg"},
    {id: 3, image: "../../../public/Gallery/jfklib.jpg"},
    {id: 4, image: "../../../public/Gallery/montreal.jpg"},
    {id: 5, image: "../../../public/Gallery/umbday.jpg"},
    {id: 6, image: "../../../public/Gallery/quincycenter.jpg"},
    {id: 7, image: "../../../public/Gallery/isc.jpg"},
    {id: 8, image: "../../../public/Gallery/uhall.jpg"},
    {id: 9, image: "../../../public/Gallery/nightumb.jpg"},
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