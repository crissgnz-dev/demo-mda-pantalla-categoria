import React, { Component } from "react";
import Categorias from "./Categorias";
import Check from "../assets/Check";
import "./Formulario.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const categorias = [
  {
    img: img1,
    title: "Profesionales / Técnicos",
    text: "Podrás trabajar dentro de las áreas de programación, contaduría, análisis, abogacía, medicina, educación, enfermería, etcétera.",
    require: "Graduados/Estudiantes",
  },
  {
    img: img2,
    title: "Operario/a",
    text: "Podrás estar en puestos como recolección, limpieza, obrero, chofer, acompañante, jardinero, sereno, albañil, auxiliar, cocinero, etcétera.",
    require: "Experiencia comprobable",
  },
  {
    img: img3,
    title: "Administrativo/a",
    text: "Podrás estar en puestos administrativos, de recepción, operador de cámara de vigilancia, data entry, etcétera.",
    require: "Estudios secundarios completos",
  },
];

export default class Formulario extends Component {
  render() {
    return (
      <div>
        <div className="eleccion">
          <div className="cabecera">
            <p id="titulo">
              Completá el formulario y <b>postulate</b>
            </p>
            <nav>
              <li className="item activo">Personales</li>
              <li className="item activo">Estudios</li>
              <li className="item activo">Experiencia</li>
              <li className="item">Categoria</li>
            </nav>
          </div>
          <p className="textoEleccion">
            Seleccioná una o más categorías para postularte, una vez clickeado
            el botón “Postularme” seleccione “Finalizar”
          </p>
          <div className="seccionCategoria">
            {categorias.map((categoria) => (
              <Categorias
                key={categoria.title}
                img={categoria.img}
                title={categoria.title}
                text={categoria.text}
                require={categoria.require}
              />
            ))}
          </div>
          <button className="botonAvellaneda finalizar">
            <Check />
            <p>Finalizar proceso de postulación</p>
          </button>
        </div>
      </div>
    );
  }
}
