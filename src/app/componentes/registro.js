import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import certcontract from "../config.js";
class Registro extends Component {
  sendmail (event) {
    event.preventDefault();
    window.location.href = `mailto:${this.state.email}`;
  };

  agregarinstituto  (event)  {
    event.preventDefault();
    this.props.agregarinstituto(this.state);
    
  };

  handleChange  (event)  {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  constructor() {
    super();
  this.state = {
    email: "guillermolaura333@gmail.com",
    nombre:"",
    adress:"",
    instituciones:[]
  };
  this.handleChange = this.handleChange.bind(this);
 
}

  async componentDidMount() {
    console.log("registro montado");
    this.renderinstituciones();
  }


  async renderinstituciones  ()   {
   
    const Contador = await certcontract.methods.contadorinst().call();
    console.log("contador:   "+ Contador);
    const insts = [];
  
    for (let i = 0; i < Contador  ; i++) {
      const inst = await certcontract.methods.InstMostrar(i).call();
      console.log("certifcado:"+inst);
  
      const adress = inst[0];
      console.log(adress);
      const nombre = inst[1];
      console.log(nombre)
      insts[i]=inst  
  }

  this.setState({instituciones:insts})

  }


  render() {
    return (      


      <div style={{
        //backgroundImage: `url(${b1})`,
        background: "#0A192F",
        color: "#fff",
        backgroundSize: "cover",
        //border: "3px solid white",
        height: "100%",
        width: "100%"
      }}
      className="container-fluid ">
        <h3>Registro de Institciones:</h3>
       
        <div className="w-50 container  "  style={{
        //backgroundImage: `url(${b1})`,
        background: "#0A192F",
        color: "#fff",
        backgroundSize: "cover",
       // border: "1px solid black",
        height: "100%",
        width: "100%",
        }}>

        <Form onSubmit={this.agregarinstituto}>
              <Form.Group>
                <Form.Control
                  type="text"
                  name="adress"
                  value={this.state.adress}
                  onChange={this.handleChange}
                  placeholder="Adress"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.handleChange}
                  placeholder="Nombre"
                />
              </Form.Group>

              <Button
                // disabled={!isEnabled}
                className="mt-3"
                variant="primary"
                type="submit"
              >
                Agregar
              </Button>
            
            </Form>

            <div >
              <table>
                <thead>
                  <tr>
                    <th>Adress</th>
                    <th>Nombre</th>
                  </tr>
                </thead>
                <tbody>
                  { 
                    this.state.instituciones.map(institucion => {
                      let idkey=0
                      return (
                        <tr key={idkey}>
                          <td>{institucion[0]}</td>
                          <td>{institucion[1]}</td>
                          
                        </tr>
                      )
                      idkey++;
                    })
                  }
                </tbody>
              </table>
            </div>


        </div>
      </div>
    );
  }
}

export default Registro;
