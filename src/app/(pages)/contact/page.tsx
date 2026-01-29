import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — FBA Calculator",
  description:
    "Contact the creator of the free FBA calculator. Suggestions and improvements are welcome.",
};
export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">
        Add your contact form here (email, WhatsApp, etc). We’ll build it next.
      </p>

      <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-950/60">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          For now you can place your email here, later we’ll add a premium contact form.
        </p>
      </div>
    </div>
  );
}
