import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
const products = await prisma.product.count();

const orders = await prisma.order.findMany();

const users = await prisma.user.count();

const revenue = orders.reduce(
(sum, order) => sum + order.amount,
0
);

return ( <div className="p-8"> <h1 className="mb-8 text-4xl font-bold">
Admin Dashboard </h1>

  <div className="grid gap-6 md:grid-cols-5">

  <div className="rounded-2xl bg-white p-6 shadow">
    <h3 className="text-gray-500">Revenue</h3>
    <p className="text-3xl font-bold text-green-600">
      ₹{revenue}
    </p>
  </div>

  <div className="rounded-2xl bg-white p-6 shadow">
    <h3 className="text-gray-500">Orders</h3>
    <p className="text-3xl font-bold">
      {orders.length}
    </p>
  </div>

  <div className="rounded-2xl bg-white p-6 shadow">
    <h3 className="text-gray-500">Products</h3>
    <p className="text-3xl font-bold text-orange-500">
      {products}
    </p>
  </div>

  <div className="rounded-2xl bg-white p-6 shadow">
    <h3 className="text-gray-500">Users</h3>
    <p className="text-3xl font-bold text-purple-500">
      {users}
    </p>
  </div>

  <div className="rounded-2xl bg-white p-6 shadow">
    <h3 className="text-gray-500">Pending Orders</h3>
    <p className="text-3xl font-bold text-red-500">
      {
        orders.filter(
          (o) => o.status === "Pending"
        ).length
      }
    </p>
  </div>

</div>

  <div className="mt-10 rounded-2xl bg-white p-6 shadow">
    <h2 className="mb-4 text-2xl font-bold">
      Recent Orders
    </h2>

    {orders.slice(0, 5).map((order) => (
      <div
        key={order.id}
        className="mb-3 flex justify-between border-b pb-3"
      >
        <span>{order.customer}</span>

        <span>
          ₹{order.amount}
        </span>

        <span>{order.status}</span>
      </div>
    ))}
  </div>
</div>

);
}
