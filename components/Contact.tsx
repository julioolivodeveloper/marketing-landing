"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-slate-900 via-violet-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-400">
              Hablemos
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-white leading-tight">
              ¿Listo para hacer crecer tu negocio?
            </h2>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              Agenda una consulta gratuita de 30 minutos. Sin compromiso. Te damos un diagnóstico real de tu marketing actual.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {[
                { icon: "📧", label: "Email", value: "hola@novamark.com" },
                { icon: "📱", label: "WhatsApp", value: "+52 55 1234 5678" },
                { icon: "🕐", label: "Horario", value: "Lun–Vie, 9am – 6pm" },
              ].map((i) => (
                <div key={i.label} className="flex items-center gap-4">
                  <span className="text-2xl">{i.icon}</span>
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-widest">{i.label}</div>
                    <div className="text-white font-medium">{i.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-slate-900">¡Mensaje enviado!</h3>
                <p className="mt-2 text-slate-500">Nos pondremos en contacto contigo en menos de 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-xl font-bold text-slate-900">Consulta gratuita</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                      Nombre
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Tu empresa"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                    ¿En qué podemos ayudarte?
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-violet-400"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option>SEO & Posicionamiento</option>
                    <option>Redes Sociales</option>
                    <option>Publicidad Pagada</option>
                    <option>Email Marketing</option>
                    <option>Diseño Web</option>
                    <option>Estrategia completa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                    Mensaje
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos sobre tu negocio..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-violet-200"
                >
                  Enviar y agendar consulta gratis
                </button>

                <p className="text-xs text-center text-slate-400">
                  Sin spam. Tu información está segura con nosotros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
