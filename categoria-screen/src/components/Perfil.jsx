import React, { Component } from 'react'
import foto from '../assets/imagen.png'
import "./Perfil.css"

export default class Perfil extends Component {
  render() {
    return (
      <div className="perfil">
        <div className="foto"><img src={foto} alt="foto" /></div>
        <div className='titulos'>
            <h3>Cristian Portolan</h3>
            <p>CUIT: 20-45227915-1</p>
        </div>
        <div className='boton'>
            <button>Ver mi perfil</button>
        </div>
      </div>
    )
  }
}
