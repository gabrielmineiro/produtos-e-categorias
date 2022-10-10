import database from "../database";

const deleteCategoriaService = async (id) => {
  try {
    const retorno = await database.query(
      "DELETE FROM categories WHERE categories.id = $1 RETURNING *;",
      [id]
    );
    if (retorno.rows.length === 0) {
      throw "id não corresponde a nenhuma categoria";
    }
    return retorno.rows;
  } catch (error) {
    throw new Error(error);
  }
};
export default deleteCategoriaService;
