export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">

        <div className="flex gap-6">
          <span>🚚 Free Delivery Above ₹499</span>
          <span>🌱 100% Organic</span>
          <span>⚡ Same Day Delivery</span>
        </div>

        <div className="flex gap-5">
          <span>📞 +91 XXXXX XXXXX</span>
          <span>support@naturecart.com</span>
        </div>

      </div>
    </div>
  );
}