
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Apple Vendors",
    image: "https://via.placeholder.com/300x200?text=Sneakers",
    price: "$7.00",
  },
  {
    id: 2,
    name: "Essentials Vendors",
    image: "https://via.placeholder.com/300x200?text=Hoodie",
    price: "$7.00",
  },
  {
    id: 3,
    name: "Designer Clothing Vendors",
    image: "https://via.placeholder.com/300x200?text=Watch",
    price: "$10.00",
  },
    {
    id: 4,
    name: "Shoe Vendors",
    image: "https://via.placeholder.com/300x200?text=Watch",
    price: "$5.00",
  },
    {
    id: 5,
    name: "Nike Vendors",
    image: "https://via.placeholder.com/300x200?text=Watch",
    price: "$5.00",
  },
];

const Navbar = ({ cartCount }) => (
  <nav className="bg-black text-white p-4 flex justify-between items-center shadow-md">
    <h1 className="text-2xl font-bold text-purple-500">TopResells</h1>
    <div className="space-x-4">
      <Link to="/" className="hover:text-purple-400">Home</Link>
      <Link to="/products" className="hover:text-purple-400">Products</Link>
      <Link to="/cart" className="hover:text-purple-400">Cart ({cartCount})</Link>
    </div>
  </nav>
);

const Home = () => (
  <div className="text-center text-white bg-black min-h-screen flex flex-col justify-center items-center">
    <h1 className="text-5xl font-bold mb-4 text-purple-500">Welcome to TopResells</h1>
    <p className="text-lg max-w-xl text-gray-300">
      Discover and resell exclusive fashion drops, luxury collectibles, and trending items. Join the hustle.
    </p>
    <Link
      to="/products"
      className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition"
    >
      View Products
    </Link>
  </div>
);

const Products = ({ addToCart }) => (
  <div className="bg-black min-h-screen text-white p-8">
    <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">Our Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-900 rounded-xl shadow-md p-4 hover:shadow-purple-500 transition"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-purple-400">{product.name}</h3>
          <p className="text-gray-300 mt-2">{product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
);

const Cart = ({ cart }) => (
  <div className="bg-black min-h-screen text-white p-8">
    <h2 className="text-3xl font-bold text-purple-500 mb-6 text-center">Your Cart</h2>
    {cart.length === 0 ? (
      <p className="text-center text-gray-400">Your cart is empty.</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cart.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-md p-4 hover:shadow-purple-500 transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-purple-400">{item.name}</h3>
            <p className="text-gray-300 mt-2">{item.price}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router basename="/">
      <div className="font-sans">
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}
