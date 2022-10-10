import criarCategoriaService from "../services/criarCategoria.service.js";

const criarCategoriaController = async (req, res) => {
  const { name } = req.body;
  try {
    const retorno = await criarCategoriaService(name);
    return res
      .status(201)
      .json({ message: "Categoria criada", category: retorno });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export default criarCategoriaController;
