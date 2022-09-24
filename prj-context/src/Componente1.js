import React, { useContext } from 'react';
import { myContext } from './context/myContext';

export default function Componente1() { 
    const dadosContext = useContext(myContext);
     return ( 
     <h2> Conteúdo do componente 1:
         { dadosContext } 
</h2> 
)
 }