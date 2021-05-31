import React, {createContext, useContext, useState, useEffect} from 'react';

import axios from 'axios';

const World = createContext();

export const useWorld = () => useContext(World);

const WorldProvider = ({children}) => {

    const [data, setData] = useState({});

    const fetchData = async () => {
        let res = await axios.get('https://restcountries.eu/rest/v2/all')
        setData(res.data);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <World.Provider 
            value = {{
                data
            }}
        >
            {children}
        </World.Provider>
    )
}

export { WorldProvider }