import { getCollection } from 'astro:content'
import { CATEGORIES } from '@/data/categories'

export const getCategories = async () => {
	const posts = await getCollection('blog')
	const categories = new Set(
		posts.filter((post) => !post.data.draft).map((post) => post.data.category)
	)
	return Array.from(categories).sort((a, b) =>
		CATEGORIES.indexOf(a) < CATEGORIES.indexOf(b) ? -1 : 1
	)
}

export const getPosts = async (max?: number) => {
	return (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}

export const getTags = async () => {
	const posts = await getCollection('blog')
	const tags = new Set()
	posts
		.filter((post) => !post.data.draft)
		.forEach((post) => {
			post.data.tags.forEach((tag) => {
				tags.add(tag.toLowerCase())
			})
		})

	return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
	const posts = await getPosts()
	const lowercaseTag = tag.toLowerCase()
	return posts
		.filter((post) => !post.data.draft)
		.filter((post) => {
			return post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag)
		})
}

export const filterPostsByCategory = async (category: string) => {
	const posts = await getPosts()
	return posts
		.filter((post) => !post.data.draft)
		.filter((post) => post.data.category.toLowerCase() === category)
}
