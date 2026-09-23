import { useState } from "react";
import logo from "../assets/images/dripfit.jpeg";

export default function Navbar({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="DripFits logo"
              className="h-12 w-12 object-contain"
            />

            <span className="text-xl font-semibold text-brand">
              DripFits
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 text-sm text-heading md:flex">
            <a href="/" className="hover:text-brand">
              Home
            </a>

            <a href="/shop" className="hover:text-brand">
              Shop
            </a>

            <a href="/categories" className="hover:text-brand">
              Categories
            </a>

            <a href="/about" className="hover:text-brand">
              About
            </a>

            <a href="/contact" className="hover:text-brand">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="text-sm font-medium text-heading hover:text-brand"
            >
              Cart ({cartCount})
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-heading md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="mt-4 border-t border-border pt-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-heading">
              <a href="/" onClick={() => setMenuOpen(false)}>
                Home
              </a>

              <a href="/shop" onClick={() => setMenuOpen(false)}>
                Shop
              </a>

              <a href="/categories" onClick={() => setMenuOpen(false)}>
                Categories
              </a>

              <a href="/about" onClick={() => setMenuOpen(false)}>
                About
              </a>

              <a href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}