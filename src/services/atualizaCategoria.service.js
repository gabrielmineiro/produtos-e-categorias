import database from "../database";

const atualizaCategoriaService = async (id, name) => {
  try {
    const retorno = await database.query(
      "UPDATE categories SET name = $1 WHERE categories.id = $2 RETURNING *;",
      [name, id]
    );
    return retorno.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
export default atualizaCategoriaService;
