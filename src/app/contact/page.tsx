export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">Contact</h1>
      <p className="mt-4 text-slate-700 leading-7">
        For feedback, suggestions, or partnership requests, contact us at:
      </p>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-sm text-slate-600">Email</p>
        <p className="mt-1 font-semibold text-slate-900">support@yourdomain.com</p>
        <p className="mt-2 text-xs text-slate-500">
          (Replace this email later with your real business email)
        </p>
      </div>
    </main>
  );
}
