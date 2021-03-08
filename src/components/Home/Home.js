import React from 'react';
import  { useState, useEffect } from 'react';
import Countrys from './Countrys/Countrys';
const Home = () => {
    const [countrys, setCountrys] = useState([]);
    useEffect(() => {
        
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountrys(data))
      }, [])
    return (
        <div>
             <h1>No of countrys: {countrys.length}</h1>
             {
                 countrys.map(country =><Countrys  country={country}></Countrys>)
             }
        </div>
    );
};

export default Home;