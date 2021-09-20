import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (
        <div>
        <h1 className="text-danger mt-3">Country Details List</h1>
        <h2 className="text-primary mt-1">Total Number of Countries: {countries.length}</h2>
        <div className="countries-container container mt-5">
            {
                countries.map(country => <Country
                    key={country.capital}
                    country={country}
                ></Country>)
            }
        </div>
    </div>
    );
};

export default Countries;