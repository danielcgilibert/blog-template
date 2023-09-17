import { CATEGORIES } from '../src/data/categories.ts'
import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
	branch,
	clientId: null, // Get this from tina.io
	token: null, // Get this from tina.io

	build: {
		outputFolder: 'admin',
		publicFolder: 'public'
	},
	media: {
		tina: {
			mediaRoot: '/src/assets/images',
			publicFolder: ''
		}
	},
	schema: {
		collections: [
			{
				name: 'post',
				label: 'Blog Post',
				path: 'src/content/blog',
				format: 'mdx',

				fields: [
					{
						type: 'image',
						label: 'Hero image',
						required: true,
						name: 'heroImage'
					},

					{
						type: 'string',
						required: true,
						name: 'category',
						label: 'Category',
						description: 'Select an category for this post',
						options: [...CATEGORIES]
					},
					{
						type: 'string',
						label: 'description',
						required: true,
						name: 'description'
					},
					{
						type: 'datetime',
						name: 'pubDate',
						label: 'Publication Date',
						required: true
					},
					{
						name: 'draft',
						label: 'Draft',
						type: 'boolean',
						description: 'If this is checked the post will not be published'
					},
					{
						type: 'string',
						name: 'tags',
						required: true,
						label: 'Tags',
						description: 'Tags for this post',
						list: true,
						ui: {
							component: 'tags'
						}
					},
					{
						type: 'string',
						name: 'title',
						label: 'Title',
						isTitle: true,
						required: true
					},
					{
						type: 'rich-text',
						label: 'Body',
						name: 'SButton',
						isBody: true,
						templates: [
							{
								label: 'Counter',
								name: 'Counter',
								fields: [
									{
										type: 'rich-text',
										label: 'Counter',
										name: 'Counter',
										isBody: true
									}
								]
							},
							{
								label: 'SButton',
								name: 'SButton',
								fields: [
									{
										type: 'rich-text',
										label: 'SButton',
										name: 'children',
										isBody: true
									}
								]
							}
						]
					}
				]
			}
		]
	}
})
