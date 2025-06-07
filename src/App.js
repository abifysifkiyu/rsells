import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Sample Product',
    price: 10,
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Another Product',
    price: 20,
    image: '/images/product2.jpg',
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const addToCart = (product, qty) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: qty }]);
    }
    setSelectedProduct(null);
    setQuantity(1);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleBuy = () => {
    window.location.href = 'https://discord.gg/slang';
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="p-6 flex justify-between items-center bg-purple-800 shadow-md">
        <h1 className="text-3xl font-bold">TopResells</h1>
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
        >
          Cart ({cart.reduce((a, b) => a + b.quantity, 0)})
        </button>
      </header>

      {/* Products */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p className="text-purple-400">${product.price}</p>
            </div>
          </div>
        ))}
      </main>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-xl font-bold mb-4">{selectedProduct.name}</h3>
            <p className="mb-2">${selectedProduct.price}</p>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={e => setQuantity(parseInt(e.target.value))}
              className="w-full mb-4 px-3 py-2 border rounded"
            />
            <div className="flex justify-between">
              <button
                onClick={() => addToCart(selectedProduct, quantity)}
                className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800"
              >
                Add to Cart
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-600 px-4 py-2 hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-lg w-96 max-h-[80vh] overflow-y-auto shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Your Cart</h3>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center mb-4">
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p>${item.price} × {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <hr className="my-4" />
                <p className="text-lg font-semibold">Total: ${getTotal()}</p>
                <button
                  onClick={handleBuy}
                  className="mt-4 w-full bg-purple-800 text-white py-2 rounded hover:bg-purple-900"
                >
                  Buy
                </button>
              </>
            )}
            <button
              onClick={() => setShowCart(false)}
              className="mt-4 text-gray-600 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
