# CRM de Usuarios con ReactJS

Este proyecto es un simple CRM (Customer Relationship Management) desarrollado utilizando ReactJS. El CRM permite gestionar clientes mediante operaciones CRUD (Crear, Leer, Actualizar, Eliminar). Se utiliza React Router DOM para la navegación entre diferentes vistas, json-server para simular una API REST y Tailwind CSS para el diseño y estilizado.

## Instalación

Antes de comenzar, asegúrese de tener Node.js y npm instalados en su máquina. Luego, siga los siguientes pasos:

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/xNoelSV/React.git
```

2. Navega al directorio del proyecto:

```bash
cd 'PROYECTO 4 - Administrador de Clientes/crm-react'
```

3. Instala las dependencias del proyecto:

```bash
npm install
```

4. Inicia el servidor JSON simulado:

```bash
json-server --watch db.json
```

5. Inicia la aplicación React:

```bash
npm run dev
```

## Uso

Una vez que la aplicación esté en funcionamiento, podrás acceder a ella en tu navegador web visitando `http://localhost:5173/`.

La aplicación consta de las siguientes vistas:

- **Clientes**: Muestra una visión general de los clientes.
- **Nuevo Cliente**: Permite crear nuevos clientes en el servidor.
- **Editar**: Proporciona información detallada sobre un usuario específico y permite editarla.
- **Error**: Página de error personalizada en caso de fallo de la aplicación.

Puedes navegar entre estas vistas utilizando la barra de navegación en la parte superior de la página o mediante los botones de rediccionamiento.

## Estructura del Proyecto

La estructura del proyecto se organiza de la siguiente manera:

- **`src/`**: Contiene todo el código fuente de la aplicación.
  - **`components/`**: Componentes reutilizables de React.
  - **`pages/`**: Componentes que representan las diferentes vistas de la aplicación.
  - **`data/`**: Contiene los endpoints para interactuar con el servidor JSON simulado.
  - **`main.jsx`**: Punto de entrada principal de la aplicación.
- **`db.json`**: Archivo JSON utilizado por json-server para simular una API REST.
- **`tailwind.config.js`**: Configuración de Tailwind CSS.

## Tecnologías Utilizadas

- **ReactJS**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router DOM**: Enrutador para la navegación entre vistas en una aplicación React.
- **json-server**: Biblioteca para crear un servidor JSON simulado.
- **Tailwind CSS**: Framework de CSS utilitario para el diseño y estilizado.

## Contribución

Las contribuciones son bienvenidas. Si desea mejorar este proyecto, por favor abra un nuevo issue para discutir los cambios propuestos.

## Licencia

Este proyecto está bajo la Licencia MIT.
