import Masonry from "react-masonry-css";
import ProjectCard from "@/components/ProjectCard";
import { useProjects } from "@/lib/projects";

export default function Home() {
  const projects = useProjects();
  const breakpoints = { default: 3, 1024: 2, 640: 1 };

  return (
    <section>
      <h1 className="text-3xl font-bold mb-2">Selected Work</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        A curated collection of projects.
      </p>
      <Masonry
        breakpointCols={breakpoints}
        className="flex -ml-6"
        columnClassName="pl-6"
      >
        {projects.map((p) => (
          <ProjectCard
            key={p.slug}
            slug={p.slug}
            title={p.frontmatter.title || p.slug}
            cover={p.frontmatter.cover}
            excerpt={p.frontmatter.excerpt}
            date={p.frontmatter.date}
            tags={p.frontmatter.tags}
          />
        ))}
      </Masonry>
    </section>
  );
}
