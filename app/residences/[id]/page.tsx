"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function ResidenceDetailPage() {
  const params = useParams();
  const residenceId = Number(params.id);

  const [residence, setResidence] = useState<any>(null);
  const [reports, setReports] = useState<any[]>([]);

  async function fetchData() {
    const { data: residenceData } = await supabase
      .from("residences")
      .select("*")
      .eq("id", residenceId)
      .single();

    const { data: reportsData } = await supabase
      .from("reports")
      .select("*")
      .eq("residence_id", residenceId)
      .order("created_at", { ascending: false });

    setResidence(residenceData);
    setReports(reportsData || []);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!residence) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Chargement...</p>
      </main>
    );
  }

  const averageScore =
    reports.length > 0
      ? Math.round(
          reports.reduce((sum, report) => sum + (report.score || 0), 0) /
            reports.length
        )
      : 0;

  return (
    <main className="min-h-screen bg-gray-50 pb-28">
      <div className="relative h-72 w-full">
        <img
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200"
          alt={residence.name}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <p className="text-sm opacity-90">Résidence</p>
          <h1 className="text-4xl font-bold mt-2">{residence.name}</h1>
          <p className="mt-3 text-white/90">
            {residence.address || "Adresse non renseignée"}
          </p>
        </div>
      </div>

      <div className="px-6 -mt-10 relative z-10">
        <div className="bg-white rounded-[35px] shadow-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Score moyen</p>
              <h2 className="text-5xl font-bold text-gray-900 mt-2">
                {averageScore}%
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                {reports.length} rapport(s) enregistré(s)
              </p>
            </div>

            <div className="relative h-24 w-24">
              <div className="absolute inset-0 rounded-full border-[10px] border-blue-100" />
              <div className="absolute inset-0 rounded-full border-[10px] border-blue-600 border-t-transparent rotate-45" />
              <div className="absolute inset-0 flex items-center justify-center text-2xl">
                ⭐
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <Link
            href={`/reports/residence/${residence.id}`}
            className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"
          >
            <div className="text-4xl mb-3">📋</div>
            <h3 className="font-bold text-gray-900">Rapports</h3>
            <p className="text-sm text-gray-500 mt-1">Tous les rapports</p>
          </Link>

          <Link
            href="/complaints"
            className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"
          >
            <div className="text-4xl mb-3">⚠️</div>
            <h3 className="font-bold text-gray-900">Réclamation</h3>
            <p className="text-sm text-gray-500 mt-1">Signaler un problème</p>
          </Link>

          <Link
            href={`/score/${residence.id}`}
            className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"
          >
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="font-bold text-gray-900">Score</h3>
            <p className="text-sm text-gray-500 mt-1">Détails qualité</p>
          </Link>

          <button className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-3">📝</div>
            <h3 className="font-bold text-gray-900">Notes</h3>
            <p className="text-sm text-gray-500 mt-1">Infos résidence</p>
          </button>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Derniers rapports
            </h2>

            <Link href="/residences" className="text-blue-600 text-sm font-bold">
              Retour
            </Link>
          </div>

          <div className="space-y-4">
            {reports.length === 0 && (
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center">
                <p className="text-gray-500">
                  Aucun rapport pour cette résidence.
                </p>
              </div>
            )}

            {reports.slice(0, 5).map((report) => (
              <Link
                key={report.id}
                href={`/reports/${report.id}`}
                className="block bg-white rounded-3xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">
                      Rapport du{" "}
                      {new Date(report.created_at).toLocaleDateString()}
                    </h3>

                    <p className="text-sm text-gray-500 mt-1">
                      {report.comment || "Aucun commentaire"}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-100 text-green-700 text-xs font-bold px-3 py-1">
                    {report.score}%
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white border border-gray-100 shadow-xl rounded-3xl px-4 py-3 flex items-center justify-between">
        <Link href="/dashboard" className="flex flex-col items-center text-gray-500 text-xs font-semibold">
          <span className="text-2xl">🏠</span>
          Accueil
        </Link>

        <Link href="/residences" className="flex flex-col items-center text-blue-600 text-xs font-semibold">
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