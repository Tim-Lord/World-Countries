import React from 'react';

import { useModal } from '../../context/modal';

const Country = ({country}) => {

    const { setShow, setCountry} = useModal();

    const handleClick = () => {
        setCountry(() => country);
        setShow((state) => !state)
    }


    return (
        <>
        <div className= 'Card'
            onClick= {handleClick}
        >
            <div className= 'flag'>
                <img src= {country.flag} alt= 'flag' />
            </div>
            <div className= 'country-details'>
                <h1 className= 'country-name'> { country.name } </h1>
                <p><strong>Population</strong> : { country.population } </p>
                <p><strong>Region</strong>     : { country.region } </p>
                <p><strong>Capital</strong>    : { country.capital } </p>
            </div>
        </div>
        </>
    )
}

export {Country}