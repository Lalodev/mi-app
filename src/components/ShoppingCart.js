import { useState } from "react";

const initialCart = [
  {
    id: 1,
    title: "Product #1",
    description: "Description",
  },
  {
    id: 2,
    title: "Product #2",
    description: "Description",
  },
  {
    id: 3,
    title: "Product #3",
    description: "Description",
  },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState(initialCart);

  const deleteProduct = (productId) => {
    const changedCart = cart.filter((product) => product.id !== productId);

    setCart(changedCart);
  };

  const addProduct = (newProduct) => {
    newProduct.id = Date.now();

    const changedCart = [newProduct, ...cart];

    setCart(changedCart);
  };

  const updateProduct = (editProduct) => {
    const changedCart = cart.map((product) =>
      product.id === editProduct.id ? editProduct : product
    );

    setCart(changedCart);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button
        onClick={() =>
          addProduct({
            title: "Nuevo título",
            description: "Nueva Desc",
          })
        }
      >
        Agregar
      </button>

      {cart.map((product) => (
        <div key={product.id}>
          <h3>
            {product.id} {product.title}
          </h3>
          <p>{product.description}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button
            onClick={() =>
              updateProduct({
                id: product.id,
                title: "Edit título",
                description: "Edit Desc",
              })
            }
          >
            Update
          </button>
        </div>
      ))}

      <br />
      <br />
      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  );
};

export default ShoppingCart;
