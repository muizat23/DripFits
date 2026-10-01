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

            <div className="mt-5 flex flex-col gap-4 text-sm text-body">

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348050557666"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-brand"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.88 11.88 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.96L.05 24l6.28-1.65a11.88 11.88 0 0 0 5.71 1.46h.01c6.55 0 11.89-5.34 11.89-11.91 0-3.18-1.24-6.16-3.42-8.42ZM12.05 21.8h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.86 9.86 0 0 1-1.52-5.28C2.17 6.46 6.61 2 12.05 2c2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.9 7c0 5.45-4.44 9.9-9.89 9.9Zm5.43-7.42c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.68-1.64-.93-2.25-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.12-.28-.2-.58-.35Z" />
                </svg>

                <span>WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/drip_fits12/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-brand"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>

                <span>Instagram</span>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@drip..fits"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-brand"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  fill="currentColor"
                >
                  <path d="M15.72 3c.24 1.92 1.33 3.08 3.28 3.2v2.27c-1.1.1-2.15-.25-3.24-.92v6.52c0 4.16-2.28 6.6-5.82 6.6-3.47 0-5.94-2.22-5.94-5.54 0-3.26 2.52-5.64 5.88-5.64.37 0 .75.03 1.13.09v2.34a5.6 5.6 0 0 0-1.13-.12c-1.97 0-3.48 1.3-3.48 3.28 0 1.9 1.36 3.2 3.3 3.2 2.02 0 3.58-1.36 3.58-4.18V3h2.44Z" />
                </svg>

                <span>TikTok</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20 10.5c0 5.5-8 11-8 11s-8-5.5-8-11a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10.5" r="2.5" />
                </svg>

                <span>Ibadan, Oyo State, Nigeria</span>
              </div>

              {/* Email */}
              <a
                href="mailto:hammedmariam45@gmail.com"
                className="flex items-center gap-3 hover:text-brand"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />
                  <path d="m4 7 8 6 8-6" />
                </svg>

                <span>Email</span>
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