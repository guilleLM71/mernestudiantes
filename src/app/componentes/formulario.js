import React, { Component, Fragment } from "react";
import { Form, Button } from "react-bootstrap";

import FormularioEstudiante from "./formularioestudiante";
//import certcontract from "../config.js";
import sha256 from "crypto-js/sha256";


import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

import { Redirect } from "react-router-dom";
import GenerarPDF from "./generarpdf";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

class Formulario extends Component {
  canBeSubmitted() {
    const { tituloProf, tituloCurso, ci, nombre, paterno, materno } =
      this.props;
    return (
      tituloProf.length > 0 &&
      tituloCurso.length > 0 &&
      ci.length > 0 &&
      nombre.length > 0 &&
      paterno.length > 0 &&
      materno.length > 0
    );
  }

  handleChange (event)  {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  crearcertificado  (event)  {
    event.preventDefault();
    this.props.crearcertificado(this.state);
    //console.log(this);
    this.props.handlerpadreapp(this.state.imageSrc);
    this.setState({ swpdf: true });
  };

  crearcertificadohashdoc  (event)  {
    event.preventDefault();
    this.props.crearcertificadohashdoc(this.state);
    //console.log(this);
  };
  constructor() {
    super();
  this.state = {
    tituloProf: "",
    tituloCurso: "",
    ci: "",
    nombre: "",
    paterno: "",
    materno: "",

    active: false,
    imageSrc: "",
    imageName: "",
    image: [],
    loaded: false,

    activepdf: false,
    imageSrcpdf: "",
    imageNamepdf: "",
    imagepdf: [],
    loadedpdf: false,

    hashdoc: "",
    abierto: false,
    abiertopdf:false,

    swpdf: false,
    /*
    estudiante:[],
    sw:false
*/
  };
  this.handleChange = this.handleChange.bind(this);
  this.crearcertificado=this.crearcertificado.bind(this)
  this.crearcertificadohashdoc=this.crearcertificadohashdoc.bind(this)
}

  abrirModal  ()  {
    this.setState({ abierto: !this.state.abierto });
  };

  abrirModalpdf () {
    this.setState({ abiertopdf: !this.state.abiertopdf });
  };

 
  /*
   buscaEstudiante =  (data) =>  {
    const ci=data.ci;
    for(let i=0;i<6;i++){
      certcontract.methods.listaE(i)
          .call(
            {from: this.state.account},        
            (error, result) => {
              if (!error) {
                //console.log(result);
                const v = Object.values(result);
                if(v[0]===ci){
                  this.setState({estudiante: v})
                  this.setState({sw:true})
                  //this.history.pushState("certfound");
                  //console.log(this.state.estudiante);
                }
                
              } else alert("estudiante not found");
            }
           );
     
      
    }
  }
 
*/
  handlerpadre (p1, p2, p3, p4)  {
    this.setState({
      ci: p1,
    });
    this.setState({
      nombre: p2,
    });
    this.setState({
      paterno: p3,
    });
    this.setState({
      materno: p4,
    });
  };

  /*
  someMethodapp = (p1) => {
    this.props.handlerpadreapp(p1);
  };
*/

  onDragEnter  (e) {
    this.setState({ active: true });
  };

  onDragLeave (e)  {
    this.setState({ active: false });
  };

  onDragOver (e)  {
    e.preventDefault();
  };

  onDrop (e)  {
    e.preventDefault();
    this.setState({ active: false });
    this.onFileChange(e, e.dataTransfer.files[0]);
  };

  onFileChange  (e)  {
    console.log("on-file-change");
    var file = e.target.files[0],
      pattern = /image-*/,
      reader = new FileReader();
    console.log(file.name);
    if (!file.type.match(pattern)) {
      alert("Formato inválido");
      return;
    }
    console.log(this);
    this.setState({ loaded: false });

    reader.onload = (e) => {
      this.setState({
        imageSrc: reader.result,
        loaded: true,
        imageName: file.name,
      });

      console.log(reader.result);
      //this.someMethodapp(reader.result);
    };

    //this.someMethodapp(this.state.imageSrc);

    reader.readAsDataURL(file);
  };

  onFileChangeDoc  (e)  {
    console.log("on-file-change");
    var file = e.target.files[0],
      pattern = /pdf-*/,
      reader = new FileReader();
    console.log(file.name);
    if (!file.type.match(pattern)) {
      alert("Formato inválido");
      return;
    }
    console.log(this);
    this.setState({ loadedpdf: false });

    reader.onload = (e) => {
      this.setState({
        imageSrcpdf: reader.result,
        loadedpdf: true,
        imageNamepdf: file.name,
      });

      const hash = sha256(reader.result);
      const hashingdoc = hash.toString();

      this.setState({
        hashdoc: hashingdoc,
      });

      console.log(reader.result);
      console.log(hashingdoc);
      //this.someMethodapp(reader.result);
    };

    //this.someMethodapp(this.state.imageSrc);

    reader.readAsDataURL(file);
  };

  getFileName  ()  {
    return this.state.imageName;
  };
  getFileObject  ()  {
    return this.refs.input.files[0];
  };

  getFileString  ()  {
    return this.state.imageSrc;
  };

  render() {
    //const isEnabled = this.canBeSubmitted();

    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      maxWidth: "100%",
      transform: "translate(-50%, -50%)",
    };
    
    return (
      <Fragment>
        <div
          className="col-md-12 pt-5 pb-5"
          style={{
            fontFamily: "Montserrat",
            fontWeight: "bold",
            fontSize: "55px",
            color: "#fff",
            background: "#0A192F",
          }}
        >
          <h1>Crear Certificado</h1>
        </div>

        <div
          className="col-md-12"
          style={{
            float: "left",
            background: "#0A192F",
            color: "#fff",
            backgroundSize: "cover",
            border: "solid",
            borderColor: "red",

            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              marginBottom: "50px",
              marginTop: "50px",

              background: "rgba(255,255,255,0.5)",
            }}
            className="w-10 container pt-5 pb-5 mx-auto"
          >
            <h2
              style={{
                fontWeight: "bold",
                fontFamily: "Montserrat",
              }}
              className="mb-12"
            >
              Ingresa los datos
            </h2>

            <Form onSubmit={this.crearcertificado}>
              <FormularioEstudiante //buscaEstudiante={this.buscaEstudiante}
                handlerpadre={this.handlerpadre}
                //estudiante={this.state.estudiante}
                // sw={this.state.sw}
              ></FormularioEstudiante>

              <Form.Group>
                <Form.Control
                  type="text"
                  name="tituloCurso"
                  value={this.state.tituloCurso}
                  onChange={this.handleChange}
                  placeholder="Curso"
                />
              </Form.Group>

              <Form.Group>
                <br />
                <label
                  onDragEnter={this.onDragEnter}
                  onDragLeave={this.onDragLeave}
                  onDragOver={this.onDragOver}
                  onDrop={this.onDrop}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={this.onFileChange}
                    ref="input"
                  />
                </label>
                <br />
                <img
                  src={this.state.imageSrc}
                  style={{ maxWidth: "300px", maxHeight: "400" }}
                />
              </Form.Group>

              <Button
                // disabled={!isEnabled}
                className="mt-3"
                variant="primary"
                type="submit"
              >
                Certificar
              </Button>
            </Form>

            <Button color="success" onClick={this.abrirModal}>
              VistaPrevia
            </Button>

            <Modal isOpen={this.state.abierto} style={modalStyles}>
              <ModalHeader>Vista Previa / Edicion</ModalHeader>
              <ModalBody>
                <this.props.component />
              </ModalBody>

              <ModalFooter>
               
                <Button color="success" onClick={this.abrirModalpdf}>
                 GenerarPDf
                 </Button>

                <Button color="secondary" onClick={this.abrirModal}>
                  Cerrar
                </Button>

               
              </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.abiertopdf} style={modalStyles}>
                  <ModalHeader>QUE DESEA HACER CON EL CERTIFICADO</ModalHeader>
                  <ModalBody>                    
                      <PDFViewer>
                        <this.props.component />
                      </PDFViewer>                       
                  </ModalBody>
                  <ModalFooter>                    
                  <PDFDownloadLink
                    document={<this.props.component />}
                    fileName="certi.pdf"
                  >
                    
                    <Button color="primary">Descargar PDF</Button>
                  </PDFDownloadLink>

                    <Button color="secondary" onClick={this.abrirModalpdf}>
                      Cerrar
                    </Button>
                  </ModalFooter>
                </Modal>


          </div>
        </div>
      </Fragment>
    );
  }
}

export default Formulario;
