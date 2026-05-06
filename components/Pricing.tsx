const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/mes",
    desc: "Ideal para negocios que están comenzando a invertir en marketing digital.",
    features: [
      "Gestión de 2 redes sociales",
      "8 publicaciones al mes",
      "Reporte mensual básico",
      "Soporte por email",
      "Auditoría SEO inicial",
    ],
    cta: "Comenzar",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$999",
    period: "/mes",
    desc: "El plan más popular para negocios que quieren crecer de forma acelerada.",
    features: [
      "Gestión de 4 redes sociales",
      "20 publicaciones al mes",
      "Campaña Google Ads (hasta $1,500 ad spend)",
      "Reporte semanal con métricas",
      "SEO técnico continuo",
      "Email marketing (2 campañas/mes)",
      "Soporte prioritario",
    ],
    cta: "Empezar ahora",
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    desc: "Para empresas con necesidades avanzadas que requieren una estrategia 360°.",
    features: [
      "Todo lo de Growth",
      "Estrategia omnicanal completa",
      "Campañas multi-plataforma sin límite",
      "Diseño web y landing pages",
      "Account manager dedicado",
      "Reunión estratégica semanal",
    ],
    cta: "Contactar equipo",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Planes
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
            Inversión transparente
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-xl mx-auto">
            Sin contratos eternos. Sin costos ocultos. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 flex flex-col gap-6 border transition-all ${
                p.highlight
                  ? "bg-violet-600 border-violet-500 shadow-2xl shadow-violet-900/40 scale-105"
                  : "bg-white border-slate-100 hover:border-violet-200 hover:shadow-lg"
              }`}
            >
              <div>
                <div
                  className={`text-sm font-semibold uppercase tracking-widest ${
                    p.highlight ? "text-violet-200" : "text-violet-600"
                  }`}
                >
                  {p.name}
                </div>
                <div className="mt-2 flex items-end gap-1">
                  <span
                    className={`text-4xl font-extrabold ${
                      p.highlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {p.price}
                  </span>
                  <span
                    className={`text-sm mb-1 ${
                      p.highlight ? "text-violet-200" : "text-slate-400"
                    }`}
                  >
                    {p.period}
                  </span>
                </div>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    p.highlight ? "text-violet-100" : "text-slate-500"
                  }`}
                >
                  {p.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        p.highlight ? "text-violet-200" : "text-violet-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        p.highlight ? "text-white" : "text-slate-600"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`mt-auto text-center px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                  p.highlight
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
