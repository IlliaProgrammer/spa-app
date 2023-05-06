import React from "react";
import './photos.css'

const Phototemp = ( {photos} ) => {
    return (
      <div className="photo-grid">
        {[...Array(6)].map((img, i) => (
          <div className="photo-grid__item" key={`column-${i}`}>
            {[...Array(4)].map((img, j) => (
              <img
                className="photo-grid__img"
                key={`photo-${i}-${j}`}
                src={photos[i * 4 + j]}
                alt={`Photo ${i * 4 + j + 1}`}
              />
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default Phototemp;