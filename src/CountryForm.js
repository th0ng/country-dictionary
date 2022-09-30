import {useState} from 'react';
import Weather from './Weather';
import { Card, Button } from 'react-bootstrap';

const CountryForm = ({country}) => {
    const [isShowed, setShowed] = useState(false);

    const Default = ({country}) => {
      return (
      <div class='country-card'>
        <Card>
      <Card.Img variant="top" src={country.flags.svg} style={{width: 150}}/>
      <Card.Body>
        <Card.Title>{country.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => setShowed(!isShowed)}>View</Button>
      </Card.Body>
      <Card.Footer>
          <small className="text-muted">Click view button for more detail</small>
        </Card.Footer>
      </Card>
      </div>
      )
    }

    const Detail = ({country}) => {
      return (
      <div>
        <Card>
      <Card.Img variant="top" src={country.flags.svg} style={{width: 150}} />
      <Card.Body>
        <Card.Title>{country.name}</Card.Title>
            <p><b>Region</b> {country.region}</p>
            <p><b>Capital</b> {country.capital}</p>
            <p><b>Area</b> {country.area}</p>
            <p><b>Language:</b></p>
            <ul>
                {country.languages.map(language => <li>{language.name}</li>)}
            </ul>
            <Weather capital={country.capital}/>
            <Button variant='primary' onClick={() => setShowed(!isShowed)}>Collapse</Button>
      </Card.Body>
      <Card.Footer>
          <small className="text-muted">Click view button for more detail</small>
        </Card.Footer>
      </Card>
      </div>
      
      )
  }
    return (
      <>
      {!isShowed ? <Default country={country} /> : <Detail country={country} />}
      </>
    )
  }

export default CountryForm;