"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function ReportDetailPage() {
  const params = useParams();
  const reportId = Number(params.id);

  const [report, setReport] = useState<any>(null);

  async function fetchReport() {
    const { data, error } = await supabase
      .from("reports")
      .select(`
        *,
        residences (
          id,
          name,
          address
        )
      `)
      .eq("id", reportId)
      .single();

    if (!error && data) {
      setReport(data);
    }
  }

  useEffect(() => {
    fetchReport();
  }, []);

  if (!report) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Chargement du rapport...</p>
      </main>
    );
  }

  const beforePhotos = report.before_photos || [];
  const afterPhotos = report.after_photos || [];

  return (
    <main className="min-h-screen bg-gray-50 pb-28">
      <div className="bg-blue-600 text-white px-6 pt-14 pb-10 rounded-b-[40px]">
        <p className="text-blue-100">Rapport d’intervention</p>

        <h1 className="text-3xl font-bold mt-2">
          {report.residences?.name || "Résidence"}
        </h1>

        <p className="mt-3 text-blue-100">
          {new Date(report.created_at).toLocaleDateString()} •{" "}
          {new Date(report.created_at).toLocaleTimeString()}
        </p>
      </div>

      <div className="px-6 -mt-8">
        <div className="bg-white rounded-[35px] shadow-xl p-6 border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Score rapport</p>

              <h2 className="text-5xl font-bold text-gray-900 mt-2">
                {report.score}%
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                {report.status}
              </p>
            </div>

            <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center text-4xl">
              ✅
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Informations
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Agent</span>
              <span className="font-semibold text-gray-900 text-right">
                {report.agent_name || "Agent CleanTrack"}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Adresse</span>
              <span className="font-semibold text-gray-900 text-right">
                {report.residences?.address || "Non renseignée"}
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Statut</span>
              <span className="font-semibold text-blue-600 text-right">
                {report.status}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Commentaire agent
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {report.comment || "Aucun commentaire."}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Photos avant intervention
          </h2>

          {beforePhotos.length === 0 && (
            <p className="text-gray-500">Aucune photo avant.</p>
          )}

          <div className="grid grid-cols-3 gap-3">
            {beforePhotos.map((photo: string, index: number) => (
              <img
                key={index}
                src={photo}
                alt={`Avant ${index + 1}`}
                className="h-28 w-full object-cover rounded-2xl"
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Photos après intervention
          </h2>

          {afterPhotos.length === 0 && (
            <p className="text-gray-500">Aucune photo après.</p>
          )}

          <div className="grid grid-cols-3 gap-3">
            {afterPhotos.map((photo: string, index: number) => (
              <img
                key={index}
                src={photo}
                alt={`Après ${index + 1}`}
                className="h-28 w-full object-cover rounded-2xl"
              />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Timeline
          </h2>

          <div className="space-y-5">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                📍
              </div>

              <div>
                <h3 className="font-bold text-gray-900">QR scanné</h3>
                <p className="text-sm text-gray-500">
                  Début de l’intervention
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                📷
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Photos avant</h3>
                <p className="text-sm text-gray-500">
                  {beforePhotos.length} photo(s) ajoutée(s)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                🧹
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Nettoyage effectué</h3>
                <p className="text-sm text-gray-500">
                  Checklist validée par l’agent
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                ✅
              </div>

              <div>
                <h3 className="font-bold text-gray-900">Rapport envoyé</h3>
                <p className="text-sm text-gray-500">
                  Transmis au syndic automatiquement
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link
          href={`/reports/residence/${report.residences?.id || 1}`}
          className="block text-center w-full bg-blue-600 text-white font-bold py-5 rounded-3xl mt-8 shadow-lg"
        >
          Retour aux rapports
        </Link>
      </div>
    </main>
  );
}