import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  UserRound,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import logo from "../assets/images/dripfit.jpeg";

export default function Navbar({ cartCount, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto max-w-7xl px-4 py-4">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          
          {/* Left - Categories / Mobile Menu */}
          <div className="justify-self-start">
            <div className="hidden items-center gap-7 text-sm text-heading md:flex">
              <Link to="/men" className="hover:text-brand">
                Men
              </Link>

              <Link to="/unisex" className="hover:text-brand">
                Unisex
              </Link>

              <Link to="/shirts" className="hover:text-brand">
                Shirts
              </Link>

              <Link to="/trousers" className="hover:text-brand">
                Trousers
              </Link>

              <Link to="/t-shirts" className="hover:text-brand">
                T-Shirts
              </Link>

              <Link to="/shop?category=Footwears" className="hover:text-brand">
                Footwears
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-heading md:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center - Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 justify-self-center"
          >
            <img
              src={logo}
              alt="DripFits logo"
              className="h-12 w-12 object-contain"
            />

            <span className="text-xl font-semibold text-brand">
              DripFits
            </span>
          </Link>

          {/* Right - Search, Account, Cart */}
          <div className="flex items-center gap-4 justify-self-end">
            <Link
              to="/search"
              className="text-heading hover:text-brand"
              aria-label="Search"
            >
              <Search size={21} />
            </Link>

            <Link
              to="/account"
              className="text-heading hover:text-brand"
              aria-label="Account"
            >
              <UserRound size={21} />
            </Link>

            <button
              onClick={onCartClick}
              className="relative text-heading hover:text-brand"
              aria-label="Shopping bag"
            >
              <ShoppingBag size={21} />

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 border-t border-border pt-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm text-heading">
              <Link to="/men" onClick={closeMenu}>
                Men
              </Link>

              <Link to="/unisex" onClick={closeMenu}>
                Unisex
              </Link>

              <Link to="/shirts" onClick={closeMenu}>
                Shirts
              </Link>

              <Link to="/trousers" onClick={closeMenu}>
                Trousers
              </Link>

              <Link to="/t-shirts" onClick={closeMenu}>
                T-Shirts
              </Link>

              <Link to="/shop?category=Footwears" onClick={closeMenu}>
  Footwears
</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}