import express from "express";
import { obtenerJoyas, obtenerJoyasFiltradas, calcularStockTotal } from "./models/inventario.model.js";
import log from "./middlewares/logger.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(log);

// Ruta GET /joyas
app.get("/joyas", async (req, res) => {
    try {
      const { limits = 10, page = 1, order_by = "id_ASC" } = req.query;
      const joyas = await obtenerJoyas({ limits, page, order_by });
      const stockTotal = calcularStockTotal(joyas); // Usamos las joyas ya paginadas
  
      const HATEOAS = {
        totalJoyas: joyas.length,
        stockTotal,
        results: joyas.map((joya) => ({
          name: joya.nombre,
          href: `/joyas/joya/${joya.id}`,
        })),
      };
  
      res.json(HATEOAS);
    } catch (error) {
      console.error(error); // Para depurar el error en la consola
      res.status(500).json({ error: "Error al obtener las joyas" });
    }
  });

// Ruta GET /joyas/filtros
app.get("/joyas/filtros", async (req, res) => {
    try {
      const { precio_min, precio_max, categoria, metal } = req.query;
      const joyas = await obtenerJoyasFiltradas({ precio_min, precio_max, categoria, metal });
      res.json(joyas);
    } catch (error) {
      res.status(500).json({ error: "Error al filtrar las joyas" });
    }
  });

// Ruta para manejar rutas no encontradas
app.get("*", (req, res) => {
  res.status(404).send("Esta ruta no existe");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});