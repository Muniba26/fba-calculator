import Link from "next/link";

export default function BackToGuides({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/guides"
      className={`inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full hover:opacity-90 transition ${className}`}
    >
      ← Back to Guides
    </Link>
  );
}