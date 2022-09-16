import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; 
import 'jquery/dist/jquery.min.js';
class Menu extends React.Component {
  
 
  render() {
   
    return (
     
        <div className="maincontainer">
        
         
          <div class="container">
          <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">Therichpost</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">
                            <i class="bi bi-person-video2"></i>
                            Alunos
                            <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            <i class="fa fa-envelope-o">
                                <span class="bi bi-pc-display-horizontal"></span>
                            </i>
                              Cursos  
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">
                            <i class="fa fa-envelope-o">
                                <span class="badge badge-warning"></span>
                            </i>
                            Carômetro
                            </a>
                        </li>
                         </ul>
                        <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                    </nav>
                
                </div> 
             
        </div>
     
      
)
};
}
export default Menu;

