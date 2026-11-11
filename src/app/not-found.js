import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span className="brand-mark">PJ.</span>
      <h1>Project not found.</h1>
      <Link href="/#works">← Back to selected works</Link>
    </main>
  );
}

