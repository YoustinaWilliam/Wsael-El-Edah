import React from "react";
import "./Gallery.css"; // استدعاء CSS
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
    "i3.jpeg", "i4.jpeg", "i5.jpeg",
    "i6.jpeg", "i7.jpeg", "i8.jpeg", "i9.jpeg", "i10.jpeg",
    "i11.jpeg", "i12.jpeg", "i13.jpeg", "i14.jpeg", "i15.jpeg",
    "i16.jpeg", "i17.jpeg", "i18.jpeg", "i19.jpeg", "i20.jpeg",
    "i21.jpeg", "i22.jpeg", "i23.jpeg", "i24.jpeg", "i25.jpeg",
    "i26.jpeg"
];
  

const Gallery = () => {
  return (
    <div className="gallery-container d-flex justify-content-center align-items-center flex-wrap">
      {images.map((src, index) => (
        <div className="diamond" key={index}>
          <div className="inner">
            <img src={`images/${src}`} alt={`img-${index}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
