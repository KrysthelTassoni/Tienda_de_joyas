# Tienda de Joyas - Backend

Este es el backend de una tienda de joyas, desarrollado como parte de un proyecto educativo. Proporciona una API RESTful para gestionar un inventario de joyas, permitiendo consultas, filtros y paginación.

---

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express.js**: Framework para construir aplicaciones web y APIs.
- **PostgreSQL**: Base de datos relacional para almacenar el inventario de joyas.
- **logger-express**: Middleware para generar logs de las solicitudes.

---

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.

1. Clona el repositorio:
   ```bash
   git clone https://github.com/KrysthelTassoni/Tienda_de_joyas.git

2.Navega al directorio del proyecto en tu terminal:

 cd tienda-de-joyas-backend

3.Instala las dependencias:

 npm install

4.Configura la base de datos:

 -Asegúrate de tener PostgreSQL instalado y en ejecución.

 -Crea una base de datos llamada joyas.

 -Ejecuta el script SQL proporcionado en esquemas.sql para crear la tabla e insertar datos de prueba.

5.Configura las variables de entorno:

 -Crea un archivo .env en la raíz del proyecto.

 -Agrega la siguiente configuración:

  DATABASE_URL=postgres://usuario:contraseña@localhost:5432/joyas
  PORT=3000

6.Inicia el servidor:

node index.js

## Endpoints

- Obtener todas las joyas

 Método: GET

 Ruta: /joyas

 Parámetros:

  **limits** Límite de resultados por página (por defecto: 10).

  **page**: Número de página (por defecto: 1).

  **order_by**: Ordenamiento (por defecto: id_ASC).

    ####Ejemplo URL:

       GET /joyas?limits=5&page=1&order_by=precio_ASC

- Filtrar joyas

 Método: GET

 Ruta: /joyas/filtros

 Parámetros:

  **precio_min**: Precio mínimo.

  **precio_max**: Precio máximo.

  **categoria**: Categoría de la joya.

  **metal**: Tipo de metal.

   ####Ejemplo URL:

      GET /joyas/filtros?precio_min=25000&precio_max=30000&categoria=aros&metal=plata










