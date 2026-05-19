import Link from "next/link";

const reports = [
  {
    residence: "Résidence Victor Hugo",
    date: "Aujourd’hui",
    time: "08:14",
    score: "98%",
  },
  {
    residence: "Résidence Capitole",
    date: "Hier",
    time: "07:52",
    score: "95%",
  },
  {
    residence: "Résidence Jean Jaurès",
    date: "12 mai 2026",
    time: "08:05",
    score: "94%",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8 pb-28">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-500">Bonjour,</p>
            <h1 className="text-2xl font-bold text-gray-900">
              ORPI Toulouse 👋
            </h1>
          </div>

          <button className="h-11 w-11 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-xl">
            🔔
          </button>
        </div>

        <div className="rounded-3xl bg-blue-600 text-white p-6 shadow-lg mb-8">
          <p className="text-sm opacity-90">Score global</p>

          <div className="flex items-end justify-between mt-3">
            <h2 className="text-5xl font-bold">96%</h2>

            <div className="h-20 w-20 rounded-full border-8 border-white/70 flex items-center justify-center">
              ⭐
            </div>
          </div>

          <p className="mt-3 text-sm text-blue-100">↑ 4% ce mois</p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Activité du jour
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                3 passages prévus • 1 réclamation en attente
              </p>
            </div>

            <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
              📊
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Derniers rapports</h2>

          <Link href="/residences" className="text-blue-600 text-sm font-semibold">
            Voir tout
          </Link>
        </div>

        <div className="space-y-4">
          {reports.map((report) => (
            <Link
              href="/reports/1"
              key={report.residence}
              className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex items-center justify-between"
            >
              <div>
                <h3 className="font-bold text-gray-900">{report.residence}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  {report.date} - {report.time}
                </p>

                <span className="inline-block mt-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold px-3 py-1">
                  Score {report.score}
                </span>
              </div>

              <span className="text-gray-400 text-2xl">›</span>
            </Link>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white border border-gray-100 shadow-xl rounded-3xl px-4 py-3 flex items-center justify-between">
        <Link
          href="/dashboard"
          className="flex flex-col items-center text-blue-600 text-xs font-semibold"
        >
          <span className="text-2xl">🏠</span>
          Accueil
        </Link>

        <Link
          href="/residences"
          className="flex flex-col items-center text-gray-500 text-xs font-semibold"
        >
          <span className="text-2xl">🏢</span>
          Résidences
        </Link>

        <Link
          href="/complaints"
          className="flex flex-col items-center text-gray-500 text-xs font-semibold"
        >
          <span className="text-2xl">⚠️</span>
          Réclamations
        </Link>

        <Link
          href="/login"
          className="flex flex-col items-center text-gray-500 text-xs font-semibold"
        >
          <span className="text-2xl">👤</span>
          Profil
        </Link>
      </nav>
    </main>
  );
}