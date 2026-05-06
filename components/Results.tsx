const cases = [
  {
    company: "TaqueriaEl Rey",
    industry: "Restaurantes",
    metric: "+340%",
    label: "pedidos online en 3 meses",
    desc: "Estrategia de Instagram Ads + SEO local que llevó al restaurante del anonimato a la primera página de Google.",
    tag: "SEO + Redes Sociales",
    color: "bg-violet-50 border-violet-100",
    tagColor: "bg-violet-100 text-violet-700",
  },
  {
    company: "MediClínica",
    industry: "Salud",
    metric: "5x",
    label: "más consultas generadas",
    desc: "Campañas de Google Ads y landing pages optimizadas que multiplicaron las consultas agendadas.",
    tag: "Google Ads + Diseño Web",
    color: "bg-indigo-50 border-indigo-100",
    tagColor: "bg-indigo-100 text-indigo-700",
  },
  {
    company: "ModaLatina Store",
    industry: "Ecommerce",
    metric: "2.8x",
    label: "ROI en publicidad pagada",
    desc: "Optimización completa del funnel de Meta Ads reduciendo el costo por venta a la mitad.",
    tag: "Meta Ads + Email",
    color: "bg-pink-50 border-pink-100",
    tagColor: "bg-pink-100 text-pink-700",
  },
];

export default function Results() {
  return (
    <section id="resultados" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Casos de éxito
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
            Resultados que hablan solos
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            No prometemos lo imposible. Prometemos estrategias probadas con métricas reales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div
              key={c.company}
              className={`rounded-2xl border p-8 ${c.color} flex flex-col gap-4`}
            >
              <span className={`self-start text-xs font-semibold px-3 py-1 rounded-full ${c.tagColor}`}>
                {c.tag}
              </span>
              <div>
                <div className="text-5xl font-extrabold text-slate-900">{c.metric}</div>
                <div className="text-sm text-slate-500 mt-1">{c.label}</div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              <div className="mt-auto pt-4 border-t border-white/60">
                <div className="font-bold text-slate-800">{c.company}</div>
                <div className="text-xs text-slate-400">{c.industry}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-gradient-to-br from-slate-900 to-violet-950 rounded-3xl p-10 text-center">
          <svg className="w-10 h-10 text-violet-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-xl text-white font-medium max-w-2xl mx-auto leading-relaxed">
            "Antes gastábamos en publicidad sin saber si funcionaba. NovaMark nos dio claridad total y triplicamos las ventas en 4 meses."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center text-white font-bold">
              CL
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">Carlos López</div>
              <div className="text-slate-400 text-xs">CEO, ModaLatina Store</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
