import Reveal from "./Reveal";

export default function Beratung() {
    return (
        <Reveal>
            <section className="bg-gray-50 py-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Bild links */}
                    <div>
                    <img
                        src="/img/beratung.jpg"
                        alt="KI Beratung"
                        className="w-full rounded-xl shadow-lg object-cover"
                    />
                    </div>

                    {/* Text rechts */}
                    <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Beratung mit echtem Mehrwert
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Wir analysieren, wo KI in deinem Unternehmen echten Nutzen bringt – und entwickeln eine individuell zugeschnittene Strategie für nachhaltigen Erfolg.
                    </p>
                    <ul className="space-y-4 text-gray-700 list-disc list-inside mb-6">
                        <li>Analyse & Auswahl relevanter Use Cases</li>
                        <li>Strategie- & Budgetplanung auf Führungsebene</li>
                        <li>35 % schnellere Entscheidungsprozesse durch datenbasierte Modelle</li>
                    </ul>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}