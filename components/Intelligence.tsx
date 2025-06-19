import Reveal from "./Reveal";

export default function Intelligence() {
  return (
    <section className="bg-[#0D0D0D] text-white min-h-screen flex items-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Build your business<br />
                for the age of <span className="text-blue-500">intelligence.</span>
              </h2>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="space-y-4 text-base md:text-lg text-gray-300">
                <p>
                  <strong>KI ist kein Trend</strong>, sondern der größte Business-Shift unserer Zeit. <br />
                  Über 80 % der Unternehmen setzen sie bereits ein.
                </p>
                <p>
                  Wer KI strategisch nutzt, erzielt <strong>bis zu 40 % mehr Effizienz</strong> und
                  <strong> 35 % schnellere Entscheidungen</strong>.
                </p>
                <p>
                  Die Frage ist nicht ob, sondern wann. Nutze das Potenzial – bevor es dein Wettbewerb tut.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Logo Strip */}
        <div className="mt-30 flex justify-center">
          <div className="whitespace-nowrap flex gap-25">
            <img src="/logos/bmw.png" alt="BMW Logo" className="h-12 object-contain" />
            <img src="/logos/bosch.png" alt="Bosch Logo" className="h-12 object-contain" />
            <img src="/logos/db.png" alt="Deutsche Bahn Logo" className="h-12 object-contain" />
            <img src="/logos/lufthansa.png" alt="Lufthansa Logo" className="h-12 object-contain" />
            <img src="/logos/sap.png" alt="SAP Logo" className="h-12 object-contain" />
            <img src="/logos/siemens.png" alt="Siemens Logo" className="h-12 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}