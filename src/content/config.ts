import { defineCollection, z } from 'astro:content';

const playgroundCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    deployedTo: z.string().optional(),
    codeOn: z.string().optional(),
    builtWith: z.array(z.string()),
  }),
});

export const collections = {
  'playground': playgroundCollection,
};
