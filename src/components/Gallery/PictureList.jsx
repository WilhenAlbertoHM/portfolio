import React from "react";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
        <div>
            <h1 className="pictureListTitle">
                Gallery <img className="pictureListTitleIcon" src="https://www.svgrepo.com/show/503863/camera.svg" />
            </h1>
            <ImageList variant="masonry" cols={3} gap={8}>
            {pictures.map((item) => (
                <ImageListItem key={item.image}>
                <img
                    srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.image}?w=248&fit=crop&auto=format`}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
            </ImageList>
        </div>
    );
};

export default PictureList;