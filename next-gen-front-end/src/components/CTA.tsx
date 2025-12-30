export default function CTA() {
  return (
    <section className="bg-white py-20 px-6 text-black">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold">
          Ready to Grow Beyond the Classroom?
        </h2>
        <p className="mt-4 text-gray-700">
          Join Next Gen and start building your future today.
        </p>
        <a href="/signup">
          <button className="mt-8 rounded-xl bg-black px-8 py-3 font-semibold text-white hover:bg-gray-900 transition">
            Join Next Gen
          </button>
        </a>
      </div>
    </section>
  );
}
