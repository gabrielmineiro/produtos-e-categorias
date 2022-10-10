import listarCategoriaService from "../services/listarCategorias.service.js";

const listarCategoriaController = async (req, res) => {
  try {
    const retorno = await listarCategoriaService();
    return res.status(200).json(retorno);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export default listarCategoriaController;
