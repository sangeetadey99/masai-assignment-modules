import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

function Products() {
  const [count, setCount] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];

  const totalPrice = useMemo(() => {
    return products.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }, [products]);

  const selectProduct = useCallback((product) => {
    alert("You selected " + product.name);
  }, []);

  return (
    <div>
      <h1>Product Dashboard</h1>

      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCount(count + 1)}>Counter: {count}</button>

      <ProductList products={products} onSelect={selectProduct} />
    </div>
  );
}

export default Products;
