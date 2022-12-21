import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import CertificadoEncontrado from "./certificadoencontrado";
//import { PDFJS } from "react-pdf";
import sha256 from "crypto-js/sha256";
import { toast, Toaster, ToastBar } from 'react-hot-toast';

import { Toast, ToastBody, ToastHeader } from "reactstrap"
  



class VertificarCertificado extends Component {
  canBeSubmittedid() {
    const id = this.state.id;
    return id.length > 0;
  }
  canBeSubmittedtxh() {
    const txh = this.state.txh;
    return txh.length > 0;
  }
  handleChange  (event)  {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  verificarcertificado  (event) {
    event.preventDefault();
    this.props.verificarcertificado(this.state);
    //console.log(this);
  };


  verificarcertificadohashdoc ( event)  {
    event.preventDefault();
    this.props.verificarcertificadohashdoc(this.state);
    //console.log(this);
  };

  gettransaction  (event)  {
    event.preventDefault();
    const url = "https://etherscan.io/tx/" + this.state.txh;
    window.open(url);
    console.log(url);
  };



  searchFile  (event) {
    console.log("on-file-change");
    var file = event.target.files[0],
    pattern = /pdf-*/,

    reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert("Formato inválido");
      return;
    }

    console.log(file.name);

    
     // this.show = true;
      
      reader.onload = (e) => {

        if (e.target.readyState === FileReader.DONE) {
          console.log(reader.result);
         // const hash = sha256(reader.result);
          //this.obtenerCertificado(hash.toString());
         // this.show = false;
         const hash = sha256(reader.result);

          this.setState({hashdoc:hash.toString()})
         

         
        
        }
        console.log(this.state.hashdoc);
      };
      
      
      reader.readAsDataURL(file);
    


   }
  
  

   constructor() {
    super();
  this.state = {
    id: "",
    txh: "",
    hashdoc:""
  };
  this.handleChange = this.handleChange.bind(this);


}
  render() {
    const isEnabledid = this.canBeSubmittedid();
    const isEnabledtxh = this.canBeSubmittedtxh();
    return (
      <div
        style={{
          //backgroundImage: `url(${b1})`,
          background: "#0A192F",
          color: "#fff",
          backgroundSize: "cover",
          border: "1px solid black",
          height: "100%",
          width: "100%"
        }}
        className="container-fluid "
      >
        <div className=" mx-auto w-50 mb-4 ">
          <h1
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
            className=" mt-3 mb-4"
          >
            Verifica tu Certificado por ID
          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.verificarcertificado}
            style={{ background: "rgba(255,255,255,0.5)" }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="id"
                value={this.state.id}
                onChange={this.handleChange}
                placeholder="Ingresa el ID de tu Certificado"
              />
            </Form.Group>
            <Button
              disabled={!isEnabledid}
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
            >
              Verificar
            </Button>
          </Form>
          {this.props.encontrado ? 
          
          <CertificadoEncontrado datos={this.props.datos} />
         :null
         
        }

          <hr
            className="mt-5 "
            style={{ color: "red", backgroundColor: "red", height: 5 }}
          />
        </div>

        <div className=" mx-auto w-50 mb-3">
          <h1
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
            className="mt-5 mb-4"
          >
            Verifica tu certificado por Transaccion Hash
          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.gettransaction}
            style={{
              marginBottom: "57px",
              background: "rgba(255,255,255,0.5)"
            }}
          >
            <Form.Group>
              <Form.Control
                type="text"
                name="txh"
                value={this.state.txh}
                onChange={this.handleChange}
                placeholder="Ingresa el Hash"
              />
            </Form.Group>
            <Button
              disabled={!isEnabledtxh}
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
            >
              Verificar
            </Button>
          </Form>

          <hr
            className="mt-5 "
            style={{ color: "red", backgroundColor: "red", height: 5 }}
          />
        </div>



        <div className=" mx-auto w-50 mb-3">
          <h1
            style={{
              color: "white",
              fontFamily: "Montserrat",
              fontWeight: "bold"
            }}
            className="mt-5 mb-4"
          >
            Sube tu certificado para Verificar

          </h1>
          <Form
            className="px-3 pt-4"
            onSubmit={this.verificarcertificadohashdoc}
            style={{
              marginBottom: "57px",
              background: "rgba(255,255,255,0.5)"
            }}
          >
           
            <input  type="file"
                    accept="pdf/*"
                    //name="hashdoc"
                    //value={this.state.hashdoc}
                    onChange={this.searchFile}                

                    ref="input"
                  />

            <Button
             // disabled={!isEnabledtxh}
              className="mt-2 mb-3"
              variant="primary"
              type="submit"
            >
              Verificar
            </Button>
          </Form>

          {this.props.encontradohashdoc ? 
          
          
             
          <div style={{
            display: 'block', width: 700, padding: 30
             }}>
            
            <Toast className="p-3 bg-primary my-2"
            fade="true"
            isOpen="false"	
            
            >
                <ToastBody>
                    Valido
                </ToastBody>
            </Toast>
        </div>
          
          : 
            
          <div style={{
            display: 'block', width: 700, padding: 30
             }}>
         
            <Toast className="p-3 bg-primary my-2"
            fade="true"
            isOpen="false"	
            
            >
                <ToastBody>
                    inValido
                </ToastBody>
            </Toast>
        </div>
         
        }
        </div>


      </div>
    );
  }
}

export default VertificarCertificado;
