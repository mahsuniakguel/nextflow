export default function Footer() {
    return (
      <footer className="bg-[#0D0D0D] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Starten Sie nicht irgendwann. Starten Sie mit KI – jetzt.
            </h2>
            <p className="text-gray-300 mb-6">
              Nutzen Sie das Potenzial intelligenter Systeme, bevor es Ihr Wettbewerb tut.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition">
              Kostenloses Erstgespräch ➔
            </button>
          </div>
  
          {/* Info Section */}
          <div className="flex flex-col md:flex-row justify-between gap-12 text-sm">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">NextFlow</h3>
              <p className="text-gray-400">
                Ihr Partner für erfolgreiche KI-Transformation. Wir bringen Ihr Unternehmen mit modernster Technologie in die Zukunft.
              </p>
            </div>
  
            <div>
              <h4 className="font-bold text-lg mb-2">Services</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Schulungen</li>
                <li>KI Beratung</li>
                <li>Implementation</li>
                <li>Support</li>
              </ul>
            </div>
  
            <div>
              <h4 className="font-bold text-lg mb-2">Kontakt</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Hamburg, Deutschland</li>
                <li>+49 162 193 3122</li>
                <li>info@nextflow.ai</li>
                <li>www.nextflow.ai</li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs border-t border-gray-700 pt-6">
            <p>© 2025 NextFlow. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#">Datenschutz</a>
              <a href="#">Impressum</a>
              <a href="#">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  