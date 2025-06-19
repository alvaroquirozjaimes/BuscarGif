import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  // Hook useState para manejar el valor actual del input
  const [inputValue, setInputValue] = useState("")

  // Función que se ejecuta cada vez que cambia el valor del input
  const onInputChange = ({ target }) => {
    // Se actualiza el estado con el nuevo valor del input
    setInputValue(target.value)
  }

  // Función que se ejecuta al enviar el formulario (al presionar Enter, por ejemplo)
  const onSubmit = (event) => {
    event.preventDefault() // Evita que la página se recargue al enviar el formulario

    const normalizedValue = inputValue.trim().toLowerCase()
    if (normalizedValue.length <= 1) return
    onNewCategory(normalizedValue)

    // Si el valor ingresado tiene 1 caracter o menos, no se hace nada
    if (inputValue.trim().length <= 1) return

    // Limpia el input una vez enviado
    setInputValue("")

    // setCategories( categories => [ inputValue, ...categories ]);

    // Llama a la función que viene desde el componente padre, pasando el valor nuevo
    onNewCategory(inputValue.trim())
  }

  return (
    <form onSubmit={onSubmit} aria-label="Formulario de búsqueda de gifs">
      <label htmlFor="searchInput" style={{ display: "none" }}>
        Buscar gifs
      </label>
      <input
        id="searchInput"
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
