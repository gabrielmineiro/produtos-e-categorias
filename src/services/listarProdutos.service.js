import database from "../database";

const listarProdutosService = async () => {
  try {
    const retorno = await database.query("SELECT * FROM products;");
    return retorno.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default listarProdutosService;
