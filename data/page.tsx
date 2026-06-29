interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetails({ params }: Props) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <img
            src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1200"
            alt="Organic Product"
            className="rounded-[40px] shadow-2xl"
          />
        </div>

        <div>
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Organic Product
          </span>

          <h1 className="mt-6 text-5xl font-extrabold">
            Organic Avocado
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Premium farm-fresh organic avocado packed with healthy nutrients and natural goodness.
          </p>
        </div>
      </div>
    </div>
  );
}