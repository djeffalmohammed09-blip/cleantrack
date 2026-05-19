export default function ScanPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-10">

      <div className="bg-blue-600 text-white px-6 pt-14 pb-8 rounded-b-[40px]">

        <p className="text-blue-100">
          Intervention
        </p>

        <h1 className="text-3xl font-bold mt-2">
          Résidence Victor Hugo
        </h1>

        <p className="mt-3 text-blue-100">
          QR détecté avec succès ✅
        </p>

      </div>

      <div className="px-6 mt-6">

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5">

          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Checklist
          </h2>

          <div className="space-y-4">

            <label className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
              <span>Escaliers nettoyés</span>
              <input type="checkbox" className="h-5 w-5" />
            </label>

            <label className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
              <span>Hall d’entrée</span>
              <input type="checkbox" className="h-5 w-5" />
            </label>

            <label className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
              <span>Poubelles sorties</span>
              <input type="checkbox" className="h-5 w-5" />
            </label>

            <label className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
              <span>Sol lavé</span>
              <input type="checkbox" className="h-5 w-5" />
            </label>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Photos
          </h2>

          <button className="w-full h-40 border-2 border-dashed border-blue-300 rounded-3xl flex flex-col items-center justify-center text-blue-600">

            <div className="text-5xl">
              📷
            </div>

            <p className="mt-3 font-semibold">
              Ajouter des photos
            </p>

          </button>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Commentaire
          </h2>

          <textarea
            placeholder="Ajouter un commentaire..."
            className="w-full h-32 rounded-2xl border border-gray-200 p-4 resize-none outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Signature
          </h2>

          <div className="h-32 rounded-2xl bg-gray-50 flex items-center justify-center text-5xl">
            ✍️
          </div>

        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-bold py-5 rounded-3xl mt-8 shadow-lg">

          Envoyer le rapport

        </button>

      </div>

    </main>
  );
}