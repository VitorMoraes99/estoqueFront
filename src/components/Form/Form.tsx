import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Grid from "../Grid/Grid";
import * as C from "./styles";
import { api } from "../../api";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  value: number;
  quantity: number;
}

interface FormProps {
  productsList: Product[];
  setProductsList: React.Dispatch<React.SetStateAction<Product[]>>;
}

const Form: React.FC<FormProps> = ({ productsList, setProductsList }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get<Product[]>("/products/");
        setProductsList(response.data);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
        alert("Não foi possível carregar os produtos.");
      }
    };

    fetchProducts();
  }, [setProductsList]);

  const handleSave = async () => {
    if (!name || !description || !image || !value || !quantity) {
      alert("Preencha todos os campos!");
      return;
    } else if (Number(value) < 1 || Number(quantity) < 1) {
      alert("O valor e a quantidade devem ser positivos!");
      return;
    }

    const product = {
      name,
      description,
      image,
      value: Number(value),
      quantity: Number(quantity),
    };

    try {
      const response = await api.post("/products/register", product);
      setProductsList((prev) => [...prev, response.data]);
      alert("Produto salvo com sucesso!");
    } catch (err) {
      console.error("Erro ao salvar produto:", err);
      alert("Não foi possível salvar o produto.");
    }

    setName("");
    setDescription("");
    setImage("");
    setValue("");
    setQuantity("");
    setModalIsOpen(false);
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/products/${id}`);
      setProductsList((prev) => prev.filter((product) => product.id !== id));
      alert("Produto deletado com sucesso!");
    } catch (err) {
      console.error("Erro ao deletar produto:", err);
      alert("Não foi possível deletar o produto.");
    }
  };

  return (
    <>
      <C.FloatingButton onClick={() => setModalIsOpen(true)}>
        +
      </C.FloatingButton>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: { backgroundColor: "transparent" },
          content: { padding: 0, inset: "unset" },
        }}
      >
        <C.ModalOverlay>
          <C.ModalContent>
            <C.Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <C.Input
              type="text"
              placeholder="Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <C.Input
              type="text"
              placeholder="Imagem (URL)"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <C.Input
              type="number"
              placeholder="Valor"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <C.Input
              type="number"
              placeholder="Quantidade"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <C.Button onClick={handleSave}>Salvar</C.Button>
            <C.ButtonOutlined onClick={() => setModalIsOpen(false)}>
              Cancelar
            </C.ButtonOutlined>
          </C.ModalContent>
        </C.ModalOverlay>
      </Modal>
      <Grid items={productsList} onDelete={handleDelete} />
    </>
  );
};

export default Form;
