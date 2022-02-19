import { Link, Outlet } from 'react-router-dom';

function CountriesList({ country, name }) {
  return (
    <>
      <Link to="/countryDetails" country={country}>
        <div>
          <h1>{name}</h1>
        </div>
      </Link>
    </>
  );
}

export default CountriesList;
