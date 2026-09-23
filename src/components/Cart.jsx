export default function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove,
  onClose,
  onCheckout,
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50">
      <button
        onClick={onClose}
        className="absolute inset-0 h-full w-full bg-black/40"
        aria-label="Close cart"
      />

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-xl">
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="text-xl font-semibold text-heading">
            Your Cart
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-body hover:text-heading"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex flex-1 items-center justify-center px-6">
            <p className="text-body">
              Your cart is empty.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 border-b border-border pb-6"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-20 rounded-md object-cover"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-heading">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-body">
                        ₦{item.price.toLocaleString()}
                      </p>

                      <p className="mt-1 text-sm text-body">
                        Size: {item.size}
                      </p>

                      <div className="mt-3 flex items-center gap-3">
                        <button
                          onClick={() =>
                            onDecrease(item.id, item.size)
                          }
                          className="h-8 w-8 rounded border border-border"
                        >
                          −
                        </button>

                        <span className="text-sm">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            onIncrease(item.id, item.size)
                          }
                          className="h-8 w-8 rounded border border-border"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        onRemove(item.id, item.size)
                      }
                      className="self-start text-xs text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border px-6 py-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-base text-body">
                  Total
                </span>

                <span className="text-lg font-semibold text-heading">
                  ₦{total.toLocaleString()}
                </span>
              </div>

              <button
                onClick={onCheckout}
                className="w-full rounded-md bg-brand px-4 py-3 font-medium text-white hover:bg-brand-dark"
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}