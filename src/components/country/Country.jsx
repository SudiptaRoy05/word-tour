
export default function Country({country}) {
    const {name} = country;
    console.log(country);
  return (
    <div>Name : {name.common}</div>
  )
}
