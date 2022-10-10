import database from "../database";

const listarProdutosCategoriaService = async (id) => {
  try {
    const retorno = await database.query(
      "SELECT products.name, products.price, categories.name AS category FROM products JOIN categories ON categories.id = products.category_id WHERE products.category_id = $1;",
      [id]
    );
    return retorno.rows;
  } catch (error) {
    throw new Error(error);
  }
};
export default listarProdutosCategoriaService;
