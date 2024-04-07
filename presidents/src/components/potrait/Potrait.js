import React from 'react';
import peopleData from '../../data/PresidentData'


function Portrait({onGoBack }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{peopleData.name}</h1>
      <img 
        src={peopleData[0].image} 
        alt={peopleData[0].name} 
        style={{ width: '300px', height: '300px', objectFit: 'contain' }} 
      />
      <p>Years of Presidency: {peopleData[0].yearsOfPresidency}</p>
      <p>Hometown: {peopleData[0].hometown}</p>
      <p>University: {peopleData[0].university}</p>
      <p>Date: {peopleData[0].date}</p>
      <p>Political Party: {peopleData[0].politicalParty}</p>
      <p>Favorite Artist: {peopleData[0].favoriteArtist}</p>
      <p>Influences: {peopleData[0].influences}</p>
      <p>Famous Quotes: {peopleData[0].quotes}</p>
      <button onClick={onGoBack}>Back to Gallery</button>
    </div>
  );
}

export default Portrait;
