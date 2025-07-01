export default function MainPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-8 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Main App</h1>
      <p className="text-lg text-blue-900 mb-6">Welcome to the main application</p>
      <a
        href="/sub-app"
        className="px-6 py-3 bg-blue-700 text-white rounded-xl shadow hover:bg-blue-800 transition"
      >
        Go to Sub App
      </a>
    </main>
  );
}
