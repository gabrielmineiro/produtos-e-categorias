import database from "../database";

const atualizaProdutoService = async (id, name) => {
  try {
    const retorno = await database.query(
      "UPDATE products SET name = $1 WHERE products.id = $2 RETURNING *;",
      [name, id]
    );
    return retorno.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
export default atualizaProdutoService;
