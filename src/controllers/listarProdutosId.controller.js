import listarProdutosIdService from "../services/listarProdutosId.service";

const listarProdutosIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const retorno = await listarProdutosIdService(id);
    return res.status(200).json(retorno);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export default listarProdutosIdController;
