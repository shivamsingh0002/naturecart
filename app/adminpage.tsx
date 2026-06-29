export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#f7faf5]">
      
      {/* Header */}
      <div className="border-b bg-white px-8 py-6">
        <h1 className="text-4xl font-bold text-green-700">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-gray-600">
          Manage your organic ecommerce platform
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 p-8 md:grid-cols-2 lg:grid-cols-4">
        
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-gray-500">
            Total Revenue
          </h3>

          <p className="mt-4 text-4xl font-bold text-green-700">
            ₹1.2L
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-gray-500">
            Orders
          </h3>

          <p className="mt-4 text-4xl font-bold">
            320
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-gray-500">
            Customers
          </h3>

          <p className="mt-4 text-4xl font-bold">
            180
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <h3 className="text-gray-500">
            Products
          </h3>

          <p className="mt-4 text-4xl font-bold">
            85
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 px-8 pb-8 md:grid-cols-2 lg:grid-cols-3">
        
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            Product Management
          </h2>

          <p className="mt-4 text-gray-600">
            Add, edit, and manage products.
          </p>

          <button className="mt-6 rounded-2xl bg-green-600 px-6 py-3 text-white">
            Manage Products
          </button>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            Orders
          </h2>

          <p className="mt-4 text-gray-600">
            Track and manage customer orders.
          </p>

          <button className="mt-6 rounded-2xl bg-green-600 px-6 py-3 text-white">
            View Orders
          </button>
        </div>

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            Customers
          </h2>

          <p className="mt-4 text-gray-600">
            Manage customer information.
          </p>

          <button className="mt-6 rounded-2xl bg-green-600 px-6 py-3 text-white">
            View Customers
          </button>
        </div>
      </div>
    </div>
  );
}