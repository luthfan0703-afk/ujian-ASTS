import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { cards } from "../data/cards";
import { Button } from "../components/ui/button";

export default function CardDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const card = cards.find((c) => c.slug === slug);

  if (!card) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-gray-600 mb-6">
          Detail dengan slug <code>{slug}</code> tidak ditemukan.
        </p>
        <Link
          to="/"
          className="inline-block px-5 py-2 rounded-full bg-black text-white"
        >
          Kembali ke Home
        </Link>
      </section>
    );
  }

  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <Button
        variant="ghost"
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Kembali
      </Button>

      <span className="text-sm font-mono text-gray-400">Detail #{card.id}</span>
      <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">{card.title}</h1>
      <p className="text-gray-700 leading-relaxed">{card.content}</p>
    </article>
  );
}
