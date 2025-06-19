import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    // Estado para guardar las categorías de búsqueda
    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    // Función que se encarga de agregar una nueva categoría
   const onAddCategory = (newCategory) => {

    if (categories[0] === newCategory) return;
  setCategories([ newCategory.toLowerCase().trim() ]);
};

    return (
        <>
            {/* Título principal de la aplicación */}
            <h1>GifLab</h1>

            {/* Componente de formulario para agregar nuevas categorías */}
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* Renderiza un componente GifGrid por cada categoría */}
            
            <button 
  onClick={() => setCategories([])} 
  className="clear-button">
  Limpiar categorías
</button>

            
            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category }           // Clave única para cada categoría
                        category={ category }      // Se pasa la categoría como prop al GifGrid
                    />
                ))
            }
        </>
    )
}


/* Conclusión – Cómo fluye todo
El usuario escribe una categoría en AddCategory.

Al enviar, onNewCategory se llama en GifExpertApp, y se agrega la nueva categoría al estado.

GifExpertApp renderiza un nuevo GifGrid con esa categoría.

GifGrid usa useFetchGifs para obtener los gifs.

useFetchGifs llama a getGifs, que hace la petición a la API.

Cuando se reciben los datos, se muestran usando GifItem.

 */