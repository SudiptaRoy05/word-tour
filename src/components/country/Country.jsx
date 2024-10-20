import { useState } from "react";
import "./country.css";

export default function Country({ country, handleVisitedCountry }) {
  const { name, flags, area, population, cca3} = country;

  const [visited, setVisited] = useState([]);

  const handleVisitBtn =()=>{
    setVisited(!visited);
  }


  return (
    <div>
      <div style={{color: visited? 'tomato' : 'wheat'}} className={`country ${visited ? 'visited' : 'non-visited'}`}>
        <h3>Name : {name?.common}</h3>
        <img className="w" src={flags?.png} alt="" />
        <p>Area : <small>{area}</small></p>
        <p>Population : {population}</p>
        <p><small>Code : {cca3}</small></p>
      <button onClick={handleVisitBtn}>{visited? 'Visited':'Going'}</button>
      <br />
      {
        visited ? "I have visited": "I want to visit"
      }
      <br />
      <button onClick={()=>{handleVisitedCountry(country)}}>Mark Visit</button>
      </div>
    </div>
  );
}
