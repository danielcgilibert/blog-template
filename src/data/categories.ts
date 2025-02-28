// List of categories for blog posts
const CATEGORY_TITLES = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']

function sluglify(text: string) {
	return text.replace(/\s+/g, '-').toLowerCase()
}

export const CATEGORIES = CATEGORY_TITLES.map((title) => ({ title, slug: sluglify(title) }))

// Alternatively, you can be explicit with the slugs by replacing the content of the whole file with:
//
// export const CATEGORIES = [
// 	{ slug: 'category-1', title: 'Category 1' },
// 	{ slug: 'category-2', title: 'Category 2' },
// 	{ slug: 'category-3', title: 'Category 3' },
// 	{ slug: 'category-4', title: 'Category 4' },
// 	{ slug: 'category-5', title: 'Category 5' },
// ] as const
