import React,{useState, useEffect} from 'react';

import "../components/ImagensDosAlunos.css";

export default class ImagensAlunos extends React.Component {
    return(itemData, Images);
     

  itemData =[
        {id:1, img:"https://cdn.pixabay.com/photo/2017/05/31/14/31/mango-2360551_960_720.jpg"},
        {id:2, img:"https://cdn.pixabay.com/photo/2016/07/22/09/59/fruit-1534493_960_720.jpg"},
        {id:3, img:"https://cdn.pixabay.com/photo/2019/04/28/18/34/orange-4163953_960_720.jpg"},
        {id:4, img:"https://cdn.pixabay.com/photo/2015/11/25/09/52/star-anise-1061572_960_720.jpg"},
        {id:5, img:"https://cdn.pixabay.com/photo/2016/10/27/22/52/apples-1776744_960_720.jpg"},
        {id:6, img:"https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494_960_720.jpg"},
        {id:7, img:"https://cdn.pixabay.com/photo/2015/07/10/18/36/still-life-840014_960_720.jpg"},
        {id:8, img:"https://cdn.pixabay.com/photo/2021/01/05/05/30/grapes-5889697_960_720.jpg"},
    
    ];

    Images = React.createClass({
        render: function() {
          return (
            <div>  {itemData.map(function(i){
                    return (
                    <div key={i.id}>
                      <h1>{i.id}</h1>
                      <img src={i.img} width={180} height={200} />
                    </div>
                    );
            })}
        </div>
        )
      }});
      
      
    
}
    





