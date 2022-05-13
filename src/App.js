import './App.css';

import { useState, useEffect } from "react";
//4-custom hook
import { useFetch } from './hooks/useFetch';

function App() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3000/products";

  // 4 - Custom hook

  const { data: items, httpConfig, loading } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("")

  // 1- Resgatando Dados 
  // useEffect(() => {
  //   async function fecthData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }
  //   fecthData();
  // }, []);

  // 2 - add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault() // usado para não submeter formulário do jeito normal

    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product)
    // });

    // // 3- Carregamento dinâmico
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando POST
    httpConfig(product, "POST")

    setName(""); // zerar os inputs
    setPrice("");
  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6- Loading */}
      {loading && <p>Carregando dados...</p>}
      {!loading &&
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <span>Preço:</span>
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* 7 - State de Loading no POST */}
          {loading && <input type="submit" disabled value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;