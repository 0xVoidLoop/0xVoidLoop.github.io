import { defineConfig } from 'astro/config';

import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import spectre from './package/src';

import node from '@astrojs/node';
import { spectreDark } from './src/ec-theme';

// https://astro.build/config
export default defineConfig({
  site: 'https://0xvoidloop.github.io',
  output: 'static',
  integrations: [
    expressiveCode({
      themes: [spectreDark],
    }),
    mdx(),
    sitemap(),
    spectre({
      name: '0xVoidLoop',
      openGraph: {
        home: {
          title: '0xVoidLoop',
          description: 'My personal blog and portfolio.',
        },
        blog: {
          title: 'Blog',
          description: 'Blogs for 0xVoidLoop.'
        },
        projects: {
          title: 'Projects'
        }
      },
      giscus: {
        repository: '0xVoidLoop/0xvoidloop.github.io',
        repositoryId: 'R_kgDOOt2mWw',
        category: 'General',
        categoryId: 'DIC_kwDOOt2mW84CqaoH',
        mapping: 'pathname',
        strict: true,
        reactionsEnabled: true,
        emitMetadata: false,
        lang: 'en',
      }
    })
  ],
});