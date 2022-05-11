import './App.css';
 
import {useState, useEffect} from "react";
 
function App() {
  const [products, setProducts] = useState([]);
  const url = "http://localhost:3000/products";
 
  useEffect(() => {
    async function fecthData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fecthData();
  }, []);
 
  console.log(products);
 
  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
 
export default App;