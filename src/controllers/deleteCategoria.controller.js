import deleteCategoriaService from "../services/deleteCategoria.service.js";

const deleteCategoriaController = async (req, res) => {
  const { id } = req.params;
  try {
    const retorno = await deleteCategoriaService(id);
    return res.status(204).json({ message: "categoria deletada" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export default deleteCategoriaController;
