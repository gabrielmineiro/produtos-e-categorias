import database from "../database";

const criarProdutoService = async (name, price) => {
  if (!name || !price) {
    throw new Error(error);
  }
  try {
    const retorno = await database.query(
      "INSERT INTO products(name, price) VALUES ($1, $2) RETURNING *;",
      [name, price]
    );
    return retorno.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
export default criarProdutoService;
