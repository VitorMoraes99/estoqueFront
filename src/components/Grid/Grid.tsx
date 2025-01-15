import React from "react";
import * as C from "./styles";
import GridItem from "../GridItem/GridItem";

interface GridProps {
  items: {
    id: number;
    name: string;
    description: string;
    image: string;
    value: number;
    quantity: number;
  }[];
  onDelete: (id: number) => void;
}

const Grid: React.FC<GridProps> = ({ items, onDelete }) => {
  return (
    <C.Container>
      <C.Table>
        <C.Thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Imagem</th>
            <th>Valor</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </C.Thead>
        <C.Tbody>
          {items.map((item) => (
            <GridItem key={item.id} item={item} onDelete={onDelete} />
          ))}
        </C.Tbody>
      </C.Table>
      {items.length === 0 && (
        <C.EmptyProductsContainer>
          <C.EmptyProductsText>Nenhum produto cadastrado.</C.EmptyProductsText>
        </C.EmptyProductsContainer>
      )}
    </C.Container>
  );
};

export default Grid;
