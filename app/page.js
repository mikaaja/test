export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
        🚀 Next.js + Tailwind
      </h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Ini adalah halaman <span className="font-semibold">Public</span> dari Next.js.  
        Web ini sudah siap untuk di-deploy ke <span className="text-green-600 font-bold">Vercel</span>.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/private.html"
          className="px-5 py-3 rounded-2xl bg-green-500 text-white font-semibold shadow hover:bg-green-600 transition"
        >
          🔒 Halaman Private (HTML)
        </a>
        <a
          href="https://vercel.com"
          target="_blank"
          className="px-5 py-3 rounded-2xl bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition"
        >
          🌍 Vercel
        </a>
      </div>
    </main>
  );
}