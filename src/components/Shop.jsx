import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function Shop({ onAddToCart, onViewProduct }) {
  const [searchParams] = useSearchParams();

  const [category, setCategory] = useState(
    searchParams.get("category") || "All"
  );

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");

    setCategory(categoryFromUrl || "All");
  }, [searchParams]);

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-widest text-brand">
          DripFits Collection
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-heading">
          Shop all
        </h1>

        <p className="mt-3 max-w-xl text-body">
          Discover everyday essentials and carefully selected styles for men
          and everyone.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {["All", "Men", "Unisex", "Footwears"].map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
            className={
              category === item
                ? "rounded-full bg-brand px-5 py-2 text-sm text-white"
                : "rounded-full border border-border px-5 py-2 text-sm text-heading hover:bg-surface"
            }
          >
            {item === "All" ? "All products" : item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
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