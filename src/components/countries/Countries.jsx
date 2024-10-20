import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'

export default function Countries() {

  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [flags, setFlags] =useState([]);

  const handleVisitedCountry=(country)=>{
    const newVisitedCountry =[...visitedCountries, country]
    setVisitedCountries(newVisitedCountry);
  }


  const handleFlagBtn=(country)=>{
    const newFlags =[...flags, country]
    setFlags(newFlags);
  }


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h3>Country : {countries.length}</h3>
      <div>
        <h4>Visited Countries : {visitedCountries.length}</h4>
        <ul>
            {
                visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
            }
        </ul>
      </div>
      <div>
        <h4>Flags</h4>
        {
            flags.map(f => (
                <img style={{height : '80px'}} key={f.cca3} src={f.flags.png} alt={`${f.name} flag`} />
            ))
            
        }
      </div>
      <div className="countries-container">
        {countries.map((country) => (
          <Country key={country.cca3}
          handleVisitedCountry={handleVisitedCountry}
          handleFlagBtn={handleFlagBtn}
          country={country}></Country>
        ))}
      </div>
    </div>
  );
}
