import atualizaProdutoService from "../services/atualizaProdutos.service";

const atualizaProdutosController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const retorno = await atualizaProdutoService(id, name);
    return res
      .status(200)
      .json({ message: "Product update", product: retorno });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export default atualizaProdutosController;
