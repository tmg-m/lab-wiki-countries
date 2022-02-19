import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import CountriesList from './component/CountriesList';
import Navbar from './component/Navbar';
import countriesDb from './countries.json';

function App() {
  const [allCountries, setCountries] = useState(countriesDb);

  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <section>
        <div>
          {allCountries.map((country, i) => {
            return (
              <CountriesList
                key={i}
                country={country}
                name={country.name.common}
              />
            );
          })}
        </div>
        <Outlet />
      </section>
    </div>
  );
}

export default App;

/* 
    <div>
      <nav>
        <Navbar />
        <Link to="/countryList">List</Link>
        <br></br>
        <Link to="/countryDetails">Detail</Link>
      </nav>
      <Outlet />
    </div>
*/
