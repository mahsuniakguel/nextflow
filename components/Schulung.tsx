import Reveal from "./Reveal";

export default function Schulung() {
    return (
      <Reveal>
        <section className="bg-white py-25 -mt-15 px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text-Bereich */}
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Schulungen für Ihr Team
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Mach dein Team fit für die KI-Zukunft. Unsere interaktiven Schulungen vermitteln praxisnahes Wissen über KI, Automatisierung und moderne Tools.
              </p>
              <ul className="space-y-4 text-gray-700 list-disc list-inside mb-6">
                <li>85 % der Unternehmen berichten von höherer Mitarbeiter-Effizienz nach KI-Schulungen</li>
                <li>Interaktive Formate, verständlich & direkt anwendbar</li>
                <li>Workshops vor Ort oder remote möglich</li>
              </ul>
            </div>
        
            {/* Bild */}
            <div>
              <img
                src="/img/schulung.jpg" // Pfad zu deinem Bild
                alt="KI-Schulungen"
                className="w-full rounded-xl shadow-xl object-cover"
              />
            </div>
          </div>
        </section>
      </Reveal>
    
    );
  }
  