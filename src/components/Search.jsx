import { useState } from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function Search({ onAddToCart, onViewProduct }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-widest text-brand">
          DripFits
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-heading">
          Search
        </h1>

        <div className="mt-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for shirts, trousers..."
            className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-brand"
          />
        </div>
      </div>

      {searchTerm && (
        <div className="mt-12">
          {filteredProducts.length > 0 ? (
            <>
              <p className="mb-6 text-sm text-body">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "item" : "items"} found
              </p>

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
            </>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg text-heading">
                No products found.
              </p>

              <p className="mt-2 text-sm text-body">
                Try searching for something else.
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}