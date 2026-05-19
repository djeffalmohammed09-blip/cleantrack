import Link from "next/link";

const cleaningDays = [
  { day: 1, scheduled: false, completed: false },
  { day: 2, scheduled: true, completed: true },
  { day: 3, scheduled: false, completed: false },
  { day: 4, scheduled: true, completed: false },
  { day: 5, scheduled: true, completed: true },
  { day: 6, scheduled: false, completed: false },
  { day: 7, scheduled: true, completed: true },
  { day: 8, scheduled: false, completed: false },
];

export default function ResidenceDetailPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-10">

      <div className="relative h-72 w-full">

        <img
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200"
          alt="Résidence"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute bottom-6 left-6 text-white">

          <p className="text-sm opacity-90">
            ORPI Toulouse
          </p>

          <h1 className="text-4xl font-bold mt-2">
            Résidence Victor Hugo
          </h1>

          <p className="mt-3 text-white/90">
            Dernier passage aujourd’hui 08:14
          </p>

        </div>

      </div>

      <div className="px-6 -mt-10 relative z-10">

        <div className="bg-white rounded-[35px] shadow-xl p-6 border border-gray-100">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-gray-500 text-sm">
                Score global
              </p>

              <h2 className="text-5xl font-bold text-gray-900 mt-2">
                98%
              </h2>
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
            href="/reports"
            className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"
          >

            <div className="text-4xl mb-3">
              📋
            </div>

            <h3 className="font-bold text-gray-900">
              Rapports
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Historique complet
            </p>

          </Link>

          <Link
            href="/complaints"
            className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center"
          >

            <div className="text-4xl mb-3">
              ⚠️
            </div>

            <h3 className="font-bold text-gray-900">
              Réclamation
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Signaler un problème
            </p>

          </Link>

          <button className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">

            <div className="text-4xl mb-3">
              ⭐
            </div>

            <h3 className="font-bold text-gray-900">
              Score
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Voir détails qualité
            </p>

          </button>

          <button className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">

            <div className="text-4xl mb-3">
              📝
            </div>

            <h3 className="font-bold text-gray-900">
              Notes
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Informations résidence
            </p>

          </button>

        </div>

        <div className="mt-8">

          <div className="flex items-center justify-between mb-4">

            <h2 className="text-2xl font-bold text-gray-900">
              Calendrier
            </h2>

            <span className="text-sm text-gray-500">
              Mai 2026
            </span>

          </div>

          <div className="grid grid-cols-4 gap-3">

            {cleaningDays.map((item) => {

              let style =
                "bg-gray-100 text-gray-400";

              if (item.scheduled) {
                style =
                  "bg-blue-100 text-blue-700";
              }

              if (item.completed) {
                style =
                  "bg-green-100 text-green-700";
              }

              const content = (
                <>
                  <span className="text-lg">
                    {item.day}
                  </span>

                  {item.completed && (
                    <span className="text-sm mt-1">
                      ✅
                    </span>
                  )}

                  {!item.completed && item.scheduled && (
                    <span className="text-sm mt-1">
                      🕒
                    </span>
                  )}
                </>
              );

              if (item.completed) {
                return (
                  <Link
                    href="/reports/1"
                    key={item.day}
                    className={`rounded-2xl h-20 flex flex-col items-center justify-center font-bold shadow-sm ${style}`}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <button
                  key={item.day}
                  className={`rounded-2xl h-20 flex flex-col items-center justify-center font-bold shadow-sm ${style}`}
                >
                  {content}
                </button>
              );
            })}

          </div>

        </div>

      </div>

    </main>
  );
}