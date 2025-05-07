import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
		prerender: {
			concurrency: 1,
			crawl: true,
			entries: ['*', '/blog/1']
		},
    paths: {
      base: dev ? '' : process.env.BASE_PATH,
    }
  }
};

export default config;