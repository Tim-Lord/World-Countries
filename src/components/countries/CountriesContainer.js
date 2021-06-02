import React, {useState} from 'react';
import './countries.css';

import { Country } from './Country';
import { Modal } from '../modal/Modal';

import { useWorld } from '../../context/world';

const CountriesContainer = () => {

    let { data } = useWorld();

    console.log(data)

    const [country, setCountry] = useState('');

    const handleCountry = (e) => setCountry(e.target.value);

    if(country){
        data = data.filter(item => item.name.includes(country))
    }

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    const options = regions.map((item, index) => 
            <option key={index}> {item} </option>);

    const [region, setRegion] = useState('All');

    const handleRegion = e => setRegion(e.target.value);

    if(region !== 'All'){
        data = data.filter(item => item.region === region)
    } 

    return (
        <>
        <div className= 'filter'>
            <div className= 'search'>
                <input 
                    type='search' 
                    placeholder='Search'
                    value= {country}
                    onChange= {handleCountry} 
                />
            </div>
            <div className= 'filter-select'>
                <label>Filter by Region</label>
                <select value= {region} onChange= {handleRegion}>
                    {options}
                </select>
            </div>
        </div>
        <div className= 'countries-container'>
            {
                data.map((country, index) => 
                    <Country key= {index} country= {country} />)
            }
        </div>
        <Modal />
        </>
    )
}

export default CountriesContainer