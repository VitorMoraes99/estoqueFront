import React from "react";
import * as C from "./style";
import Modal from "react-modal";
import { api } from "../../api";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  value: number;
  quantity: number;
}

interface ModalProductProps {
  modalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  product: Product;
  setProduct: (product: Product) => void;
}

export function ModalEditProduct({
  modalOpen,
  setModalOpen,
  product,
  setProduct,
}: ModalProductProps) {
  const handleUpdate = async () => {
    try {
      await api.put(`/products/${product.id}`, {
        name: product.name,
        description: product.description,
        image: product.image,
        value: Number(product.value),
        quantity: Number(product.quantity),
      });

      alert("Produto atualizado com sucesso!");
      setModalOpen(false);
      window.location.reload();
    } catch (err) {
      console.error("Erro ao atualizar produto:", err);
      alert("Falha ao atualizar produto");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => setModalOpen(false)}
      style={{
        overlay: { backgroundColor: "transparent" },
        content: { padding: 0, inset: "unset" },
      }}
    >
      <C.ModalOverlay>
        <C.ModalContent>
          <C.InputAndLabel>
            <C.Label>Nome</C.Label>
            <C.Input
              type="text"
              name="name"
              placeholder="Nome"
              value={product.name}
              onChange={handleChange}
            />
          </C.InputAndLabel>
          <C.InputAndLabel>
            <C.Label>Descrição</C.Label>
            <C.Input
              type="text"
              name="description"
              placeholder="Descrição"
              value={product.description}
              onChange={handleChange}
            />
          </C.InputAndLabel>
          <C.InputAndLabel>
            <C.Label>URL:</C.Label>
            <C.Input
              type="text"
              name="image"
              placeholder="Imagem (URL)"
              value={product.image}
              onChange={handleChange}
            />
          </C.InputAndLabel>
          <C.InputAndLabel>
            <C.Label>Valor (R$)</C.Label>
            <C.Input
              type="number"
              name="value"
              placeholder="Valor"
              value={product.value}
              onChange={handleChange}
            />
          </C.InputAndLabel>
          <C.InputAndLabel>
            <C.Label>Quantidade</C.Label>
            <C.Input
              type="number"
              name="quantity"
              placeholder="Quantidade"
              value={product.quantity}
              onChange={handleChange}
            />
          </C.InputAndLabel>
          <C.Button onClick={handleUpdate}>Salvar</C.Button>
          <C.ButtonOutlined onClick={() => setModalOpen(false)}>
            Cancelar
          </C.ButtonOutlined>
        </C.ModalContent>
      </C.ModalOverlay>
    </Modal>
  );
}
