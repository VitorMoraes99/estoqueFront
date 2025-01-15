import {  useState } from "react";
import Form from "../components/Form/Form";
import Header from "../components/Header/Header";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  value: number;
  quantity: number;
}

const Dashboard: React.FC = () => {
  const [productsList, setProductsList] = useState<Product[]>([]);
  return (
    <>
      <Header />
      <Form productsList={productsList} setProductsList={setProductsList} />
    </>
  );
};

export default Dashboard;
