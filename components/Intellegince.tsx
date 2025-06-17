import Reveal from "./Reveal";

export default function IntelligenceSection() {
  return (
    <section className="bg-[#0D0D0D] text-white min-h-screen flex items-center px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center w-full">
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
    </section>
  );
}
