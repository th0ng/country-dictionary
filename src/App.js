import { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';

import CountryForm from './CountryForm';


import { Form, Navbar, Container} from 'react-bootstrap';

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
    <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand>Country Dictionary</Navbar.Brand>
        </Container>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleSearch}
            />
        </Form>
    </Navbar>
  
    {filtered.map(country =><CountryForm country={country}/>)}
  
    </>
    
  )
}

export default App;