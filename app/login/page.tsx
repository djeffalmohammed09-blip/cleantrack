"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Erreur de connexion");
      console.log(error);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white text-3xl">
            🔐
          </div>

          <h1 className="text-3xl font-bold text-gray-900">Connexion</h1>

          <p className="text-gray-500 mt-2">
            Connectez-vous à votre espace CleanTrack
          </p>
        </div>

        <div className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={login}
            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-4 rounded-2xl"
          >
            Se connecter
          </button>
        </div>
      </div>
    </main>
  );
}