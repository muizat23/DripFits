import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function Categories({ onAddToCart, onViewProduct }) {
  const [category, setCategory] = useState("Men");

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-widest text-brand">
          Shop by category
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-heading">
          Categories
        </h1>

        <p className="mt-3 max-w-xl text-body">
          Explore our collection by category and find pieces that fit your
          style.
        </p>
      </div>

      <div className="mb-10 flex flex-wrap gap-3">
        {["Men", "Unisex"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={
              category === item
                ? "rounded-full bg-brand px-6 py-2 text-sm text-white"
                : "rounded-full border border-border px-6 py-2 text-sm text-heading hover:bg-surface"
            }
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onViewProduct={onViewProduct}
          />
        ))}
      </div>
    </section>
  );
}
