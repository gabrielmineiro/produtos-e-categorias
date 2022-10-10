import database from "../database";

const deletaProdutosService = async (id) => {
  try {
    const retorno = await database.query(
      "DELETE FROM products WHERE products.id = $1 RETURNING *;",
      [id]
    );
    if (retorno.rows.length === 0) {
      throw "id não corresponde a nenhum produto";
    }
    return retorno.rows;
  } catch (error) {
    throw new Error(error);
  }
};

export default deletaProdutosService;
