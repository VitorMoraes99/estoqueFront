import React from "react";
import GridItem from "../GridItem/GridItem";
import * as C from "./styles";
import { api } from "../../api";

interface Transaction {
  id: number;
  desc: string;
  amount: number;
  expense: boolean;
}

interface GridProps {
  itens: Transaction[];
}

const Grid: React.FC<GridProps> = ({ itens }) => {
  const onDelete = async (ID: number) => {
    await api.delete(`/transacoes/${ID}`);
    window.location.reload();
  };

  return (
    <table className="table">
      <thead className="thead">
        <tr className="tr">
          <th className="th" style={{ width: "40%" }}>Descrição</th>
          <th className="th" style={{ width: "40%" }}>Valor</th>
          <th className="th" style={{ width: "10%", textAlign: "center" }}>Tipo</th>
          <th className="th" style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody className="tbody">
        {itens?.map((item) => (
          <GridItem key={item.id} item={item} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
