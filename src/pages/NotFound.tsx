import { Link } from "react-router";

export default function NotFound() {
  return (
    <section>
      <h1 className="text-2xl font-bold">404 — Not Found</h1>
      <p className="mt-2">This page doesn’t exist.</p>
      <Link to="/" className="underline mt-4 block">
        ← Back to work
      </Link>
    </section>
  );
}
