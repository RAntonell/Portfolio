import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const workFiles = glob({ pattern: '*.{md,mdx}', base: './src/content/work' });

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
    glance: z.array(z.object({ label: z.string(), value: z.string() })).min(1),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
