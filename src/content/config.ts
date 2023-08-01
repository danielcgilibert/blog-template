import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      heroImage: image().optional(),
      category: z.enum(CATEGORIES),
      tags: z.array(z.string()),
      draft: z.boolean().default(false),
    }),
})

export const collections = { blog }
