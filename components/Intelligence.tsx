import Reveal from "./Reveal";

export default function Intelligence() {
  return (
    <section className="bg-[#fff] min-h-screen flex flex-col justify-center -mt-30 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        {/* Textbereich im Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Linker Bereich */}
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Build your business<br />
                for the age of <span className="text-blue-500">intelligence.</span>
              </h2>
            </Reveal>
          </div>

          {/* Rechter Bereich */}
          <div>
            <Reveal>
              <div className="space-y-4 text-base md:text-lg text-gray-600">
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

        {/* Logo-Strip zentriert darunter */}
        <div className="flex justify-center items-center gap-25 mt-40">
          <img src="/logos/bmw.png" alt="BMW" className="h-12 w-auto object-contain" />
          <img src="/logos/bosch.png" alt="Bosch" className="h-12 w-auto object-contain" />
          <img src="/logos/db.png" alt="DB" className="h-12 w-auto object-contain" />
          <img src="/logos/lufthansa.png" alt="Lufthansa" className="h-12 w-auto object-contain" />
          <img src="/logos/sap.png" alt="SAP" className="h-12 w-auto object-contain" />
          <img src="/logos/siemens.png" alt="Siemens" className="h-12 w-auto object-contain" />
        </div>
      </div>
    </section>
  );
}
