import React, { Component } from 'react';


class Menu extends Component{ 
  constructor(props){
    super(props)
    this.state = {
        val: props.valor
    }
  }

  render(){
    return(
        <h1> Valor: {this.state.val}</h1>
    )
  }

}