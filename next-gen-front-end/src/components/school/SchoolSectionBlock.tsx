interface SchoolSectionBlockProps {
  id: string;
  title: string;
  content: string;
  className?: string;
}

export function SchoolSectionBlock({ id, title, content, className = '' }: SchoolSectionBlockProps) {
  return (
    <section id={id} className={`py-20 bg-neutral-950 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            {title}
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-neutral-300 leading-relaxed text-center">
              {content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}