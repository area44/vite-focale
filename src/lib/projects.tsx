import React from "react";
import ProjectDetail from "@/components/ProjectDetail";

const mdxModules = import.meta.glob("@/content/**/index.mdx", { eager: true });
const imageModules = import.meta.glob("@/content/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

export interface Project {
  slug: string;
  Component: React.ComponentType<any>;
  frontmatter: {
    title?: string;
    date?: string;
    excerpt?: string;
    cover?: string;
    gallery?: string[];
    tags?: string[];
  };
}

function resolveFile(mod: any): string {
  return mod.default ?? mod;
}

const list: Project[] = Object.entries(mdxModules)
  .map(([path, mod]: any) => {
    const parts = path.split("/");
    const slug = parts[parts.length - 2]; // folder name (aurora, drift)

    const fm = mod.frontmatter || {};

    let cover: string | undefined;
    if (fm.cover) {
      cover = resolveFile(
        imageModules[`/src/content/${slug}/${fm.cover.replace("./", "")}`]
      );
    }

    let gallery = Object.entries(imageModules)
      .filter(([imgPath]) => imgPath.includes(`/src/content/${slug}/`))
      .map(([imgPath, mod]) => ({
        path: imgPath,
        url: resolveFile(mod),
      }))
      .sort((a, b) => a.path.localeCompare(b.path)) // sort by filename
      .map((entry) => entry.url);

    // Remove cover from gallery if duplicated
    if (cover) {
      gallery = gallery.filter((img) => img !== cover);
    }

    return {
      slug,
      Component: mod.default,
      frontmatter: { ...fm, cover, gallery },
    };
  })
  .sort(
    (a, b) =>
      new Date(b.frontmatter.date ?? "").getTime() -
      new Date(a.frontmatter.date ?? "").getTime()
  );

export function useProjects() {
  return list;
}

export function dynamicProjectRoutes() {
  return list.map(({ slug, Component, frontmatter }) => ({
    path: `/project/${slug}`,
    element: (
      <ProjectDetail {...frontmatter}>
        <Component />
      </ProjectDetail>
    ),
  }));
}
