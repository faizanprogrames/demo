"use client";

import { useState } from "react";

type ProductProps = {
  id: number;
  name: string;
  price: number;
};

type CartProps = {
  product: ProductProps;
  quantity: number;
}

const products: ProductProps[] = [
  { id: 1, name: "product1", price: 2.0 },
  { id: 2, name: "product2", price: 1.5 },
  { id: 3, name: "product3", price: 0.1 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addToCart(product: ProductProps) {
    const existingItemIndex = cart.findIndex(item => item.product)
  }
  return (
    <div>
      <h2>Shopping Cart</h2>
      <h2>Available Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price}
          <button className="p-2 border-indigo-600 border rounded-md ml-2 mb-2"
          onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
