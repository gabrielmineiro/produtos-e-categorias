import listarProdutosService from "../services/listarProdutos.service";

const listarProdutosController = async (req, res) => {
  try {
    const retorno = await listarProdutosService();
    return res.status(200).json(retorno);
  } catch (error) {
    return res.status(400).message({ message: error.message });
  }
};
export default listarProdutosController;
