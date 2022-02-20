import { Link, useParams } from 'react-router-dom';
import countriesDb from '../countries.json'

function CountryDetails() {
  
  const { countryId } = useParams();
  const thisCountry = countriesDb.find((country) => {
    if (country.alpha3Code === countryId) {
      return country
    }
  })

  const borderCountry = thisCountry.borders.map((nation, i) => {
    let countryName = "";

    countriesDb.find((country) => {
      if (country.alpha3Code === nation) {
        countryName = country.name.common;
      }
    });
    console.log(countryName)
    return (<Link to={`/${nation}`}>
      <h2>{countryName}</h2>
    </Link>)
  }
  )

  return (
    <>
      <img src={`https://flagpedia.net/data/flags/icon/72x54/${thisCountry.alpha2Code.toLowerCase()}.png`}></img>
      <h1>{thisCountry.name.common}</h1>
      <h1> Capital: {thisCountry.capital}</h1>
      <h1> Area: {thisCountry.area}</h1>
      <h1>Borders</h1>
      {borderCountry}
    </>
  );
}

export default CountryDetails;