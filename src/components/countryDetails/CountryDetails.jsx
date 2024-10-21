import CountryData from "../countryData/CountryData";


export default function CountryDetails(props) {
    // const {country, handleFlagBtn, handleVisitedCountries} = props
  return (
    <div>
        <h4>Country Details</h4>
        {/* <CountryData country={country} handleFlagBtn={handleFlagBtn} handleVisitedCountries={handleVisitedCountries}></CountryData> */}
        <CountryData {...props}></CountryData>
    </div>
  )
}
