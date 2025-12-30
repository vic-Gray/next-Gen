const images = [
  "/campus-1.jpg",
  "/campus-2.jpg",
  "/campus-3.jpg",
  "/campus-4.jpg",
  "/campus-5.jpg",
];

export default function CampusGallery() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-white">
          Explore Our Campus Life
        </h2>
        <p className="mt-4 text-gray-300">
          A glimpse of students, events, and campus experiences.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden rounded-xl">
              <img
                src={src}
                alt={`Campus image ${idx + 1}`}
                className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
