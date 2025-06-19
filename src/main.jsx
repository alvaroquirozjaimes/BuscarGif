// Importa React (aunque en proyectos recientes con JSX ya no es estrictamente necesario)
import React from 'react';

// Importa ReactDOM para renderizar la aplicación en el DOM
import ReactDOM from 'react-dom/client';

// Importa el componente principal de la aplicación
import { GifExpertApp } from './GifExpertApp';

// Importa los estilos globales
import './styles.css';

// Renderiza la aplicación dentro del elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp /> {/* Componente principal de toda la app */}
  </React.StrictMode>
);
