import express from "express";
import "dotenv/config";
import routes from "./routes/categorias.routes";
import routerProdutos from "./routes/produtos.routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());
app.use("/categories", routes);
app.use("/products", routerProdutos);
export default app.listen(3333, () => {
  startDatabase();
});
