import React, { useState } from 'react';
import './App.css'
import Gallery from '../src/components/gallery/Gallery';
import Portrait from './components/portrait/Portrait';

function App() {
  const [selectedPresident, setSelectedPresident] = useState(null);

  const handleSelectPresident = (presidentData) => {
    setSelectedPresident(presidentData);
  };

  const handleGoBack = () => {
    setSelectedPresident(null);
  };

  return (
    <div>
      <h1>PRESIDENTS GALLERY</h1>
      {selectedPresident ? (
        <Portrait 
          data={selectedPresident} 
          onGoBack={handleGoBack}
        />
      ) : (
        <Gallery 
          onSelect={handleSelectPresident} 
        />
      )}
    </div>
  );
}

export default App;
