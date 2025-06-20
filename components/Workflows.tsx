import Reveal from "./Reveal";

export default function Workflows() {
    return (
        <Reveal>
            <section className="bg-white py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Text links */}
                    <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        KI-Agenten & automatisierte Workflows
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Wir entwickeln intelligente KI-Agenten, die wiederkehrende Aufgaben übernehmen – nahtlos integriert in deine Systeme.
                    </p>
                    <ul className="space-y-4 text-gray-700 list-disc list-inside mb-6">
                        <li>Reaktionszeit unter 10 Sekunden durch Echtzeit-Automation</li>
                        <li>Skalierbar & kompatibel mit bestehenden Tools</li>
                        <li>40 % weniger manuelle Aufgaben im Alltag</li>
                    </ul>
                    </div>

                    {/* Bild rechts */}
                    <div>
                    <img
                        src="/img/workflows.png"
                        alt="KI-Agenten"
                        className="w-full rounded-xl shadow-lg object-cover"
                    />
                    </div>
                </div>
            </section>
        </Reveal>
    )
}