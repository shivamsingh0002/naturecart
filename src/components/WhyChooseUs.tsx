import {
  ShieldCheck,
  Truck,
  Leaf,
  RefreshCcw,
  ThumbsUp,
  CreditCard,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Organic Products",
    desc: "Directly sourced from verified farms",
  },
  {
    icon: Truck,
    title: "Super Fast Delivery",
    desc: "Get delivery in 10–30 minutes",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "UPI, Cards & COD supported",
  },
  {
    icon: RefreshCcw,
    title: "Easy Returns",
    desc: "Hassle-free return policy",
  },
  {
    icon: ThumbsUp,
    title: "Top Quality Assured",
    desc: "Premium grade products only",
  },
  {
    icon: CreditCard,
    title: "Best Prices Guaranteed",
    desc: "No hidden charges ever",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mb-14 text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Why NatureCart
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Trusted by Thousands of Customers
          </h2>

          <p className="mt-3 text-gray-500">
            We focus on quality, speed and trust
          </p>

        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-green-500 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-green-100 p-3 group-hover:bg-green-600 transition">
                    <Icon className="text-green-600 group-hover:text-white" size={26} />
                  </div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                </div>

                <p className="mt-4 text-gray-500">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}