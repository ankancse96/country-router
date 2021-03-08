import React from 'react';
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const CountryDetails = () => {
    let {countryName} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() =>{
        const url =  `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]));
    },[countryName])
    return (
        <div>
            <p>This is Country Detail Component: {countryName}</p>
            <h3>{country.name}</h3>
            <p> {country.capital}</p>
        </div>
    );
};

export default CountryDetails;