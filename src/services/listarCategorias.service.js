import database from "../database";

const listarCategoriaService = async () => {
  try {
    const retorno = await database.query("SELECT * FROM categories;");
    return retorno.rows;
  } catch (error) {
    throw new Error(error);
  }
};
export default listarCategoriaService;
