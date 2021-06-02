import React from 'react';
import './modal.css';

import { useModal } from '../../context/modal';

const Modal = () => {

    const { show, country, setShow } = useModal();

    if(!show){
        return null
    }

    const handleClick = () => setShow(() => false);

    let currencies = country.currencies.map(item => <span> {item.name} </span>);
    let languages = country.languages.map(item => <span> {item.name} </span>);

    return (
        <div className= 'modal'>
            <div className= 'modal-container'>
                <button
                    onClick= {handleClick}
                > 
                    Back 
                </button>
                <div className= 'modal-country'>
                    {
                        country && (
                        <>
                        <div className= 'modal-country-flag'>
                            <img src= {country.flag} alt= {`${country.name} flag`} />
                        </div>
                        <div className= 'modal-country-details'>
                            <h2 className= 'country-name'> {country.name} </h2>
                            <div className= 'more-details'>
                                <div className= 'left'>
                                    <p>
                                        <strong>Native Name</strong> : {country.nativeName} 
                                    </p>
                                    <p>
                                        <strong>Population</strong> : {country.population} 
                                    </p>
                                    <p>
                                        <strong>Region</strong> : {country.region} 
                                    </p> 
                                    <p>
                                        <strong>Sub Region</strong> : {country.subregion} 
                                    </p>
                                    <p>
                                        <strong>Capital</strong> : {country.capital} 
                                    </p>
                                </div>
                                <div className= 'right'>
                                    <p>
                                        <strong>Top Level Domain</strong> : {country.topLevelDomain[0]} 
                                    </p>
                                    <p>
                                        <strong>Currencies</strong> : {currencies} 
                                    </p>
                                    <p>
                                        <strong>Languages</strong> : {languages} 
                                    </p>
                                </div>
                            </div>
                        </div>
                        </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export {Modal}