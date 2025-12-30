function ProductList({ products, onSelect }) {
  return (
    <div>
      <h3>Product List</h3>

      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ₹{product.price}
          </p>

          <button onClick={() => onSelect(product)}>
            Select Product
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
