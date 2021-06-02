import './App.css';

import { Header, CountriesContainer } from './components';

import { WorldProvider } from './context/world';
import { ModalProvider } from './context/modal';

function App() {
  return (
    <WorldProvider>
      <ModalProvider>
        <Header />
        <CountriesContainer /> 
      </ModalProvider>
      
    </WorldProvider>
  );
}

export default App;
