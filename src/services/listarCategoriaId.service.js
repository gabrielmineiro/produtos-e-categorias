import database from "../database";

const listarCategoriaId = async (id) => {
  try {
    const retorno = await database.query(
      "SELECT * FROM categories WHERE categories.id = $1;",
      [id]
    );
    if (retorno.rows.length === 0) {
      throw "id não corresponde a nenhum usuário";
    }
    return retorno.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
export default listarCategoriaId;
