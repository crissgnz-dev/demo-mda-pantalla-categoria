import "./Categorias.css"
export default function Categorias({img, title, text, require}) {
    return (
      <main>
        <div>
            <div className="imagenFondo">
                <img src={img} alt="" />
            </div>
            <div className="">
                <h4>{title}</h4>
                <p>{text}</p>
                <p className="importante">{require}</p>
                <button>Postularme</button>
            </div>
        </div>
      </main>
    )
}
