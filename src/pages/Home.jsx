import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { cards } from "../data/cards";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <p className="text-sm text-gray-500 mb-2">Pusat Bantuan</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pertanyaan Umum</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Temukan jawaban dari pertanyaan yang paling sering ditanyakan pengguna
          kami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Link
            key={card.id}
            to={`/detail/${card.slug}`}
            className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <span className="text-sm font-mono text-gray-400">0{card.id}</span>
            <h3 className="text-lg font-semibold mt-2 mb-2">{card.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{card.shortDesc}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-black">
              Lihat detail
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
