
import React, { useState } from "react";

const sampleProducts = [
  { id: 1, name: "Product A", price: 10, image: "/images/product1.jpg" },
  { id: 2, name: "Product B", price: 20, image: "/images/product2.jpg" }
];

export default function Products() {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const addToCart = (product) => {
    const quantity = quantities[product.id] || 1;
    const newCart = [...cart];
    const index = newCart.findIndex(item => item.id === product.id);
    if (index >= 0) {
      newCart[index].quantity += quantity;
    } else {
      newCart.push({ ...product, quantity });
    }
    setCart(newCart);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, value) => {
    setQuantities({ ...quantities, [id]: parseInt(value) });
  };

  const checkout = () => {
    window.location.href = "https://discord.gg/slang";
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {sampleProducts.map(product => (
          <div key={product.id} className="bg-purple-900 rounded p-4 shadow">
            <img src={product.image} alt={product.name} className="rounded mb-3" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>${product.price}</p>
            <input
              type="number"
              min="1"
              value={quantities[product.id] || 1}
              onChange={e => updateQuantity(product.id, e.target.value)}
              className="mt-2 w-full p-1 rounded text-black"
            />
            <button
              onClick={() => addToCart(product)}
              className="mt-2 w-full bg-purple-700 hover:bg-purple-800 text-white py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-4">Cart</h3>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="mb-2 flex justify-between items-center bg-purple-800 p-2 rounded">
              <div>{item.name} x {item.quantity}</div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-400">Remove</button>
            </div>
          ))}
          <button onClick={checkout} className="mt-4 bg-green-600 hover:bg-green-700 py-2 px-4 rounded text-white">
            Buy
          </button>
        </div>
      )}
    </div>
  );
}
