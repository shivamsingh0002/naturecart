"use client";

export default function AdminOrdersTable({
  orders,
}: {
  orders: any[];
}) {
  async function updateStatus(
    id: string,
    status: string
  ) {
    await fetch("/api/orders/status", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        status,
      }),
    });

    location.reload();
  }

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
        <AdminOrdersTable orders={orders} />
      <table className="w-full">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="p-4 text-left">
              Customer
            </th>
            <th className="text-left">
              Phone
            </th>
            <th className="text-left">
              Amount
            </th>
            <th className="text-left">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-b"
            >
              <td className="p-4">
                {order.customer}
              </td>

              <td>{order.phone}</td>

              <td>
                ₹{order.amount}
              </td>

              <td>
                <select
                  defaultValue={order.status}
                  onChange={(e) =>
                    updateStatus(
                      order.id,
                      e.target.value
                    )
                  }
                  className="rounded-lg border p-2"
                >
                  <option>
                    Pending
                  </option>
                  <option>
                    Processing
                  </option>
                  <option>
                    Shipped
                  </option>
                  <option>
                    Delivered
                  </option>
                  <option>
                    Cancelled
                  </option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}