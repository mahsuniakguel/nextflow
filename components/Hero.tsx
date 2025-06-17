export default function Hero() {
    return (
      <section className="bg-[#f4f4f4] py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              KI einführen. <span className="text-blue-500">Prozesse</span><br />
              beschleunigen. Wachstum steigern.
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl">
              Transformieren Sie Ihr Unternehmen mit maßgeschneiderten KI-Lösungen. Von der Beratung bis zur Implementierung – wir begleiten Sie auf Ihrem Weg in die digitale Zukunft.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">
              Termin vereinbaren
            </button>
          </div>
  
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-gray-300 h-48 rounded-xl"></div>
            <div className="bg-gray-300 h-48 rounded-xl"></div>
            <div className="bg-gray-300 h-48 rounded-xl"></div>
            <div className="bg-gray-300 h-48 rounded-xl"></div>
          </div>
        </div>
      </section>
    );
  }