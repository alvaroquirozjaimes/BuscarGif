// Componente funcional que recibe las propiedades title, url e id
export const GifItem = ({ title, url, id }) => {

  return (
    <div className="card">
        {/* Muestra la imagen del gif con su respectiva URL y título como texto alternativo */}
        <img src={ url } alt={ title } />

        {/* Muestra el título debajo de la imagen */}
        <p>{ title }</p>
    </div>
  )
}
