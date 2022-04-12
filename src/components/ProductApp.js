import { useState } from "react";

const initialProduct = {
  title: "Titulo",
  description: "Descripción",
};

const ProductApp = () => {
  const [product, setProduct] = useState(initialProduct);

  const updateProduct = (property, value) => {
    setProduct({
      ...product,
      [property]: value,
    });
  };

  return (
    <div>
      <h2>Product App</h2>
      <button onClick={() => updateProduct("description", "Nueva descriptin")}>
        Update
      </button>
      <h3>{product.title}</h3>
      <h4>{product.description}</h4>
      <h2>Imprimiendo un JSON</h2>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </div>
  );
};

export default ProductApp;
