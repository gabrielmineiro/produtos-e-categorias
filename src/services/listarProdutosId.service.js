import database from "../database";

const listarProdutosIdService = async (id) => {
  try {
    const retorno = await database.query(
      "SELECT * FROM products WHERE products.id = $1;",
      [id]
    );
    return retorno.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
export default listarProdutosIdService;
