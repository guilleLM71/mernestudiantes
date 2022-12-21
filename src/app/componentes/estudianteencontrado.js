import React, { Component } from "react";

class EstudianteEncontrado extends Component {
 // state = { name: "", sender: "", course: "" };


  /*

0:uint256: id 0
1:string: institucion
2:address: emisor 0x00000
3:string: tituloProfesional
4:string: titulocurso
5:uint256: ci 0
6:string: nombre
7:string: appaterno
8:string: apmaterno
9:uint256: createdAt 0
  */

  render() {
    return (
      <div
        className="container "
        style={{
          fontFamily: "Montserrat",
          background: "#5dcbef",
          fontWeight: "bold",
          border: "4px solid black",
          fontSize: "15px",
          marginTop: "10px"
        }}
      >
        <div style={{ borderBottom: " 1px solid black" }}>
          <h5>Estudiante</h5>
        </div>
       
        <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          CI:
          <span style={{ borderBottom: " 2px solid black" }}>
            {" " + this.props.estudiante[0]}
          </span>
        </div>
        <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          Nombre:
          <span style={{ borderBottom: " 2px solid black" }}>
            {" " + this.props.estudiante[1]}
          </span>
        </div>
        <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          ApPaterno:
          <span style={{ borderBottom: " 2px solid black" }}>
            {" " + this.props.estudiante[2]}
          </span>
        </div>
        <div style={{ marginLeft: "10px", marginBottom: "10px" }}>
          ApMaterno:
          <span style={{ borderBottom: " 2px solid black" }}>
            {" " + this.props.estudiante[3]}
          </span>
        </div>
        
      </div>
    );
  }
}

export default EstudianteEncontrado;
