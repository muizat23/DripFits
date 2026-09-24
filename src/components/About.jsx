export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-brand">
          About DripFits
        </p>

        <h1 className="mt-3 text-4xl font-semibold text-heading">
          Everyday style, made simple.
        </h1>

        <p className="mt-6 leading-8 text-body">
          DripFits is a clothing brand focused on simple, comfortable,
          and easy-to-style pieces for everyday wear.
        </p>

        <p className="mt-5 leading-8 text-body">
          We believe getting dressed should be simple. That's why we
          focus on versatile pieces that can easily fit into your
          everyday wardrobe.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-surface p-6">
          <h2 className="text-lg font-semibold text-heading">
            Simple
          </h2>
          <p className="mt-3 text-sm leading-6 text-body">
            Clean and easy-to-style pieces for everyday outfits.
          </p>
        </div>

        <div className="rounded-xl bg-surface p-6">
          <h2 className="text-lg font-semibold text-heading">
            Comfortable
          </h2>
          <p className="mt-3 text-sm leading-6 text-body">
            Clothing designed with everyday comfort in mind.
          </p>
        </div>

        <div className="rounded-xl bg-surface p-6">
          <h2 className="text-lg font-semibold text-heading">
            Versatile
          </h2>
          <p className="mt-3 text-sm leading-6 text-body">
            Pieces that can work across different looks and occasions.
          </p>
        </div>
      </div>
    </section>
  );
}