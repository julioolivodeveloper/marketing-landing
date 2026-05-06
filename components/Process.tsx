const steps = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    desc: "Analizamos tu negocio, competencia y mercado. Identificamos dónde estás perdiendo oportunidades.",
  },
  {
    number: "02",
    title: "Estrategia personalizada",
    desc: "Diseñamos un plan de marketing a medida con canales, presupuesto y objetivos claros.",
  },
  {
    number: "03",
    title: "Ejecución y optimización",
    desc: "Ponemos en marcha las campañas y las optimizamos semana a semana para maximizar resultados.",
  },
  {
    number: "04",
    title: "Reportes y escalado",
    desc: "Reportes transparentes cada mes. Cuando algo funciona, lo escalamos. Cuando no, lo ajustamos.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">
            Cómo trabajamos
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900">
            Un proceso simple y efectivo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-violet-200 to-transparent -translate-y-1/2 z-0" />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-7 border border-slate-100 hover:border-violet-200 hover:shadow-lg transition-all">
                <span className="text-5xl font-extrabold text-violet-100">{step.number}</span>
                <h3 className="mt-2 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
