"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import QRCode from "react-qr-code";
import { supabase } from "../lib/supabase";

export default function ResidencesPage() {
  const [residences, setResidences] = useState<any[]>([]);
  const [reports, setReports] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  async function fetchData() {
    const { data: residencesData } = await supabase
      .from("residences")
      .select("*")
      .order("id", { ascending: false });

    const { data: reportsData } = await supabase
      .from("reports")
      .select("*")
      .order("created_at", { ascending: false });

    setResidences(residencesData || []);
    setReports(reportsData || []);
  }

  async function addResidence() {
    if (!name || !address) return;

    const { error } = await supabase.from("residences").insert([
      {
        name,
        address,
      },
    ]);

    if (!error) {
      setName("");
      setAddress("");
      setShowForm(false);
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8 pb-28">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-500">Espace syndic</p>
            <h1 className="text-3xl font-bold text-gray-900">Résidences</h1>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="h-12 w-12 rounded-2xl bg-blue-600 text-white shadow-lg flex items-center justify-center text-3xl"
          >
            +
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Ajouter une résidence
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nom de la résidence"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="text"
                placeholder="Adresse"
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <button
                onClick={addResidence}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl"
              >
                Créer la résidence
              </button>
            </div>
          </div>
        )}

        <div className="space-y-6">
          {residences.map((residence) => {
            const residenceReports = reports
              .filter((report) => report.residence_id === residence.id)
              .slice(0, 5);

            const qrValue = `${window.location.origin}/scan/${residence.id}`;

            return (
              <div
                key={residence.id}
                className="bg-white rounded-[32px] shadow-sm border border-gray-100 overflow-hidden"
              >
                <Link href={`/residences/${residence.id}`}>
                  <div className="h-36 bg-blue-600 relative">
                    <img
                      src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200"
                      alt={residence.name}
                      className="h-full w-full object-cover opacity-80"
                    />

                    <div className="absolute inset-0 bg-black/25" />

                    <div className="absolute bottom-4 left-5 text-white">
                      <h2 className="text-2xl font-bold">{residence.name}</h2>
                      <p className="text-sm opacity-90 mt-1">
                        {residence.address || "Adresse non renseignée"}
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="p-5">
                  <div className="flex gap-5">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-gray-900">
                          Derniers rapports
                        </h3>

                        <span className="text-xs font-bold text-blue-600">
                          {residenceReports.length}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {residenceReports.length === 0 && (
                          <p className="text-sm text-gray-400">
                            Aucun rapport pour le moment.
                          </p>
                        )}

                        {residenceReports.map((report) => (
                          <Link
                            key={report.id}
                            href={`/reports/${report.id}`}
                            className="block rounded-2xl bg-gray-50 p-3"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-bold text-gray-900">
                                  {new Date(report.created_at).toLocaleDateString()}
                                </p>

                                <p className="text-xs text-gray-500 mt-1">
                                  {report.status}
                                </p>
                              </div>

                              <span className="text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">
                                {report.score}%
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="w-28 flex flex-col items-center">
                      <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100">
                        <QRCode value={qrValue} size={90} />
                      </div>

                      <p className="text-[10px] text-gray-400 text-center mt-2">
                        QR résidence
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/residences/${residence.id}`}
                    className="mt-5 block w-full text-center bg-blue-600 text-white font-bold py-4 rounded-2xl"
                  >
                    Ouvrir la résidence
                  </Link>
                </div>
              </div>
            );
          })}
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