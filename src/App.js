import { useState, useEffect } from 'react';
import axios from 'axios';

import CountryForm from './CountryForm';

const App = () => {
  const [countrys, setCountrys] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const hook = () => {
    console.log('effect');
    axios
      .get('https://restcountries.com/v2/all')
      .then(response => {
        console.log('promise fulfilled');
        setCountrys(response.data);
        setFiltered(response.data);
      })
  }

  useEffect(hook, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const value = event.target.value.toLowerCase();
    const filteredList = countrys.filter(country => country.name.toLowerCase().includes(value));
    setFiltered(filteredList);
  }

  return (
    <>
    <div>
      <input type='text' placeholder='Search' onChange={handleSearch} />
    </div>
    <div>
        {filtered.map(country =><CountryForm country={country}/>)}
    </div>
    </>
    
  )
}

export default App;