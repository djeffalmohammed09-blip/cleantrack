export default function ComplaintsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-10">

      <div className="bg-blue-600 text-white px-6 pt-14 pb-8 rounded-b-[40px]">

        <p className="text-blue-100">
          Support syndic
        </p>

        <h1 className="text-3xl font-bold mt-2">
          Réclamation
        </h1>

        <p className="mt-3 text-blue-100">
          Signaler un problème sur une résidence
        </p>

      </div>

      <div className="px-6 mt-6">

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5">

          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Résidence concernée
          </h2>

          <select className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:ring-2 focus:ring-blue-500">

            <option>
              Résidence Victor Hugo
            </option>

            <option>
              Résidence Capitole
            </option>

            <option>
              Résidence Wilson
            </option>

          </select>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Type de problème
          </h2>

          <div className="grid grid-cols-2 gap-4">

            <button className="rounded-2xl bg-gray-50 p-4 border border-gray-200 text-left">
              🧹 Nettoyage
            </button>

            <button className="rounded-2xl bg-gray-50 p-4 border border-gray-200 text-left">
              🗑️ Poubelles
            </button>

            <button className="rounded-2xl bg-gray-50 p-4 border border-gray-200 text-left">
              🚪 Hall entrée
            </button>

            <button className="rounded-2xl bg-gray-50 p-4 border border-gray-200 text-left">
              ⚠️ Autre
            </button>

          </div>

        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Description
          </h2>

          <textarea
            placeholder="Décrivez le problème..."
            className="w-full h-40 rounded-2xl border border-gray-200 p-4 resize-none outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">

          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Ajouter des photos
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

        <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-bold py-5 rounded-3xl mt-8 shadow-lg">

          Envoyer la réclamation

        </button>

      </div>

    </main>
  );
}