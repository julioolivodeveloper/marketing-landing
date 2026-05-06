export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-violet-500/20 text-violet-300 text-sm font-semibold tracking-wide uppercase border border-violet-500/30">
          Agencia de Marketing Digital
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Convierte clics en{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
            clientes reales
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Diseñamos estrategias de marketing digital que generan resultados medibles.
          SEO, redes sociales, ads, email y más — todo bajo un mismo techo.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contacto"
            className="px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-base transition-all hover:scale-105 shadow-lg shadow-violet-900/50"
          >
            Obtener consulta gratis
          </a>
          <a
            href="#servicios"
            className="px-8 py-4 rounded-full border border-slate-500 text-slate-200 hover:border-violet-400 hover:text-violet-300 font-semibold text-base transition-colors"
          >
            Ver servicios
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: "200+", label: "Clientes activos" },
            { value: "3.5x", label: "ROI promedio" },
            { value: "98%", label: "Retención" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-extrabold text-white">{s.value}</div>
              <div className="text-sm text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
