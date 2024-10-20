import "./country.css";

export default function Country({ country }) {
  const { name, flags, area,population } = country;
  console.log(country);
  return (
    <div>
      <div className="country-container">
        <h3>Name : {name?.common}</h3>
        <img src={flags?.png} alt="" />
        <p>Area : <small>{area}</small></p>
        <p>Population : {population}</p>
      <button>Visit</button>
      <button>Mark Visit</button>
      </div>
    </div>
  );
}
