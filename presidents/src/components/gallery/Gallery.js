import React from 'react';
import './Gallery.css';
import peopleData from '../../data/PresidentData'

const images = [
    { alt: 'John Adams',        src: '../images/john-adams.jpeg'},
    { alt: 'Chester Arthur',    src: '../images/chester-arthur.jpeg' },
    { alt: 'Unidentified Man',   src: '../images/unidentified-man.jpeg'},
    { alt: 'John Tyler',        src: '../images/john-tyler.jpeg'},
    { alt: 'Andrew Johnson',    src: '../images/andrew-johnson.jpeg' },
    { alt: 'Lydon Johnson',     src: '../images/lydon-johnson.jpeg'},
    { alt: 'John Quincy Adams', src: '../images/john-quincy-adams.jpeg'},
    { alt: 'George W. Bush',    src: '../images/george-w-bush.jpeg' },
    { alt: 'Gerald Ford',       src: '../images/gerald-ford.jpeg'},
    { alt: 'George Bush',       src: '../images/george-bush.jpeg'},
    { alt: 'Richard Nixon',     src: '../images/richard-nixon.jpeg'},
    { alt: 'Theodore Rosevolt',  src: '../images/theodore-rosevolt.jpeg'},
    { alt: 'Harry S. Thurman',  src: '../images/harry-thurman.jpeg'}
];

function Gallery({ onSelect }) {
  const handleImageClick = (altText) => {
      const presidentData = peopleData.find(president => president.name === altText);
      if (presidentData) {
          onSelect(presidentData);
      }
  };

  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div  key={index} 
              className="gallery-image-card" 
              onClick={() => handleImageClick(image.alt)}
        >
          <img  src={image.src} 
                alt={image.alt} 
                className="gallery-image" 
          />
          <p  className="gallery-label">
              {image.alt}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
