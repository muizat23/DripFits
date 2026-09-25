import { useState } from "react";

export default function ProductDetails({
  product,
  onAddToCart,
  onClose,
}) {
  const defaultSizes = ["S", "M", "L", "XL", "XXL"];

  const sizes = product.sizes || defaultSizes;

  const [selectedSize, setSelectedSize] = useState("");

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    onAddToCart({
      ...product,
      size: selectedSize,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-background">
        <div className="grid md:grid-cols-2">
          <div className="p-4">
            <img
              src={product.image}
              alt={product.name}
              className="h-[400px] w-full rounded-lg object-cover"
            />
          </div>

          <div className="p-6">
            <button
              onClick={onClose}
              className="mb-6 text-sm text-body hover:text-heading"
            >
              Close
            </button>

            <p className="text-sm uppercase tracking-widest text-brand">
              {product.category}
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-heading">
              {product.name}
            </h2>

            <p className="mt-4 text-xl font-semibold text-heading">
              ₦{product.price.toLocaleString()}
            </p>

            <p className="mt-4 text-body">
              Quality pieces selected for your everyday style.
            </p>

            <div className="mt-8">
              <p className="mb-3 text-sm font-medium text-heading">
                Select Size
              </p>

              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-md border px-4 py-2 text-sm ${
                      selectedSize === size
                        ? "border-brand bg-brand text-white"
                        : "border-border text-heading hover:border-brand"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="mt-8 w-full rounded-md bg-brand px-4 py-3 font-medium text-white hover:bg-brand-dark"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}