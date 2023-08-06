/** @type {import("prettier").Config} */
module.exports = {
	// i am just using the standard config, change if you need something else
	...require('prettier-config-standard'),
	pluginSearchDirs: [__dirname],
	printWidth: 100,
	semi: false,
	singleQuote: true,
	jsxSingleQuote: true,
	tabWidth: 2,
	useTabs: true,

	plugins: [require.resolve('prettier-plugin-astro')],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro'
			}
		}
	]
}
