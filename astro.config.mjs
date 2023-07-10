import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import remarkToc from 'remark-toc'

import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog-template-gray.vercel.app/', // Write here your website url
  markdown: {
    remarkPlugins: [remarkToc],
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
      remarkPlugins: [remarkToc],
      // drafts: true,
    }),
    sitemap(),
    tailwind(),
    image(),
  ],
})
