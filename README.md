# Tienda de Joyas - Backend

Este es el backend de una tienda de joyas, desarrollado como parte de un proyecto educativo. Proporciona una API RESTful para gestionar un inventario de joyas, permitiendo consultas, filtros y paginación.

---

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución de JavaScript.
- **Express.js**: Framework para construir aplicaciones web y APIs.
- **PostgreSQL**: Base de datos relacional para almacenar el inventario de joyas.
- **logger-express**: Middleware para generar logs de las solicitudes.

---

## Uso
El servidor estará disponible en http://localhost:3000. A continuación, se describen los endpoints disponibles.

---

## Endpoints

- Obtener todas las joyas
Método: GET

Ruta: /joyas

Parámetros:

**limits** Límite de resultados por página (por defecto: 10).

**page**: Número de página (por defecto: 1).

**order_by**: Ordenamiento (por defecto: id_ASC).

- Filtrar joyas
Método: GET

Ruta: /joyas/filtros

Parámetros:

**precio_min**: Precio mínimo.

**precio_max**: Precio máximo.

**categoria**: Categoría de la joya.

**metal**: Tipo de metal.