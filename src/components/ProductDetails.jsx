import { useState } from "react";

export default function ProductDetails({
  product,
  onAddToCart,
  onClose,
}) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(product.image);

  const productImages = product.images || [product.image];

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      alert("Please select a size.");
      return;
    }

    onAddToCart({
      ...product,
      ...(product.sizes ? { size: selectedSize } : {}),
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 p-4">
      <div className="mx-auto min-h-[90vh] w-full max-w-5xl rounded-xl bg-background">
        <div className="grid md:grid-cols-2">
          
          {/* Images */}
          <div className="p-4">
            <div className="overflow-hidden rounded-lg bg-surface">
              <img
                src={selectedImage}
                alt={product.name}
                className="h-[400px] w-full object-cover"
              />
            </div>

            {productImages.length > 1 && (
              <div className="mt-4 grid grid-cols-5 gap-2">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    className={`overflow-hidden rounded-md border-2 ${
                      selectedImage === image
                        ? "border-brand"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="h-20 w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
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

            {product.sizes && (
              <div className="mt-8">
                <p className="mb-3 text-sm font-medium text-heading">
                  Select Size
                </p>

                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={
                        selectedSize === size
                          ? "rounded-md border border-brand bg-brand px-4 py-2 text-sm text-white"
                          : "rounded-md border border-border px-4 py-2 text-sm text-heading hover:border-brand"
                      }
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

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