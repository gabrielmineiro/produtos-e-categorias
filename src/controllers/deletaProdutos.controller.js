import deletaProdutosService from "../services/deletaProdutos.service";

const deletaProdutosController = async (req, res) => {
  const { id } = req.params;
  try {
    const retorno = await deletaProdutosService(id);
    return res.status(204).json({ message: "produto deletado" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export default deletaProdutosController;
