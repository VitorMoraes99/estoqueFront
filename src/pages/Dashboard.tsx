import { useEffect, useState } from "react";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";
import Resume from "../components/Resume/Resume";
import { api } from "../api";

interface Transaction {
  id: number;
  amount: number;
  type: "entrada" | "saida";
  userId: string;
  categoria: string;
}

const Dashboard: React.FC = () => {
  const [income, setIncome] = useState<string>("R$ 0.00");
  const [expense, setExpense] = useState<string>("R$ 0.00");
  const [total, setTotal] = useState<string>("R$ 0.00");
  const [transactionsList, setTransactionsList] = useState<Transaction[]>([]);

  async function getTransactions() {
    try {
      const res = await api.get<Transaction[]>("/transacoes");
      setTransactionsList(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTransactions();
  }, []);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.type === "saida")
      .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
      .filter((item) => item.type === "entrada")
      .map((transaction) => Number(transaction.amount));

    const totalExpense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const totalIncome = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const totalAmount = Math.abs(Number(totalIncome) - Number(totalExpense)).toFixed(2);

    setIncome(`R$ ${totalIncome}`);
    setExpense(`R$ ${totalExpense}`);
    setTotal(`${Number(totalIncome) < Number(totalExpense) ? "-" : ""}R$ ${totalAmount}`);
  }, [transactionsList]);

  const handleAdd = async (transaction: { amount: number; expense: boolean; desc: string }) => {
    try {
      await api.post("/transacoes", {
        amount: Number(transaction.amount),
        type: transaction.expense ? "saida" : "entrada",
        userId: localStorage.getItem("userId"),
        categoria: transaction.desc,
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
      alert("Falha ao adicionar transação");
    }
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
    </>
  );
};

export default Dashboard;
