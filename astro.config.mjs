// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 커스텀 도메인 사용 시: 'https://dvzuby.blog'
	// 커스텀 도메인 없이 GitHub Pages 사용 시: 'https://dvzuby.github.io/dvzuby.blog'
	site: 'https://dvzuby.github.io/dvzuby.blog',
	// 커스텀 도메인 없이 GitHub Pages 사용 시 base 필요
	// 커스텀 도메인 사용 시 아래 줄 삭제
	base: '/dvzuby.blog',
	integrations: [mdx(), sitemap()],
});
