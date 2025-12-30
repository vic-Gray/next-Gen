export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Empowering Students to <br />
          <span className="text-white/90">Build Skills & Leadership</span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 md:text-xl">
          Next Gen is a campus-focused platform for skill development,
          mentorship, events, and verified certifications.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="/signup">
          <button className="rounded-xl bg-white px-6 py-3 text-black font-medium hover:bg-gray-200 transition">
            Get Started
          </button>
          </a>
          <button className="rounded-xl border border-gray-400 px-6 py-3 text-white hover:bg-gray-800 transition">
            Explore Programs
          </button>
        </div>
      </div>
    </section>
  );
}
