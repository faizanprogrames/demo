"use client";

import { useState } from "react";

type CartProps = {
  product: ProductProps;
  quantity: number;
};

type ProductProps = {
  id: number;
  name: string;
  price: number;
};

const products: ProductProps[] = [
  { id: 1, name: "Apples", price: 1.99 },
  { id: 2, name: "Bananas", price: 0.99 },
  { id: 3, name: "Oranges", price: 2.49 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState<CartProps[]>([]);

  function addToCart(product: ProductProps) {
    const exisitingProductItem = cart.findIndex(
      (item) => item.product.id === product.id
    );
    if (exisitingProductItem !== -1) {
      const updatedCart = [...cart];
      updatedCart[exisitingProductItem].quantity++;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  }
  return (
    <div className="max-w-md sm:max-w-7xl mx-auto space-y-4">
      <div>
        <h2>Shopping Cart</h2>
        {cart.map((item) => (
          <div key={item.product.id}>
            {item.product.name} - ${item.product.price} - {item.quantity}
          </div>
        ))}
      </div>
      <div>
        <h2>Available Products</h2>
        {products.map((product) => (
          <div key={product.id}>
            {product.name} - ${product.price}
            <button
              className="p-2 border border-indigo-600 rounded-md mb-2 ml-2"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
