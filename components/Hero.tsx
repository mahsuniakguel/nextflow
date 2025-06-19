// components/Hero.tsx
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative bg-[#ffff] overflow-hidden py-36 px-6 md:px-12">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/bg-pattern.svg')] bg-cover bg-center opacity-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-left">
        <Reveal>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            KI einführen. <span className="text-blue-500">Prozesse</span><br />
            beschleunigen. Wachstum steigern.
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-gray-600 text-lg max-w-2xl mb-8">
            Transformieren Sie Ihr Unternehmen mit maßgeschneiderten KI-Lösungen. Wir begleiten Sie von der Beratung bis zur erfolgreichen Implementierung intelligenter Systeme.
          </p>
        </Reveal>

        <Reveal>
          <div className="flex gap-4">
            <a
              href="https://calendly.com/mahsuniakgul"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Termin vereinbaren
            </a>
            <a
              href="#features"
              className="hover:underline px-6 py-3 rounded-full font-medium transition"
            >
              Mehr erfahren 
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
