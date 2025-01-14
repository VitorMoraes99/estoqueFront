import React, { useState } from "react";
import Grid from "../Grid/Grid";
import * as C from "./styles";

interface Transaction {
  id: number;
  desc: string;
  amount: number;
  expense: boolean;
}

interface FormProps {
  handleAdd: (transaction: Transaction) => void;
  transactionsList: Transaction[];
  setTransactionsList: React.Dispatch<React.SetStateAction<Transaction[]>>;
}

const Form: React.FC<FormProps> = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [isExpense, setExpense] = useState<boolean>(false);

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (Number(amount) < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transaction = {
      id: generateID(),
      desc,
      amount: Number(amount),
      expense: isExpense,
    };

    handleAdd(transaction);
    setDesc("");
    setAmount("");
  };

  return (
    <>
      <C.Container>
        <C.InputContent>
          <label>Categoria</label>
          <C.Input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </C.InputContent>
        <C.InputContent>
          <label>Valor</label>
          <C.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </C.InputContent>
        <C.RadioGroup>
          <input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <label htmlFor="rIncome">Entrada</label>
          <input
            type="radio"
            id="rExpenses"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <label htmlFor="rExpenses">Saída</label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICIONAR</C.Button>
      </C.Container>
      <Grid itens={transactionsList} setItens={setTransactionsList} />
    </>
  );
};

export default Form;
