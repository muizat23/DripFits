import { useState } from "react";
import Paystack from "@paystack/inline-js";
import { supabase } from "../lib/supabase";

export default function Checkout({ cart, onClose, onOrderComplete }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handlePayment = () => {
    const paystack = new Paystack();

    paystack.checkout({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: formData.email,
      amount: total * 100,
      currency: "NGN",

      onSuccess: async (transaction) => {
        console.log("Payment successful:", transaction);

        const { error } = await supabase.from("orders").insert({
          customer_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          items: cart,
          total_amount: total,
          payment_reference: transaction.reference,
          payment_status: "paid",
        });

        if (error) {
          console.error("Order save error:", error);
          alert(
            "Payment was successful, but we couldn't save your order."
          );
          return;
        }

        alert("Order placed successfully!");

        onOrderComplete();
      },

      onCancel: () => {
        console.log("Payment cancelled");
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePayment();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-brand">
              DripFits
            </p>

            <h1 className="mt-2 text-3xl font-semibold text-heading">
              Checkout
            </h1>
          </div>

          <button
            onClick={onClose}
            className="text-sm text-body hover:text-heading"
          >
            Back to shop
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-10 md:grid-cols-2">
            {/* Customer details */}
            <div>
              <h2 className="text-xl font-semibold text-heading">
                Delivery details
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-heading">
                    Full name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-brand"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-heading">
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-brand"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-heading">
                    Phone number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                    className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-brand"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-heading">
                    Delivery address
                  </label>

                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Enter your delivery address"
                    required
                    className="w-full rounded-md border border-border px-4 py-3 outline-none focus:border-brand"
                  />
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div>
              <h2 className="text-xl font-semibold text-heading">
                Your order
              </h2>

              <div className="mt-6 space-y-5">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 border-b border-border pb-5"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-16 rounded-md object-cover"
                    />

                    <div className="flex-1">
                      <h3 className="font-medium text-heading">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-sm text-body">
                        Size: {item.size}
                      </p>

                      <p className="mt-1 text-sm text-body">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <p className="font-medium text-heading">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <span className="text-lg text-body">
                  Total
                </span>

                <span className="text-xl font-semibold text-heading">
                  ₦{total.toLocaleString()}
                </span>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md bg-brand px-4 py-3 font-medium text-white hover:bg-brand-dark"
              >
                Pay ₦{total.toLocaleString()}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}


