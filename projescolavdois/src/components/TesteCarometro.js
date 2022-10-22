
import React, { useEffect, useState, useCallback } from "react";

import axios, { AxiosHeaders } from 'axios';

import Main from "./template/Main";

import "./Carometro.css";

import ImagensGatos from './ImagensGatos';

import { CardDescription, CardGroup, Card, Image, Input } from "semantic-ui-react";

const title = "Portfólio das turmas";

const urlAPIEstudante="http://localhost:5277/api/CadastroAluno/GetAll";

const urlAPICurso="http://localhost:5277/api/curso";

const urlAPIEstudanteCodCurso = "http://localhost:5277/api/CadastroAluno/CadastroAlunoCodigoCurso"

const urlAPIGatinhos = 'https://api.thecatapi.com/v1/images/search?limit=10';

const img01 = "./img/img01.jpg";

const img02 = "./img/img02.jpg";

const img03 = "./img/img03.jpg";

const img04 = "./img/img04.jpg";

const img05 = "./img/img05.jpg";

const img06 = "./img/img06.jpg";

const img07 = "./img/img07.jpg";

const img08 = "./img/img08.gif";

const img09 = "./img/img09.jpg";


//import Card from 'react-bootstrap/Card';

//import Col from 'react-bootstrap/Col';

//import Row from 'react-bootstrap/Row';


//import CardImg from "react-bootstrap/esm/CardImg";

export default function TesteCarometro() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [imagens, setImages] = useState([]);
  
    const [catUrls, setCatUrls] = useState();

 
    useEffect(() =>{
        fetch("http://localhost:5277/api/CadastroAluno/GetAll")
        .then((res) => res.json())
        .then((result) =>{ setIsLoaded(true); setItems(result);},
        (error) =>{
            setIsLoaded(true);
            setError(error);
        }
        );
    }, [])

    const getCat = useCallback(() => {
        console.log("Hello World");
    
        let catImageUrlList = [];
        // fetch http request
        fetch(urlAPIGatinhos)
          .then((res) => res.json()) //gives data in json
          .then((cats) => {
            console.log("Cats: ", cats);
    
            for (let i = 0; i < cats.length; i++) {
              catImageUrlList.push(cats[i].url);
            }
    
            setCatUrls(catImageUrlList);
          })
          .catch((error) => {
            console.log("Erro: ", error);
          });
      }, [setCatUrls]);

      useEffect(() => {
        console.log("Carregando os seus amigos felinos...");
        getCat();
      }, [getCat]);
    

    if (error){
        return<>{error.message}</>
    } else if (!isLoaded){
        return<>carregando....</>;
    } else {
        return (
            /* aqui fazemos o map do elemento e exibimos cada item como um card  */
            <div className="wrapper">
                <ul className="card-grid">
                    {items.map((item) => (
                        <li>
                            <article className="card" key={item.id}>
                                <div className="card-image">
                                {catUrls ? (
                 catUrls.map((catUrl) => <img src={catUrl} alt={"kitty"} />)
                   ) : (
                 <p>Carregando gatinhos...</p>
                           )}
                                </div>
                                <div className="card-content">
                                    <h2 className="card-name"> ra: {item.ra}</h2>
                                    <ol className="card-list">
                                        <li>
                                            nome do aluno(a):{" "}
                                            <span>{item.nomeAluno}</span>
                                        </li>
                                        <li>
                                            Número do curso: <span>{item.al_codCurso}</span>
                                        </li>
                                    </ol>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}