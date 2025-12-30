const steps = [
  "Create your free account",
  "Choose skills, mentors, or events",
  "Learn, grow, and earn certificates",
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white">How It Works</h2>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="rounded-xl p-6 bg-white/5">
              <div className="mb-4 text-2xl font-bold text-white/90">
                {index + 1}
              </div>
              <p className="text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
