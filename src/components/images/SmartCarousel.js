import { useState } from "react";
import Carousel from "react-elastic-carousel";
import MediaCard from "../Cards/MediaCard";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function SmartCarousel({images}) {
  return (
    <>
      <div className="App">
        <Carousel enableMouseSwipe enableSwipe breakPoints={breakPoints}>
                {images.map(image => (
                        <MediaCard image={image}></MediaCard>
                ))  
                }       
        </Carousel>
      </div>
    </>
  );
}