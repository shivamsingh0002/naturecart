import {
  Truck,
  ShieldCheck,
  Leaf,
  Clock4,
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    subtitle: "Above ₹499",
  },
  {
    icon: Clock4,
    title: "10 Minute Delivery",
    subtitle: "Selected Cities",
  },
  {
    icon: Leaf,
    title: "100% Organic",
    subtitle: "Farm Fresh",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    subtitle: "UPI • Cards • COD",
  },
];

export default function QuickServices() {
  return (
    <section className="mx-auto -mt-10 max-w-7xl px-6 relative z-20">
      <div className="grid gap-5 rounded-3xl bg-white p-6 shadow-xl md:grid-cols-2 lg:grid-cols-4">
        {services.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4 rounded-2xl p-4 transition hover:bg-green-50"
            >
              <div className="rounded-2xl bg-green-100 p-3">
                <Icon className="text-green-600" size={26} />
              </div>

              <div>
                <h3 className="font-bold">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}