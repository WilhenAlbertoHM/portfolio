import React from "react";
import "./Picture.css";

const Picture = ({ image }) => {
    return (
        <div className="pictureCard">
            <div className="pictureCardImage" 
                style={{ backgroundImage: `url(${ image })` }}>
            </div>
        </div>
    );
}

export default Picture;