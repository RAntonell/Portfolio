import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const workFiles = glob({ pattern: '*.md', base: './src/content/work' });

const work = defineCollection({
  loader: {
    name: 'work',
    load: async (context) => {
      await workFiles.load(context);
      if (import.meta.env.DEV) return;
      for (const [id, entry] of context.store.entries()) {
        if (entry.data.draft) context.store.delete(id);
      }
    },
  },
  schema: z.object({
    title: z.string(),
    description: z.string(),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
