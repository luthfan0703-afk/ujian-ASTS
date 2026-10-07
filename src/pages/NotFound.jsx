import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-24 text-center">
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <p className="text-gray-600 mb-8">
        Halaman yang kamu cari tidak ditemukan.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition"
      >
        Kembali ke Home
      </Link>
    </section>
  );
}
