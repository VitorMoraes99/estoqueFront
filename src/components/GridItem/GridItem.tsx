import React, { useState } from "react";
import * as C from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";
import { ModalEditProduct } from "../ModalProduct";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  value: number;
  quantity: number;
}

interface GridItemProps {
  item: Product;
  onDelete: (id: number) => void;
}

const GridItem: React.FC<GridItemProps> = ({ item, onDelete }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [product, setProduct] = useState<Product | null>(null);

  function handleOpenModal(item: Product) {
    setProduct(item);
    setOpenModal(true);
  }

  return (
    <>
      <C.Tr>
        <C.Td align="center">{item.name}</C.Td>
        <C.Td align="center">{item.description}</C.Td>
        <C.Td align="center">
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "50px", height: "50px" }}
          />
        </C.Td>
        <C.Td align="center">{item.value}</C.Td>
        <C.Td align="center">{item.quantity}</C.Td>
        <C.TdAlignCenter>
          <FaEdit onClick={() => handleOpenModal(item)} />
          <FaTrash onClick={() => onDelete(item.id)} />
        </C.TdAlignCenter>
      </C.Tr>
      {product && (
        <ModalEditProduct
          modalOpen={openModal}
          setModalOpen={setOpenModal}
          product={product}
          setProduct={setProduct}
        />
      )}
    </>
  );
};

export default GridItem;
