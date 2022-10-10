import listarCategoriaId from "../services/listarCategoriaId.service.js";

const listarCategoriaIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const retorno = await listarCategoriaId(id);
    return res.status(200).json(retorno);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export default listarCategoriaIdController;
