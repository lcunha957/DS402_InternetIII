import React, { useContext } from 'react';
import { myContext } from './context/myContext';

export default function Componente2() {
     const [nome, setNome] = useContext(myContext); 
     return (
         <div>
             <h2>
                 Conteúdo do componente 2:
    </h2>
     <label>Digite seu nome:</label>
      <input
       type="text" 
       placeholder="Digite o username" 
       onChange={({ target }) => setNome(target.value)}
        />
         </div>
          )
         }