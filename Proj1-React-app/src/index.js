import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Exemplo01 from './components/Exemplo01';
import "bootstrap/dist/css/bootstrap.min.css"; 

const root = ReactDOM.createRoot (document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App PrimeiroNome ="Lunara" SegundoNome="Cunha" ></App> 
        
    </React.StrictMode>

)


