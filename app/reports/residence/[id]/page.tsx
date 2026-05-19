"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";

export default function ResidenceReportsPage() {
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

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8 pb-28">
      <div className="mx-auto max-w-md">
        <div className="mb-8">
          <p className="text-gray-500">Rapports résidence</p>
          <h1 className="text-3xl font-bold text-gray-900">
            {residence?.name || "Résidence"}
          </h1>
          <p className="text-gray-500 mt-2">
            {reports.length} rapport(s) enregistré(s)
          </p>
        </div>

        <div className="space-y-4">
          {reports.length === 0 && (
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center">
              <p className="text-gray-500">Aucun rapport pour cette résidence.</p>
            </div>
          )}

          {reports.map((report) => (
            <Link
              key={report.id}
              href={`/reports/${report.id}`}
              className="block bg-white rounded-3xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="font-bold text-gray-900">
                    Rapport du {new Date(report.created_at).toLocaleDateString()}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(report.created_at).toLocaleTimeString()}
                  </p>

                  <p className="text-sm text-gray-600 mt-2 line-clamp-1">
                    {report.comment || "Aucun commentaire"}
                  </p>
                </div>

                <div className="text-right">
                  <span className="inline-block rounded-full bg-green-100 text-green-700 text-xs font-bold px-3 py-1">
                    {report.score}%
                  </span>

                  <p className="text-xs text-blue-600 font-semibold mt-3">
                    Ouvrir ›
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href={`/residences/${residenceId}`}
          className="block text-center mt-8 bg-blue-600 text-white font-bold py-4 rounded-3xl"
        >
          Retour résidence
        </Link>
      </div>
    </main>
  );
}