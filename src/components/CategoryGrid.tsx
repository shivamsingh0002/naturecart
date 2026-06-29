import {
  Apple,
  Carrot,
  Milk,
  Wheat,
  Coffee,
  Fish,
  Candy,
  Beef,
} from "lucide-react";

const categories = [
  { title: "Fruits", icon: Apple },
  { title: "Vegetables", icon: Carrot },
  { title: "Dairy", icon: Milk },
  { title: "Grains", icon: Wheat },
  { title: "Beverages", icon: Coffee },
  { title: "Sea Food", icon: Fish },
  { title: "Snacks", icon: Candy },
  { title: "Meat", icon: Beef },
];

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Categories
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Shop By Category
          </h2>
        </div>

        <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-600 transition">
                  <Icon
                    size={34}
                    className="text-green-600 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-6 text-center text-xl font-bold">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}