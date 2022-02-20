import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import CountriesList from './component/CountriesList';
import Navbar from './component/Navbar';
import countriesDb from './countries.json';
import './component/country.css'

function App() {
  const [allCountries, setCountries] = useState(countriesDb);
 /*  
  const [country, setCountry] = useState({})

  const thisCountry = (country) => {
    setCountry(country)
  }
 */
  return (
    <div>
      <nav class="nav">
        <Navbar />
      </nav>
      <div class="countrySection">
        <div class="eachCountry">
          {allCountries.map((country, i) => {
            return (
              <div class="country">
                  <CountriesList
                    key={i}
                    country={country}
                    name={country.name.common}
                    flag={country.alpha2Code}
                    countryCode={country.alpha3Code}
                    //currentCountry={thisCountry}
                  />
              </div>
            );
          })}
        </div>
        <section class="section">
          <Outlet /* quiria pasar el estado como prop pero no puedo */ />
        </section>
      </div>
    </div>
  );
}

export default App;
