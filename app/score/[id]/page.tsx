import Link from "next/link";

export default function ScorePage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-10">
      <div className="bg-blue-600 text-white px-6 pt-14 pb-10 rounded-b-[40px]">
        <p className="text-blue-100">Score qualité</p>

        <h1 className="text-3xl font-bold mt-2">
          Résidence Victor Hugo
        </h1>

        <p className="mt-3 text-blue-100">
          Analyse globale de la prestation
        </p>
      </div>

      <div className="px-6 -mt-8">
        <div className="bg-white rounded-[35px] shadow-xl border border-gray-100 p-8 text-center">
          <div className="relative mx-auto h-44 w-44">
            <div className="absolute inset-0 rounded-full border-[16px] border-blue-100" />
            <div className="absolute inset-0 rounded-full border-[16px] border-blue-600 border-t-transparent rotate-45" />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-gray-900">98%</span>
              <span className="text-sm font-semibold text-green-600 mt-1">
                Excellent
              </span>
            </div>
          </div>

          <p className="text-gray-500 mt-6">
            Score basé sur les rapports validés, la ponctualité et les
            réclamations.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Ponctualité</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">100%</h2>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Qualité</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">97%</h2>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Rapports validés</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">32</h2>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Réclamations</p>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">1</h2>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Détail du score
          </h2>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span>Ponctualité</span>
                <span>100%</span>
              </div>
              <div className="h-3 rounded-full bg-gray-100">
                <div className="h-3 rounded-full bg-blue-600 w-full" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span>Nettoyage</span>
                <span>97%</span>
              </div>
              <div className="h-3 rounded-full bg-gray-100">
                <div className="h-3 rounded-full bg-blue-600 w-[97%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm font-semibold mb-2">
                <span>Réclamations</span>
                <span>95%</span>
              </div>
              <div className="h-3 rounded-full bg-gray-100">
                <div className="h-3 rounded-full bg-blue-600 w-[95%]" />
              </div>
            </div>
          </div>
        </div>

        <Link
          href="/residences/1"
          className="block text-center w-full bg-blue-600 text-white font-bold py-5 rounded-3xl mt-8 shadow-lg"
        >
          Retour à la résidence
        </Link>
      </div>
    </main>
  );
}