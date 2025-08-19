import { Link } from "react-router";

interface Props {
  slug: string;
  title?: string;
  cover?: string;
  excerpt?: string;
  date?: string;
  tags?: string[];
}

export default function ProjectCard({
  slug,
  title,
  cover,
  excerpt,
  date,
  tags = [],
}: Props) {
  return (
    <article className="mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {cover && (
        <Link to={`/project/${slug}`}>
          <img src={cover} alt={title} className="w-full object-cover" />
        </Link>
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg">
          <Link to={`/project/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        {excerpt && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {excerpt}
          </p>
        )}
        <div className="text-xs text-gray-400 mt-2 flex flex-wrap gap-2">
          {date && <span>{new Date(date).toLocaleDateString()}</span>}
          {tags.map((t) => (
            <span key={t}>#{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
