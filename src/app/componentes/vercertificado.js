import {
  PDFDownloadLink,
  PDFViewer,
  Document,
  View,
  Page,
} from "@react-pdf/renderer";
import { Alert } from "bootstrap";
import React, { Component, Fragment } from "react";
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import { useHistory } from "react-router-dom";

class VerCertificado extends Component {


  render() {
    return (
      <Fragment>
        <Document>
          <Page
            size="LETTER"
            orientation="landscape"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            
              <div
                className="w-10 container mx-auto"
                style={{ width: "100%", height: "100%" }}
              >
                {<this.props.component />}
              </div>
            
          </Page>
        </Document>
        </Fragment>
    );
  }
}

export default VerCertificado;

/**
   * 
   * 
    <PDFDownloadLink 
                document={    <this.props.component />}
                fileName="certi.pdf"
        > <Button variant="info">Descargar PDF</Button>

        </PDFDownloadLink> 

   */
