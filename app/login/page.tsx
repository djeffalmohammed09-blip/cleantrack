import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-3xl">
            🔐
          </div>

          <h1 className="text-3xl font-bold text-gray-900">Connexion</h1>

          <p className="text-gray-500 mt-2">
            Connectez-vous à votre compte
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="votre@email.com"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mot de passe
            </label>

            <input
              type="password"
              placeholder="Votre mot de passe"
              className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/dashboard"
              className="text-center bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-3 rounded-2xl"
            >
              Entrer syndic
            </Link>

            <Link
              href="/agent"
              className="text-center bg-gray-900 hover:bg-black transition text-white font-semibold py-3 rounded-2xl"
            >
              Entrer prestataire
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}