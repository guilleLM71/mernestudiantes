import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import certcontract from "../config.js";
import web3 from "../web3";
import EstudianteEncontrado from "./estudianteencontrado";

class FormularioEstudiante extends Component {
  /*
  canBeSubmitted() {
    const { tituloProf,tituloCurso,ci,nombre,paterno,materno } = this.state;
    return (
      tituloProf.length > 0 &&
      tituloCurso.length > 0 &&
      ci.length > 0 &&
      nombre.length > 0 &&
      paterno.length > 0 &&
      materno.length > 0 
     
    );
  }*/
  async handleChange (event) {
   
    this.setState({
      [event.target.name]: event.target.value
    });
    
      
   
  };

 


  async  buscaEstudiante  ()   {

    const accounts = await web3.eth.getAccounts();
    web3.eth.defaultAccount = accounts[0]
   
    const ci=this.state.ci;
    for(let i=0;i<6;i++){
      await certcontract.methods.listaE(i)
          .call(
            {from: accounts[0]},        
            (error, result) => {
              if (!error) {
                //console.log(result);
                const v = Object.values(result);
                if(v[0]===ci){
                  this.setState({estudiante: v})
                  this.setState({sw:true})
                  //this.history.pushState("certfound");
                  //console.log(this.state.estudiante);
                  this.someMethod(
                    this.state.estudiante[0],               
                    this.state.estudiante[1],
                    this.state.estudiante[2],
                    this.state.estudiante[3])
                }
                
              } else alert("estudiante not found");
            }
           );
     
      
    }
    
  }
 

  constructor() {
    super();
  this.state = {
   
    
    ci:"",
    nombre:"",
    paterno:"",
    materno:"",
    estudiante:[],
    sw:false
    

  };
  this.handleChange = this.handleChange.bind(this);
 
}

  someMethod (p1,p2,p3,p4)  {
   

    this.props.handlerpadre(p1,p2,p3,p4)  
    
  }



  


  render() {
    //const isEnabled = this.canBeSubmitted();
    return (
      <div
        className="container-fluid "
        style={{
          height: "100vh%",
          //backgroundImage: `url(${b1})`,
       
          backgroundSize: "cover"
        }}
      >
        <Form >
            
            <Form.Group>
              <Form.Control
                type="text"
                name="ci"
                value={this.state.ci}
                onChange={(e)=>{this.handleChange(e); this.buscaEstudiante(e)} }
                placeholder="CI"
              />
            </Form.Group>

          </Form>
          {this.state.sw ? <EstudianteEncontrado estudiante={this.state.estudiante} /> : null}
      </div>
    );
  }
}

export default FormularioEstudiante;


/*

    <Form.Group>
              <Form.Control
                type="text"
                name="nombre"
                value={this.state.estudiante[1]}
               // onChange={this.handleChange}
                placeholder="Nombre"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="paterno"
                value={this.state.estudiante[2]}
               // onChange={this.handleChange}
                placeholder="Ap-Paterno"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="materno"
                value={this.state.estudiante[3]}
                //onChange={this.handleChange}
                placeholder="Ap-Materno"
              />
            </Form.Group>


*/



