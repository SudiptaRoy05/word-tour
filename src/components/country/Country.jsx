import "./country.css";

export default function Country({ country }) {
  const { name, flags } = country;
  console.log(country);
  return (
    <div>
      <div className="country-container">
        <h3>Name : {name.common}</h3>
        <img src={flags.png} alt="" />
      </div>
    </div>
  );
}
