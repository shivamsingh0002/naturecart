"use client";

export default function OrderStatus({
  id,
  status,
}: {
  id: string;
  status: string;
}) {
  async function updateStatus(
    value: string
  ) {
    await fetch("/api/orders/status", {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        id,
        status: value,
      }),
    });

    location.reload();
  }

  return (
    <select
      value={status}
      onChange={(e) =>
        updateStatus(e.target.value)
      }
      className="rounded-lg border p-2"
    >
      <option>Pending</option>
      <option>Processing</option>
      <option>Shipped</option>
      <option>Delivered</option>
      <option>Cancelled</option>
    </select>
  );
}