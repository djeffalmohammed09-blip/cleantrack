"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function ScanPage() {
  const params = useParams();
  const residenceId = params.id;

  const [escaliers, setEscaliers] = useState(false);
  const [hall, setHall] = useState(false);
  const [poubelles, setPoubelles] = useState(false);
  const [sol, setSol] = useState(false);
  const [comment, setComment] = useState("");
  const [beforePhotos, setBeforePhotos] = useState<File[]>([]);
  const [afterPhotos, setAfterPhotos] = useState<File[]>([]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function uploadPhotos(files: File[], folder: string) {
    const urls: string[] = [];

    for (const file of files) {
      const fileName = `${folder}/${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("reports")
        .upload(fileName, file);

      if (!error) {
        const { data } = supabase.storage
          .from("reports")
          .getPublicUrl(fileName);

        urls.push(data.publicUrl);
      }
    }

    return urls;
  }

  async function sendReport() {
    if (beforePhotos.length < 3 || afterPhotos.length < 3) {
      alert("Merci d’ajouter 3 photos avant et 3 photos après.");
      return;
    }

    setLoading(true);

    const doneTasks = [escaliers, hall, poubelles, sol].filter(Boolean).length;
    const score = Math.round((doneTasks / 4) * 100);

    const beforeUrls = await uploadPhotos(beforePhotos, "before");
    const afterUrls = await uploadPhotos(afterPhotos, "after");

    const { error } = await supabase.from("reports").insert([
      {
        residence_id: Number(residenceId),
        agent_name: "Agent CleanTrack",
        status: "Validé",
        score: score,
        comment: comment || "Intervention effectuée.",
        before_photos: beforeUrls,
        after_photos: afterUrls,
        image_url: afterUrls[0] || "",
      },
    ]);

    setLoading(false);

    if (!error) {
      setSent(true);
    } else {
      alert("Erreur lors de l'envoi du rapport");
      console.log(error);
    }
  }

  if (sent) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="bg-white rounded-[35px] shadow-xl p-8 text-center max-w-md">
          <div className="text-6xl mb-6">✅</div>

          <h1 className="text-3xl font-bold text-gray-900">
            Rapport envoyé
          </h1>

          <p className="text-gray-500 mt-4">
            Les photos avant/après ont bien été transmises au syndic.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-10">
      <div className="bg-blue-600 text-white px-6 pt-14 pb-8 rounded-b-[40px]">
        <p className="text-blue-100">Intervention</p>

        <h1 className="text-3xl font-bold mt-2">
          Résidence #{residenceId}
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
              <input
                type="checkbox"
                checked={escaliers}
                onChange={(e) => setEscaliers(e.target.checked)}
                className="h-5 w-5"
              />
            </label>

            <label className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
              <span>Hall d’entrée</span>
              <input
                type="checkbox"
                checked={hall}
                onChange={(e) => setHall(e.target.checked)}
                className="h-5 w-5"
              />
            </label>

            <label className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
              <span>Poubelles sorties</span>
              <input
                type="checkbox"
                checked={poubelles}
                onChange={(e) => setPoubelles(e.target.checked)}
                className="h-5 w-5"
              />
            </label>

            <label className="flex items-center justify-between bg-gray-50 rounded-2xl p-4">
              <span>Sol lavé</span>
              <input
                type="checkbox"
                checked={sol}
                onChange={(e) => setSol(e.target.checked)}
                className="h-5 w-5"
              />
            </label>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Photos avant intervention
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Ajoutez 3 photos avant nettoyage.
          </p>

          <input
            type="file"
            accept="image/*"
            capture="environment"
            multiple
            onChange={(e) => {
              if (e.target.files) {
                setBeforePhotos(Array.from(e.target.files).slice(0, 3));
              }
            }}
            className="w-full"
          />

          <p className="text-sm text-blue-600 font-semibold mt-3">
            {beforePhotos.length}/3 photos ajoutées
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Photos après intervention
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            Ajoutez 3 photos après nettoyage.
          </p>

          <input
            type="file"
            accept="image/*"
            capture="environment"
            multiple
            onChange={(e) => {
              if (e.target.files) {
                setAfterPhotos(Array.from(e.target.files).slice(0, 3));
              }
            }}
            className="w-full"
          />

          <p className="text-sm text-blue-600 font-semibold mt-3">
            {afterPhotos.length}/3 photos ajoutées
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 mt-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Commentaire
          </h2>

          <textarea
            placeholder="Ajouter un commentaire..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full h-32 rounded-2xl border border-gray-200 p-4 resize-none outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={sendReport}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-bold py-5 rounded-3xl mt-8 shadow-lg disabled:opacity-60"
        >
          {loading ? "Envoi en cours..." : "Envoyer le rapport"}
        </button>
      </div>
    </main>
  );
}