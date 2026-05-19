import Link from "next/link";

const residences = [
  {
    id: 1,
    name: "Résidence Victor Hugo",
    address: "12 rue Victor Hugo, Toulouse",
    lastReport: "Aujourd’hui - 08:14",
    score: "98%",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  },
  {
    id: 2,
    name: "Résidence Capitole",
    address: "Place du Capitole, Toulouse",
    lastReport: "Hier - 07:52",
    score: "95%",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=800",
  },
  {
    id: 3,
    name: "Résidence Jean Jaurès",
    address: "Allées Jean Jaurès, Toulouse",
    lastReport: "12 mai 2026 - 08:05",
    score: "94%",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800",
  },
];

export default function ResidencesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-gray-500">ORPI Toulouse</p>
            <h1 className="text-3xl font-bold text-gray-900">Résidences</h1>
          </div>

          <Link
            href="/dashboard"
            className="h-11 w-11 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-xl"
          >
            ←
          </Link>
        </div>

        <div className="space-y-5">
          {residences.map((residence) => (
            <Link
              key={residence.id}
              href={`/residences/${residence.id}`}
              className="block bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <img
                src={residence.image}
                alt={residence.name}
                className="h-40 w-full object-cover"
              />

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {residence.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {residence.address}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-100 text-green-700 text-sm font-bold px-3 py-1">
                    {residence.score}
                  </span>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Dernier rapport :{" "}
                  <span className="font-semibold text-gray-800">
                    {residence.lastReport}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}