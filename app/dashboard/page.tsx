"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";

export default function DashboardPage() {
  const [reports, setReports] = useState<any[]>([]);

  async function fetchReports() {
    const { data, error } = await supabase
      .from("reports")
      .select(`
        *,
        residences (
          name,
          address
        )
      `)
      .order("created_at", { ascending: false });

    if (!error && data) {
      setReports(data);
    }
  }

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8 pb-28">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-500">Bonjour,</p>
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard Syndic 👋
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

          <p className="mt-3 text-sm text-blue-100">
            Suivi des interventions en temps réel
          </p>
        </div>

        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Activité récente
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {reports.length} rapport(s) enregistrés
              </p>
            </div>

            <div className="h-12 w-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
              📊
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">
            Derniers rapports
          </h2>

          <Link href="/residences" className="text-blue-600 text-sm font-semibold">
            Résidences
          </Link>
        </div>

        <div className="space-y-4">
          {reports.length === 0 && (
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center">
              <p className="text-gray-500">
                Aucun rapport envoyé pour le moment.
              </p>
            </div>
          )}

          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {report.residences?.name || "Résidence"}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {report.residences?.address || "Adresse non renseignée"}
                  </p>
                </div>

                <span
                  className={`rounded-full text-xs font-bold px-3 py-1 ${
                    report.score >= 80
                      ? "bg-green-100 text-green-700"
                      : report.score >= 50
                      ? "bg-orange-100 text-orange-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {report.score}%
                </span>
              </div>

              <p className="text-gray-700 mt-4">
                {report.comment}
              </p>

              {report.image_url && (
                <img
                  src={report.image_url}
                  alt="Photo intervention"
                  className="mt-4 rounded-2xl w-full h-64 object-cover"
                />
              )}

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {new Date(report.created_at).toLocaleString()}
                </span>

                <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-2xl text-sm font-semibold">
                  {report.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white border border-gray-100 shadow-xl rounded-3xl px-4 py-3 flex items-center justify-between">
        <Link href="/dashboard" className="flex flex-col items-center text-blue-600 text-xs font-semibold">
          <span className="text-2xl">🏠</span>
          Accueil
        </Link>

        <Link href="/residences" className="flex flex-col items-center text-gray-500 text-xs font-semibold">
          <span className="text-2xl">🏢</span>
          Résidences
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