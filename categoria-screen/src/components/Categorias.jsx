import "./Categorias.css"
export default function Categorias({img, title, text, require}) {
    return (
      <div className="itemCategoria" style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
          <div className="gradiente">
            <div className="contenido">
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="importante"><div className="circulo" /><p>{require}</p></div>
              <button className="botonAvellaneda">Postularme</button>
            </div>
          </div>
      </div>
    )
}

