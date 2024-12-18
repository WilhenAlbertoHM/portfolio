import React from "react";
import "./Picture.css";

const Picture = ({ image, description }) => {
    return (
        <div className="pictureCard">
            <div className="pictureCardImage" style={{ backgroundImage: `url(${ image })` }}></div>
            <div className="pictureCardDescription">
                <p>{ description }</p>
            </div>
        </div>
    );
}

export default Picture;