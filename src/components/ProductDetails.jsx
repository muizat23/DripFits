import { useState } from "react";

export default function ProductDetails({
  product,
  onAddToCart,
  onClose,
}) {
  const [selectedSize, setSelectedSize] = useState("M");

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      size: selectedSize,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="relative grid w-full max-w-3xl overflow-hidden rounded-xl bg-background md:grid-cols-2">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 text-2xl text-body hover:text-heading"
          aria-label="Close product details"
        >
          ×
        </button>

        <div className="aspect-[3/4] bg-surface">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:p-8">
          <p className="text-sm uppercase tracking-widest text-brand">
            {product.category}
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-heading">
            {product.name}
          </h2>

          <p className="mt-3 text-lg text-heading">
            ₦{product.price.toLocaleString()}
          </p>

          <p className="mt-5 leading-7 text-body">
            A versatile everyday piece designed for comfort and easy styling.
            Pair it with your favourite essentials for a simple, effortless
            look.
          </p>

          <div className="mt-6">
            <p className="mb-3 text-sm font-medium text-heading">
              Select size
            </p>

            <div className="flex flex-wrap gap-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={
                    selectedSize === size
                      ? "rounded-md bg-brand px-4 py-2 text-sm text-white"
                      : "rounded-md border border-border px-4 py-2 text-sm text-heading hover:bg-surface"
                  }
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-8 w-full rounded-md bg-brand px-4 py-3 text-sm font-medium text-white hover:bg-brand-dark"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}