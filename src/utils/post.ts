import type { CollectionEntry } from 'astro:content'

export const getCategories = (posts: CollectionEntry<'blog'>[]) => {
  const categories = new Set(posts.map((post) => post.data.category))
  return Array.from(categories)
}
