import { useState } from "react";

// Componente que permite al usuario escribir una categoría y enviarla al componente padre
export const AddCategory = ({ onNewCategory }) => {

  // Hook useState para manejar el valor actual del input
  const [inputValue, setInputValue] = useState("");

  // Se ejecuta cada vez que cambia el valor del input (cuando el usuario escribe)
  const onInputChange = ({ target }) => {
    setInputValue(target.value); // Actualiza el estado con el valor del input
  };

  // Se ejecuta cuando se envía el formulario (por ejemplo, al presionar Enter)
  const onSubmit = (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    const normalizedValue = inputValue.trim().toLowerCase(); // Normaliza la entrada (sin espacios ni mayúsculas)

    if (normalizedValue.length <= 1) return; // Si tiene 1 o menos caracteres, no hace nada

    onNewCategory(normalizedValue); // Llama a la función del componente padre con la categoría nueva
    setInputValue("");              // Limpia el campo de texto después de enviarlo
  };

  return (
    <form onSubmit={onSubmit} aria-label="Formulario de búsqueda de gifs">
      {/* Etiqueta para accesibilidad, oculta visualmente */}
      <label htmlFor="searchInput" style={{ display: "none" }}>
        Buscar gifs
      </label>

      {/* Campo de entrada de texto controlado */}
      <input
        id="searchInput"
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
