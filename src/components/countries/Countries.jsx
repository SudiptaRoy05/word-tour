import { useEffect } from "react"
import { useState } from "react"

export default function Countries() {
    const [countries, setCountries] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])


  return (
    <div>
        <h3>Country : {countries.length}</h3>
    </div>
  )
}
