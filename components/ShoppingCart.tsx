"use client";

import { useState } from "react";

interface ProductsProps {
  id: number;
  name: string;
  price: string;
}

interface CartProps {
  product: ProductsProps;
}

const products: ProductsProps[] = [
  { id: 1, name: "product1", price: "$10" },
  { id: 100, name: "product2", price: "$20" },
  { id: 10, name: "product2", price: "$30" },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  function addToCart(product: ProductsProps) {}
  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price}
          <button
            className="ml-2 mb-2 p-2 rounded-md border-2 border-gray-600"
            onClick={() => addToCart(product)}
          >
            Add Product
          </button>
        </div>
      ))}
      <h2>Cart</h2>
    </div>
  );
}
