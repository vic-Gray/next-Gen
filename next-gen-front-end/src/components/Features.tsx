const features = [
  {
    title: "Skill Development",
    description:
      "Learn real-world skills through structured tracks from beginner to advanced.",
  },
  {
    title: "Mentorship",
    description:
      "Connect with mentors, book sessions, and grow with guidance.",
  },
  {
    title: "Events & Workshops",
    description:
      "Participate in talk shows, bootcamps, and campus programs.",
  },
  {
    title: "Certifications",
    description:
      "Earn verified certificates for skills and events completed.",
  },
];

export default function Features() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white">
          Everything Students Need to Grow
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/5 p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
