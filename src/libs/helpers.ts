export const getCategories = (posts: any[]) => {
	const categories = new Set(posts.map((post) => post.data.category))
	return Array.from(categories)
}
