
# Proyecto de Selección de Agentes de Valorant

## Descripción
Este proyecto es una aplicación web interactiva que permite a los usuarios explorar y seleccionar agentes del juego Valorant. Utiliza la API oficial de Valorant para obtener información actualizada sobre los agentes y ofrece una interfaz intuitiva para la selección de equipos.

## Características Principales
- **Visualización de Agentes**: Muestra una lista de todos los agentes disponibles en Valorant con sus detalles.
- **Filtrado de Agentes**: Permite filtrar agentes por rol y nombre.
- **Selección de Equipo**: Los usuarios pueden seleccionar hasta 5 agentes para formar su equipo.
- **Persistencia de Datos**: Utiliza localStorage para guardar la selección de agentes entre sesiones.
- **Paginación**: Implementa un sistema de paginación para navegar fácilmente entre los agentes.
- **Diseño Responsivo**: Interfaz adaptable a diferentes tamaños de pantalla.
- **Modal de Equipo**: Visualización detallada del equipo seleccionado en un modal.

## Tecnologías Utilizadas
- React.js
- Tailwind CSS
- API de Valorant
- LocalStorage para persistencia de datos

## Instalación
1. Clona el repositorio:
   ```
   git clone https://github.com/gabiirc14/Api-Valorant.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd Api-Valorant
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso
1. Inicia la aplicación:
   ```
   npm start
   ```
2. Abre tu navegador y ve a `http://localhost:3000`

## Funcionalidades Detalladas
- **Búsqueda de Agentes**: Utiliza el campo de búsqueda para encontrar agentes por nombre.
- **Filtro por Rol**: Selecciona un rol específico en el menú desplegable para filtrar agentes.
- **Selección de Agentes**: Haz clic en "Agregar" para seleccionar un agente para tu equipo. Puedes seleccionar hasta 5 agentes.
- **Visualización de Equipo**: Haz clic en el botón "Team X/5" para ver tu selección actual en un modal.
- **Paginación**: Navega entre páginas de agentes usando los controles de paginación en la parte inferior.

## Estructura del Proyecto

```
Mi-PrimerProyecto/
│
├── node_modules/
│
├── src/
│   ├── App.css
│   ├── App.jsx
│   ├── buscador.jsx
│   ├── footer.jsx
│   ├── header.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── paginacion.jsx
│   └── renderImg.jsx
│
├── .gitignore
├── eslintrc.cjs
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

### Descripción de los archivos principales:

- `src/`: Contiene todos los archivos fuente de React.
  - `App.jsx`: Componente principal de la aplicación.
  - `buscador.jsx`: Componente para la funcionalidad de búsqueda.
  - `footer.jsx`: Componente del pie de página.
  - `header.jsx`: Componente del encabezado.
  - `paginacion.jsx`: Componente para la paginación.
  - `renderImg.jsx`: Componente para renderizar imágenes (posiblemente de los agentes).

- `index.html`: Punto de entrada HTML de la aplicación.
- `package.json`: Define las dependencias y scripts del proyecto.
- `vite.config.js`: Configuración de Vite (herramienta de construcción).
- `tailwind.config.js`: Configuración de Tailwind CSS.
- `postcss.config.js`: Configuración de PostCSS.
- `.gitignore`: Especifica archivos ignorados por Git.
- `eslintrc.cjs`: Configuración de ESLint para el linting del código.

Esta estructura muestra un proyecto React típico construido con Vite, utilizando Tailwind CSS para estilos y ESLint para el linting del código.

## Contribución
Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría hacer.

## Licencia
[MIT](https://choosealicense.com/licenses/mit/)

## Contacto
Gabriel - [gabriel199777@outlook.com]
github: [gabiirc14](https://github.com/gabiirc14)
linkedin: [gabiirc14](www.linkedin.com/in/gabriel-fernandez97)


Enlace del Proyecto: [https://github.com/gabiirc14/Api-Valorant](https://github.com/gabiirc14/Api-Valorant)