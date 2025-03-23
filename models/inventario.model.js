import { pool } from "../database/connection.js";

// Obtener joyas con límite, paginación y ordenamiento
export const obtenerJoyas = async ({ limits = 10, page = 1, order_by = "id_ASC" }) => {
  let consulta = "SELECT * FROM inventario";
  const valores = [];

  if (order_by) {
    const [columna, orden] = order_by.split("_");
    consulta += ` ORDER BY ${columna} ${orden}`;
  }

  if (limits) {
    const offset = (page - 1) * limits;
    consulta += ` LIMIT $1 OFFSET $2`;
    valores.push(limits, offset);
  }

  const { rows: joyas } = await pool.query(consulta, valores);
  return joyas;
};

// Obtener joyas filtradas por precio, categoría y metal
export const obtenerJoyasFiltradas = async ({ precio_min, precio_max, categoria, metal }) => {
    let filtros = [];
    const valores = [];
    let index = 1; // Iniciar el índice en 1
  
    if (precio_min) {
      filtros.push(`precio >= $${index}`);
      valores.push(precio_min);
      index++; // Incrementar el índice
    }
    if (precio_max) {
      filtros.push(`precio <= $${index}`);
      valores.push(precio_max);
      index++; // Incrementar el índice
    }
    if (categoria) {
      filtros.push(`categoria = $${index}`);
      valores.push(categoria);
      index++; // Incrementar el índice
    }
    if (metal) {
      filtros.push(`metal = $${index}`);
      valores.push(metal);
      index++; // Incrementar el índice
    }
  
    let consulta = "SELECT * FROM inventario";
    if (filtros.length > 0) {
      consulta += ` WHERE ${filtros.join(" AND ")}`;
    }
  
    const { rows: joyas } = await pool.query(consulta, valores);
    return joyas;
  };

// Calcular el stock total de las joyas
export const calcularStockTotal = (joyas) => {
    return joyas.reduce((total, joya) => total + joya.stock, 0);
  };
