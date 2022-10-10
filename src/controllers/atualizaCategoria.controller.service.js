import atualizaCategoriaService from "../services/atualizaCategoria.service.js";

const atualizaCategoriaController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const retorno = await atualizaCategoriaService(id, name);
    return res
      .status(200)
      .json({ message: "Category update", category: retorno });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export default atualizaCategoriaController;
