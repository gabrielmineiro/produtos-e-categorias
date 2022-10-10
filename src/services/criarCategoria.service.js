import database from "../database";

const criarCategoriaService = async (name) => {
  try {
    const retorno = await database.query(
      "INSERT INTO categories(name) VALUES($1) RETURNING *",
      [name]
    );
    return retorno.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
export default criarCategoriaService;
