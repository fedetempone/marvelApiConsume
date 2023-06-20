import Navbar from './components/Navbar'
import React, { useState, useEffect } from 'react'
import Personajes from './components/Personajes';
import videoImage from './video/drstrange.mp4'
import marvelImage from './img/bannerMarvel.jpg'
import introMarvel from './video/introMarvel.mp4'
import previewVideo from './img/characters.jpg'



function App() {
  const [personajes , setPersonajes ] = useState([]);

  const apiUrl = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f009a46766ceae1607c6da9b8f3191f0&hash=01d6dd4f03e59618b8d77417ad9eb118";

  const fetchHero = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setPersonajes(data.data.results))
    .catch(error => console.log('tenes error al traer la api'))
  };

  useEffect(() => {
    fetchHero(apiUrl);
  }, [])

  return (
    <>
      
      <Navbar  title="MARVEL - CONSUME API"/>
      <video autoPlay controls className='introMarvel' poster={previewVideo}>
          <source src={introMarvel} type='video/mp4'/>
      </video>
      <div className='banner'>
        <img src={marvelImage} alt="personajes de marvel" />
      </div>
      <div className="container py-5 father">
        <video autoPlay muted loop  className='strangeVideo' style={{display: "none"}}>
          <source src={videoImage} type='video/mp4'/>
        </video>
        <Personajes personajes={personajes}/>
      </div>
    </>
  );
}

export default App;



// apiURLMARVEL = https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f009a46766ceae1607c6da9b8f3191f0&hash=01d6dd4f03e59618b8d77417ad9eb118