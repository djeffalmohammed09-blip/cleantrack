import Link from "next/link";

export default function AgentPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-10">

      <div className="bg-blue-600 text-white px-6 pt-14 pb-10 rounded-b-[40px]">

        <p className="text-blue-100">
          Bonjour,
        </p>

        <h1 className="text-3xl font-bold mt-2">
          Mohamed 👋
        </h1>

        <p className="mt-3 text-blue-100">
          Prestataire CleanTrack
        </p>

        <div className="bg-white/10 rounded-3xl p-6 mt-8 backdrop-blur-sm">

          <p className="text-blue-100">
            Score agent
          </p>

          <div className="flex items-center justify-between mt-3">

            <h2 className="text-5xl font-bold">
              97%
            </h2>

            <div className="h-20 w-20 rounded-full border-8 border-white/50 flex items-center justify-center text-3xl">
              ⭐
            </div>

          </div>

        </div>

      </div>

      <div className="px-6 -mt-8">

        <Link
          href="/scan/1"
          className="w-full bg-white rounded-[30px] shadow-xl border border-gray-100 p-8 flex flex-col items-center justify-center text-center block"
        >

          <div className="h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center text-5xl text-white shadow-lg">
            📷
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-6">
            Scanner QR
          </h2>

          <p className="text-gray-500 text-center mt-3 leading-relaxed">
            Scanner le QR code de la résidence pour démarrer l’intervention
          </p>

        </Link>

        <div className="grid grid-cols-2 gap-4 mt-6">

          <button className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 text-left">

            <div className="text-3xl mb-3">
              📋
            </div>

            <h3 className="font-bold text-gray-900">
              Interventions
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Aujourd’hui
            </p>

          </button>

          <button className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 text-left">

            <div className="text-3xl mb-3">
              🕓
            </div>

            <h3 className="font-bold text-gray-900">
              Historique
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Voir anciens rapports
            </p>

          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">

          <div className="flex items-center justify-between mb-5">

            <h2 className="text-2xl font-bold text-gray-900">
              Interventions du jour
            </h2>

            <span className="text-sm text-gray-500">
              3 prévues
            </span>

          </div>

          <div className="space-y-4">

            <div className="rounded-2xl bg-gray-50 p-4 flex items-center justify-between">

              <div>
                <h3 className="font-bold text-gray-900">
                  Résidence Victor Hugo
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  08:00 • ORPI Toulouse
                </p>
              </div>

              <span className="text-green-600 font-bold">
                ✅ Fait
              </span>

            </div>

            <div className="rounded-2xl bg-gray-50 p-4 flex items-center justify-between">

              <div>
                <h3 className="font-bold text-gray-900">
                  Résidence Capitole
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  10:30 • Foncia
                </p>
              </div>

              <span className="text-orange-500 font-bold">
                🕒 En attente
              </span>

            </div>

            <div className="rounded-2xl bg-gray-50 p-4 flex items-center justify-between">

              <div>
                <h3 className="font-bold text-gray-900">
                  Résidence Wilson
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  14:00 • Citya
                </p>
              </div>

              <span className="text-orange-500 font-bold">
                🕒 En attente
              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}