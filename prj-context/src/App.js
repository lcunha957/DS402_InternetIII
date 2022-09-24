import { useState } from 'react';
import './App.css'; 
import Componente1 from './Componente1';
import Componente2 from './Componente2'; 
import { myContext } from './context/myContext';

function App() {
   const [nome, setNome] = useState('Valor inicial'); 
   
   return ( 
   <div className="App"> 
   <h1>Exemplo useContext()</h1>
    <myContext.Provider value={[nome, setNome]}> 
    <Componente1 />
     <hr /> 
     <Componente2 />
      </myContext.Provider>
       </div>
        );
       } 
       
       export default App;