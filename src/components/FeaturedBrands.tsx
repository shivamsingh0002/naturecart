

const brands = [
  {
    name: "Amul",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Amul_official_logo.svg",
  },
  {
    name: "Mother Dairy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Mother_Dairy_logo.svg",
  },
  {
    name: "Patanjali",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Patanjali_Ayurved.svg",
  },
  {
    name: "Organic India",
    logo: "https://organicindia.com/cdn/shop/files/logo.png",
  },
  {
    name: "NatureLand",
    logo: "https://naturelandorganics.com/cdn/shop/files/logo.png",
  },
];

export default function FeaturedBrands() {
  return (
    <section className="py-20 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Trusted Partners
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Shop By Brand
          </h2>

          <p className="mt-3 text-gray-500">
            Trusted brands delivering premium quality products.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">

          {brands.map((brand) => (

            <div
              key={brand.name}
              className="group rounded-3xl border bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
            >

              <div className="relative mx-auto h-20 w-40">

                <div className="mx-auto flex h-20 w-40 items-center justify-center">

  <img
    src={brand.logo}
    alt={brand.name}
    className="max-h-full max-w-full object-contain"
  />

</div>

              </div>

              <h3 className="mt-6 text-center text-lg font-bold">
                {brand.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}