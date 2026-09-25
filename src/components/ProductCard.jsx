export default function ProductCard({
  product,
  onAddToCart,
  onViewProduct,
}) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-surface">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />

        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-heading">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="text-base font-medium text-heading">
              {product.name}
            </h2>

            <p className="mt-1 text-sm text-body">
              ₦{product.price.toLocaleString()}
            </p>
          </div>

          <button
            onClick={() => onViewProduct(product)}
            className="shrink-0 text-sm text-body underline-offset-4 hover:text-brand hover:underline"
          >
            View
          </button>
        </div>

        <button
          onClick={() => onAddToCart(product)}
          className="mt-auto pt-4 w-full rounded-md bg-brand px-4 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}