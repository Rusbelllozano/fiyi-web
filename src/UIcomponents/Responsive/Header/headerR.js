import React, { Component } from 'react';
import '../../../assets/styles/header.css';
import fondopart1 from "../../../assets/images/Web/FondoPart1.png";
import fondoestrellas from "../../../assets/images/Responsive/estrellas.png";
import logoinicio from "../../../assets/images/Responsive/logoinicio.png";
import Entretenimiento from "../../../assets/images/Responsive/Entretenimiento creativo.png";
class header extends Component {
  render() {
    return (
      <div className="HeaderR">
          <img src={fondopart1} className="fondo" alt="fondo" />
          <img src={fondoestrellas} className="estrella" alt="estrellas" />
            <div class="logoparque">
                <img src={logoinicio} className="logotitulo"/>
                <img src={Entretenimiento} className="entrete"/>
            </div>
      </div>
    );
  }
}
export default header;