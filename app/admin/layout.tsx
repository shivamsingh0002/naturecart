import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-green-700 text-white p-6">
        <h1 className="mb-8 text-2xl font-bold">
          NatureCart Admin
        </h1>

        <nav className="space-y-4">
          <Link href="/admin/dashboard" className="block">
            Dashboard
          </Link>

          <Link href="/admin/products/list" className="block">
            Products
          </Link>

          <Link href="/admin/orders" className="block">
            Orders
          </Link>

          <Link href="/admin/users" className="block">
            Users
          </Link>

          <Link href="/admin/settings" className="block">
            Settings
          </Link>
        </nav>
      </aside>

      <main className="flex-1 bg-gray-100 p-8">
        {children}
      </main>
    </div>
  );
}