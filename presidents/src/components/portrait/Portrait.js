import React from 'react';
import './Portrait.css';

function Portrait({ data, onGoBack }) {
  return (
    <div className="portraitContainer">
      <h1>{data.name}</h1>
      <img 
        className="portraitImage" 
        src={data.image} alt={data.name}/>
        
      <p>Years of Presidency: {data.yearsOfPresidency}</p>
      <p>Hometown: {data.hometown}</p>
      <p>University: {data.university}</p>
      <p>Date: {data.date}</p>
      <p>Political Party: {data.politicalParty}</p>
      <p>Favorite Artist: {data.favoriteArtist}</p>
      <p>Influences: {data.influences}</p>
      <p>Famous Quotes: {data.quotes}</p>
      <button onClick={onGoBack}>Back to Gallery</button>
    </div>
  );
}

export default Portrait;
