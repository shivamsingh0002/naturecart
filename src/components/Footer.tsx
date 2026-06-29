export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-4">

          <div>
            <h2 className="text-4xl font-extrabold text-green-500">
              🌿 NatureCart
            </h2>

            <p className="mt-4 text-gray-400">
              India's trusted organic grocery marketplace.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">
              Company
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">
              Support
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
              <li>Refunds</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">
              Download App
            </h3>

            <button className="mb-3 block rounded-xl bg-white px-5 py-3 text-black">
              📱 Google Play
            </button>

            <button className="rounded-xl bg-white px-5 py-3 text-black">
              🍎 App Store
            </button>
          </div>

        </div>

        <div className="mt-16 border-t border-gray-800 pt-6 text-center text-gray-500">
          © 2026 NatureCart. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}