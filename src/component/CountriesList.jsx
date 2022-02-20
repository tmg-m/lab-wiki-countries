import { Link } from "react-router-dom";

function CountriesList({ country, name, flag, currentCountry, countryCode }) {

  const flagImg = `https://flagpedia.net/data/flags/icon/72x54/${flag.toLowerCase()}.png`;

  const thisCountry = () => {
    currentCountry(country)
  }

  return (
    <div>
      <Link to={`/${countryCode}`} onClick={thisCountry}>
        <div>
          <img src={flagImg}></img>
          <h1>{name}</h1>
        </div>
      </Link>
    </div>
  );
}

export default CountriesList;
