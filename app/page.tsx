import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-3xl">
            🏢
          </div>
          <h1 className="text-3xl font-bold text-gray-900">CleanTrack</h1>
          <p className="text-gray-500 mt-2">Suivi digital du nettoyage</p>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Je suis
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Choisissez votre profil pour continuer
        </p>

        <div className="space-y-4">
          <Link
            href="/login?role=syndic"
            className="block rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-5">
              <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl">
                🏬
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Syndic</h3>
                <p className="text-gray-500 mt-1">
                  Je veux consulter les rapports de mes résidences.
                </p>
              </div>
            </div>
          </Link>

          <Link
            href="/login?role=prestataire"
            className="block rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-5">
              <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl">
                🧹
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Prestataire</h3>
                <p className="text-gray-500 mt-1">
                  Je veux scanner un QR code et envoyer un rapport.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}