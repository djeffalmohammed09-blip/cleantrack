import Link from "next/link";

const residences = [
  {
    id: 1,
    name: "Résidence Victor Hugo",
    address: "12 rue Victor Hugo, Toulouse",
    lastReport: "Aujourd’hui - 08:14",
    reportsCount: 12,
    score: "98%",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200",
  },
  {
    id: 2,
    name: "Résidence Capitole",
    address: "Place du Capitole, Toulouse",
    lastReport: "Hier - 07:52",
    reportsCount: 9,
    score: "95%",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200",
  },
  {
    id: 3,
    name: "Résidence Wilson",
    address: "Boulevard de Strasbourg, Toulouse",
    lastReport: "12 mai 2026 - 08:05",
    reportsCount: 7,
    score: "94%",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200",
  },
];

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8 pb-28">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-500">ORPI Toulouse</p>
            <h1 className="text-3xl font-bold text-gray-900">Rapports</h1>
          </div>

          <Link
            href="/dashboard"
            className="h-11 w-11 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-xl"
          >
            ←
          </Link>
        </div>

        <p className="text-gray-500 mb-6">
          Sélectionnez une résidence pour consulter ses rapports de nettoyage.
        </p>

        <div className="space-y-5">
          {residences.map((residence) => (
            <Link
              key={residence.id}
              href={`/reports/residence/${residence.id}`}
              className="block bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <img
                src={residence.image}
                alt={residence.name}
                className="h-36 w-full object-cover"
              />

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {residence.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {residence.address}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-100 text-green-700 text-sm font-bold px-3 py-1">
                    {residence.score}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <p className="text-sm text-gray-500">
                    Dernier rapport :{" "}
                    <span className="font-semibold text-gray-800">
                      {residence.lastReport}
                    </span>
                  </p>

                  <span className="text-sm text-blue-600 font-bold">
                    {residence.reportsCount}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white border border-gray-100 shadow-xl rounded-3xl px-4 py-3 flex items-center justify-between">
        <Link href="/dashboard" className="flex flex-col items-center text-gray-500 text-xs font-semibold">
          <span className="text-2xl">🏠</span>
          Accueil
        </Link>

        <Link href="/residences" className="flex flex-col items-center text-gray-500 text-xs font-semibold">
          <span className="text-2xl">🏢</span>
          Résidences
        </Link>

        <Link href="/reports" className="flex flex-col items-center text-blue-600 text-xs font-semibold">
          <span className="text-2xl">📋</span>
          Rapports
        </Link>

        <Link href="/complaints" className="flex flex-col items-center text-gray-500 text-xs font-semibold">
          <span className="text-2xl">⚠️</span>
          Réclamations
        </Link>

        <Link href="/login" className="flex flex-col items-center text-gray-500 text-xs font-semibold">
          <span className="text-2xl">👤</span>
          Profil
        </Link>
      </nav>
    </main>
  );
}