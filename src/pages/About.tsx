export default function About() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="mb-2">
        I’m a designer/developer creating expressive portfolios.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Contact:{" "}
        <a href="mailto:you@example.com" className="underline">
          you@example.com
        </a>
      </p>
    </section>
  );
}
