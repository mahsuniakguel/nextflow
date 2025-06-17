export default function TrustedBy() {
    return (
      <section className="py-15 px-8 text-center">
        <p className="font-semibold mb-6 text-lg">
          Bereits über 100+ Unternehmen haben erfolgreich KI in ihre Prozesse integriert
        </p>
        <div className="flex flex-wrap justify-center items-center gap-30">
          <img src="/logos/sap.png" alt="SAP Logo" className="h-8" />
          <img src="/logos/bosch.png" alt="Bosch Logo" className="h-8" />
          <img src="/logos/siemens.png" alt="Siemens Logo" className="h-8" />
          <img src="/logos/db.png" alt="Deutsche Bahn Logo" className="h-8" />
          <img src="/logos/bmw.png" alt="BMW Logo" className="h-8" />
          <img src="/logos/lufthansa.png" alt="Lufthansa Logo" className="h-8" />
        </div>
      </section>
    );
  }