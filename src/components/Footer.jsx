import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">

          {/* DripFits */}
          <div>
            <h2 className="text-xl font-semibold text-brand">
              DripFits
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-body">
              Curated everyday pieces for your style.
              Shop pieces that fit your look and lifestyle.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-heading">
              Shop
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-body">
              <Link
                to="/shop?category=Men"
                className="hover:text-brand"
              >
                Men
              </Link>

              <Link
                to="/shop?category=Unisex"
                className="hover:text-brand"
              >
                Unisex
              </Link>

              <Link
                to="/shop?category=Footwears"
                className="hover:text-brand"
              >
                Footwears
              </Link>

              <Link
                to="/shop"
                className="hover:text-brand"
              >
                Shop All
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-heading">
              Contact
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm text-body">
              <a
                href="#"
                className="hover:text-brand"
              >
                WhatsApp
              </a>

              <a
                href="#"
                className="hover:text-brand"
              >
                Instagram
              </a>

              <a
                href="#"
                className="hover:text-brand"
              >
                TikTok
              </a>

              <p>
               Ibadan,Oyo state, Nigeria
              </p>

              <a
                href="mailto:#"
                className="hover:text-brand"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Stay in Touch */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-heading">
              Stay in Touch
            </h3>

            <p className="mt-5 text-sm leading-6 text-body">
              Be the first to hear about new drops,
              special offers, and updates.
            </p>

            <form className="mt-5">
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
                />

                <button
                  type="submit"
                  className="w-full rounded-md bg-brand px-4 py-3 text-sm font-medium text-white hover:bg-brand-dark"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-center text-sm text-body">
            © 2026 DripFits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}