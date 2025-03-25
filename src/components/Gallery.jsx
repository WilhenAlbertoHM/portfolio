import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const pictures = [
  { id: 1, image: "Gallery/hike.jpg" },
  { id: 2, image: "Gallery/towertoronto.jpg" },
  { id: 3, image: "Gallery/jfklib.jpg" },
  { id: 4, image: "Gallery/montreal.jpg" },
  { id: 5, image: "Gallery/umbday.jpg" },
  { id: 6, image: "Gallery/quincycenter.jpg" },
  { id: 7, image: "Gallery/isc.jpg" },
  { id: 8, image: "Gallery/uhall.jpg" },
  { id: 9, image: "Gallery/nightumb.jpg" },
];

export const Gallery = () => {
  return (
    <section id="gallery">
      <h1 className="flex items-center justify-center text-3xl font-bold text-[var(--orange)] mb-6">
        Some Pics{" "}
        <img
          className="ml-2 w-12 h-12"
          src="https://www.svgrepo.com/show/503863/camera.svg"
        />
      </h1>
      <ImageList variant="masonry" cols={3} gap={8}>
        {pictures.map((item) => (
          <ImageListItem key={item.image}>
            <img
              srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={`${item.image}`}
              src={`${item.image}?w=248&fit=crop&auto=format`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
};
