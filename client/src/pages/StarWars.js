import { useState, useEffect } from 'react';

function StarWars() {
  const [swData, setSWData] = useState([]);

  const grabData = () => {
    fetch('https://swapi.dev/api/people')
      .then(res => res.json())
      .then(data => {
        setSWData(data.results);
      });
  };

  useEffect(grabData, []);

  return (
    <div>
      <h3>Starwars Data</h3>
      {swData.map((char, index) => {
        return <p key={index}>{char.name}</p>
      })}
    </div>
  )
}

export default StarWars;