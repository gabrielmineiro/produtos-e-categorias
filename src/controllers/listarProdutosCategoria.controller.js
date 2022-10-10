import listarProdutosCategoriaService from "../services/listarProdutosCategoria.service";

const listarProdutosCategoriaController = async (req, res) => {
  const { id } = req.params;
  try {
    const retorno = await listarProdutosCategoriaService(id);
    return res.status(200).json(retorno);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export default listarProdutosCategoriaController;
