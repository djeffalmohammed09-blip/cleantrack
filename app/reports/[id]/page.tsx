export default function ReportPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-10">

      <div className="bg-blue-600 text-white px-6 pt-14 pb-8 rounded-b-[40px]">

        <p className="text-blue-100">
          Rapport nettoyage
        </p>

        <h1 className="text-3xl font-bold mt-2">
          Résidence Victor Hugo
        </h1>

        <p className="mt-3 text-blue-100">
          19 Mai 2026 • 08:14
        </p>

      </div>

      <div className="px-6 mt-6">

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-500 text-sm">
                Agent
              </p>

              <h2 className="text-xl font-bold text-gray-900 mt-1">
                Mohamed B.
              </h2>
            </div>

            <div className="bg-green-100 text-green-700 font-bold px-4 py-2 rounded-full">
              Validé ✅
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-sm text-gray-500">
                Heure arrivée
              </p>

              <h3 className="text-xl font-bold mt-2">
                08:14
              </h3>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-sm text-gray-500">
                Heure départ
              </p>

              <h3 className="text-xl font-bold mt-2">
                09:02
              </h3>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Checklist
          </h2>

          <div className="space-y-4">

            <div className="flex items-center justify-between">
              <span>Escaliers nettoyés</span>
              <span>✅</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Hall d’entrée</span>
              <span>✅</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Poubelles sorties</span>
              <span>✅</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Sol lavé</span>
              <span>✅</span>
            </div>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-2xl font-bold text-gray-900">
              Photos
            </h2>

            <span className="text-sm text-gray-500">
              3 photos
            </span>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800"
              className="rounded-2xl h-40 object-cover w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800"
              className="rounded-2xl h-40 object-cover w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800"
              className="rounded-2xl h-40 object-cover w-full col-span-2"
            />

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Commentaire agent
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Intervention effectuée normalement. Aucun incident signalé.
          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Signature agent
          </h2>

          <div className="h-28 rounded-2xl bg-gray-50 flex items-center justify-center text-4xl">
            ✍️
          </div>

        </div>

      </div>

    </main>
  );
}