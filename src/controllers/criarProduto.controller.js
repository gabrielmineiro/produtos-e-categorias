import criarProdutoService from "../services/criarProduto.service";

const criarProdutoController = async (req, res) => {
  const { name, price } = req.body;
  try {
    const retorno = await criarProdutoService(name, price);
    return res
      .status(201)
      .json({ message: "Produto criado", product: retorno });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export default criarProdutoController;
