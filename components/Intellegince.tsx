import Reveal from "./Reveal";

export default function Intelligence() {
    return (
      <Reveal>
      <section className="bg-[#0D0D0D] text-white py-40 px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Build your business<br />
              for the age of <span className="text-blue-500">intelligence.</span>
            </h2>
          </div>
  
          <div className="flex-1 text-gray-200 text-base leading-relaxed max-w-xl">
            <p>
              <strong>KI ist kein Trend</strong>, sondern der größte Business-Shift unserer Zeit.<br />
              Über 80 % der Unternehmen setzen sie bereits ein.<br />
              Wer KI strategisch nutzt, erzielt <strong>bis zu 40 % mehr Effizienz und 35 % schnellere Entscheidungen</strong>.<br />
              Die Frage ist nicht ob, sondern wann. Nutze das Potenzial – bevor es dein Wettbewerb tut.
            </p>
          </div>
        </div>
      </section>
      </Reveal>
    );
  }