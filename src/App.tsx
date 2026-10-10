import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import { isSupabaseConfigured } from './supabase';

// Placeholders for the pages we will build next
// Placeholders for the pages we will build next
const Jobs = () => <div className="p-8 text-center font-bold text-2xl">Jobs Page Content Coming Soon</div>;
const Workers = () => <div className="p-8 text-center font-bold text-2xl">Workers Page Content Coming Soon</div>;

export default function App() {
  if (!isSupabaseConfigured) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
        <section className="w-full max-w-xl rounded-2xl border border-amber-200 bg-white p-8 shadow-sm">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-amber-700">
            Deployment setup required
          </p>
          <h1 className="mb-3 text-2xl font-extrabold text-slate-900">
            LinkKaro needs its Supabase configuration
          </h1>
          <p className="mb-5 text-slate-600">
            Add these environment variables to your Vercel project, then redeploy:
          </p>
          <ul className="mb-5 list-inside list-disc space-y-2 font-mono text-sm text-slate-800">
            <li>VITE_SUPABASE_URL</li>
            <li>VITE_SUPABASE_ANON_KEY</li>
          </ul>
          <p className="text-sm text-slate-500">
            In Vercel, open the project settings, add the values from your Supabase
            project under Environment Variables, and redeploy the latest deployment.
          </p>
        </section>
      </main>
    );
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="workers" element={<Workers />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
