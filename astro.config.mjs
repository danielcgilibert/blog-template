import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { remarkReadingTime } from './src/utils/readTime.ts'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog-template-gray.vercel.app/', // Write here your website url
  experimental: {
    assets: true,
    // viewTransitions: false,
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    // drafts: true,
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: {
        theme: 'github-dark-dimmed',
        wrap: true,
      },
      // drafts: true,
    }),
    sitemap(),
    tailwind(),
  ],
})
