import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    category: z.string(),
    summary: z.string(),
    stats: z.array(z.string()),
    problem: z.string(),
    solution: z.string(),
    results: z.string(),
    images: z.array(z.string()).default([]),
  }),
});

export const collections = {
  "case-studies": caseStudies,
};
