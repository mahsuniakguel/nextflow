// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">NextFlow</h3>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-5">Services</h4>
          <ul className="space-y-5">
            <li>Schulungen</li>
            <li>KI Beratung</li>
            <li>Implementation</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-5">Kontakt</h4>
          <ul className="space-y-5">
            <li>Hamburg, Deutschland</li>
            <li>+49 162 193 3122</li>
            <li>info@nextflow.ai</li>
            <li>www.nextflow.ai</li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-semibold mb-5">Rechtliches</h4>
          <ul className="space-y-5">
            <li><a href="#">Datenschutz</a></li>
            <li><a href="#">Impressum</a></li>
            <li><a href="#">AGB</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-xs text-gray-400">
        © 2025 NextFlow. Alle Rechte vorbehalten.
      </div>
    </footer>
  );
}
