export default function Features() {
    return (
      <section className="bg-white py-20 px-8">
        <div className="max-w-6xl mx-auto space-y-24">
  
          {/* Schulungen */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Schulungen für Ihre Teams</h3>
              <p className="font-semibold mb-2">Mach dein Team fit für die KI-Zukunft.</p>
              <p className="text-gray-700 max-w-xl">
                Wir vermitteln praxisnahes Wissen rund um KI, Automatisierung und moderne Tools – verständlich, interaktiv und direkt anwendbar im Arbeitsalltag.
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-gray-300 rounded-xl h-64 w-full"></div>
            </div>
          </div>
  
          {/* Beratung */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="bg-gray-300 rounded-xl h-64 w-full"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Beratung anhand individueller Use Cases</h3>
              <p className="font-semibold mb-2">
                Wir analysieren, wo KI in deinem Unternehmen echten Mehrwert schafft.
              </p>
              <p className="text-gray-700 max-w-xl">
                Gemeinsam identifizieren wir konkrete Anwendungsfälle und entwickeln individuelle Strategien zur erfolgreichen Integration von KI in deine Prozesse.
              </p>
            </div>
          </div>
  
          {/* KI-Agenten */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">KI-Agenten und reibungslose Workflows</h3>
              <p className="font-semibold mb-2">
                Automatisiere repetitive Aufgaben mit intelligenten KI-Lösungen.
              </p>
              <p className="text-gray-700 max-w-xl">
                Wir entwickeln KI-Agenten, die eigenständig Aufgaben erledigen – nahtlos integriert in bestehende Systeme und optimiert für Effizienz, Geschwindigkeit und Skalierbarkeit.
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-gray-300 rounded-xl h-64 w-full"></div>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  