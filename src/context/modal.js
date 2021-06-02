import {createContext, useContext, useState} from 'react';

const Modal = createContext();

export const useModal = () => useContext(Modal);

const ModalProvider = ({children}) => {

    const [show, setShow] = useState(false);

    const [country, setCountry] = useState(null);

    return (
        <Modal.Provider value= {{
            show,
            country,
            setShow,
            setCountry
        }}>
            {children}
        </Modal.Provider>
    )
}

export {ModalProvider}
