export default function AdminSidebar() {
  return (
    <aside className="min-h-screen w-72 bg-green-700 p-6 text-white">
      <h2 className="text-3xl font-bold">
        Naturally
      </h2>

      <nav className="mt-10 space-y-4">
        <a
          href="/admin"
          className="block rounded-2xl px-4 py-3 hover:bg-green-600"
        >
          Dashboard
        </a>

        <a
          href="/admin/products"
          className="block rounded-2xl px-4 py-3 hover:bg-green-600"
        >
          Products
        </a>

        <a
          href="/admin/orders"
          className="block rounded-2xl px-4 py-3 hover:bg-green-600"
        >
          Orders
        </a>

        <a
          href="/admin/customers"
          className="block rounded-2xl px-4 py-3 hover:bg-green-600"
        >
          Customers
        </a>
      </nav>
    </aside>
  );
}