import { prisma } from "@/lib/prisma";

export default async function OrdersPage() {
  const orders = await prisma.order.findMany({
    include: {
      items: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const revenue = orders.reduce(
    (sum, order) => sum + order.amount,
    0
  );

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-4xl font-bold">
          Orders Dashboard
        </h1>

        <a
          href="/admin/products/list"
          className="rounded-xl bg-green-600 px-4 py-2 text-white"
        >
          Manage Products
        </a>
      </div>

      <div className="mb-10 grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow">
          <h3>Total Orders</h3>
          <p className="text-3xl font-bold">
            {orders.length}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h3>Revenue</h3>
          <p className="text-3xl font-bold text-green-600">
            ₹{revenue}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h3>Pending</h3>
          <p className="text-3xl font-bold text-orange-500">
            {
              orders.filter(
                (o) => o.status === "Pending"
              ).length
            }
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <h3>Completed</h3>
          <p className="text-3xl font-bold text-green-500">
            {
              orders.filter(
                (o) => o.status === "Completed"
              ).length
            }
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl bg-white shadow">
        <table className="w-full">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-4 text-left">Customer</th>
              <th className="text-left">Phone</th>
              <th className="text-left">Amount</th>
              <th className="text-left">Status</th>
            </tr>
          </thead>

          <tbody>
  {orders.map((order) => (
    <tr key={order.id} className="border-b">

      <td className="p-4">
  <span className="rounded-lg bg-yellow-100 px-3 py-1">
    {order.status}
  </span>
</td>
      <td>{order.phone}</td>
      <td>₹{order.amount}</td>

      {/* STATUS UPDATE */}
     <td className="p-4">
  <span className="rounded-lg bg-gray-100 px-3 py-1">
    {order.status}
  </span>
</td>

    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
}