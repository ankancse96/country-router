import React from 'react';
import { Link } from 'react-router-dom';

const Countrys = (props) => {
    const { name, capital,population} = props.country;
    const countryStyle = { 
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={countryStyle}>
            <h2>Name: {name}</h2>
            <p>Capital: {capital}</p>
            <p>Population:{population}</p>
            <Link to={`/name/${name}`}>
                Show details of: {name}
            </Link>
            
            
        </div>
    );
};

export default Countrys;