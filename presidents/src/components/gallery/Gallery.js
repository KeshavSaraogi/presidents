import React from 'react';
import './Gallery.css';

const images = [
    { alt: 'John Adams',        src: '../images/john-adams.jpeg'},
    { alt: 'Chester Arthur',    src: '../images/chester-arthur.jpeg' },
    { alt: 'Unidentifed Man',   src: '../images/unidentified-man.jpeg'},
    { alt: 'John Tyler',        src: '../images/john-tyler.jpeg'},
    { alt: 'Andrew Johnson',    src: '../images/andrew-johnson.jpeg' },
    { alt: 'Lydon Johnson',     src: '../images/lydon-johnson.jpeg'},
    { alt: 'John Quincy Adams', src: '../images/john-quincy-adams.jpeg'},
    { alt: 'George W. Bush',    src: '../images/george-w-bush.jpeg' },
    { alt: 'Gerald Ford',       src: '../images/gerald-ford.jpeg'},
    { alt: 'George Bush',       src: '../images/george-bush.jpeg'},
    { alt: 'George Bush',       src: '../images/george-bush.jpeg'},
    { alt: 'Geral Ford',        src: '../images/gerald-ford.jpeg' },
    { alt: 'Richard Nixon',     src: '../images/richard-nixon.jpeg'},
    { alt: 'Thoedor Resovolt',  src: '../images/theodore-rosevolt.jpeg'},
    { alt: 'Harry S. Thurman',  src: '../images/harry-thurman.jpeg'}
];

function Gallery() {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-image-card">
          <img src={image.src} alt={image.alt} className="gallery-image" />
          <p className="gallery-label">{image.alt}</p>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
