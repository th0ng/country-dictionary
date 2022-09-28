import {useState} from 'react';
import Weather from './Weather';

const CountryForm = ({country}) => {
    const [isShowed, setShowed] = useState(false);
    const Detail = ({country}) => {
      return (
        <div>
            <img src={country.flags.svg} alt="not found" />
            <p><b>Region</b> {country.region}</p>
            <p><b>Capital</b> {country.capital}</p>
            <p><b>Area</b> {country.area}</p>
            <p><b>Language:</b></p>
            <ul>
                {country.languages.map(language => <li>{language.name}</li>)}
            </ul>
            <Weather capital={country.capital}/>
            <button onClick={() => setShowed(!isShowed)}>Collapse</button>
        </div>
      )
  }
    return (
      <div>
        <h4>{country.name}</h4>
        <div>
          {!isShowed ? <button onClick={() => setShowed(!isShowed)}>Detail</button> : <Detail country={country} />}
        </div>
      </div>
    )
  }

export default CountryForm;