export default function TestimonialSection() {
  return (
    <section className="py-20 bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-12 text-center text-5xl font-extrabold">
          What Customers Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl p-8 shadow-lg">
            <p>
              Amazing quality and super fast delivery.
            </p>
            <h4 className="mt-4 font-bold">
              Rahul Sharma
            </h4>
          </div>

          <div className="rounded-3xl p-8 shadow-lg">
            <p>
              Fresh vegetables every time.
            </p>
            <h4 className="mt-4 font-bold">
              Priya Singh
            </h4>
          </div>

          <div className="rounded-3xl p-8 shadow-lg">
            <p>
              Best organic store online.
            </p>
            <h4 className="mt-4 font-bold">
              Amit Kumar
            </h4>
          </div>

        </div>

      </div>

    </section>
  );
}