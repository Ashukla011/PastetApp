import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePaste from "./components/CreatePaste";
import ViewPaste from "./components/ViewPaste";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">

        {/* Navbar */}
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-semibold text-gray-800"
            >
              PasteApp
            </Link>

            <nav className="flex gap-4 text-sm">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Create Paste
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<CreatePaste />} />
            <Route path="/p/:id" element={<ViewPaste />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="mt-12 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} PasteApp. All rights reserved.
        </footer>

      </div>
    </Router>
  );
}
