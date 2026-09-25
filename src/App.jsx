import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import Categories from "./components/Categories";
import About from "./components/About";
import Account from "./components/Account";
import Search from "./components/Search";

import { supabase } from "./lib/supabase";

function AppContent() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("dripfits_cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    localStorage.setItem(
      "dripfits_cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) =>
          item.id === product.id &&
          item.size === product.size
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id &&
          item.size === product.size
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  };

  const increaseQuantity = (id, size) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id && item.size === size
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id, size) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id && item.size === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id, size) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size
          )
      )
    );
  };

  const handleCheckout = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setCartOpen(false);

    if (user) {
      navigate("/checkout");
    } else {
      localStorage.setItem(
        "dripfits_checkout",
        "true"
      );

      navigate("/account");
    }
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Shop
              onAddToCart={addToCart}
              onViewProduct={setSelectedProduct}
            />
          }
        />

        <Route
          path="/shop"
          element={
            <Shop
              onAddToCart={addToCart}
              onViewProduct={setSelectedProduct}
            />
          }
        />

        <Route
          path="/categories"
          element={
            <Categories
              onAddToCart={addToCart}
              onViewProduct={setSelectedProduct}
            />
          }
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={
            <div className="mx-auto max-w-7xl px-6 py-16">
              <h1 className="text-3xl font-semibold text-heading">
                Contact Us
              </h1>

              <p className="mt-3 text-body">
                Get in touch with DripFits.
              </p>
            </div>
          }
        />

        <Route
          path="/account"
          element={<Account />}
        />

        <Route
          path="/search"
          element={
            <Search
              onAddToCart={addToCart}
              onViewProduct={setSelectedProduct}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              onClose={() => navigate("/")}
              onOrderComplete={() => {
                setCart([]);
                localStorage.removeItem("dripfits_cart");
                navigate("/");
              }}
            />
          }
        />
      </Routes>

      {cartOpen && (
        <Cart
          cart={cart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
          onClose={() => setCartOpen(false)}
          onCheckout={handleCheckout}
        />
      )}

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onAddToCart={addToCart}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;