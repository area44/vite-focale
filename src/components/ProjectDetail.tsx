import React from "react";

interface ProjectDetailProps {
  title?: string;
  cover?: string;
  gallery?: string[];
  excerpt?: string;
  date?: string;
  tags?: string[];
  children?: React.ReactNode; // MDX body
}

export default function ProjectDetail({
  title,
  cover,
  gallery = [],
  excerpt,
  children,
}: ProjectDetailProps) {
  return (
    <div className="space-y-8">
      {cover && (
        <img
          src={cover}
          alt={title}
          className="w-full max-h-[500px] object-cover rounded-lg"
        />
      )}

      <h1 className="text-3xl font-bold">{title}</h1>
      {excerpt && <p className="text-lg text-gray-600">{excerpt}</p>}

      {/* Gallery */}
      {gallery.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${title} image ${i + 1}`}
              className="rounded-lg object-cover"
            />
          ))}
        </div>
      )}

      {/* MDX body */}
      <article className="prose max-w-none">{children}</article>
    </div>
  );
}
