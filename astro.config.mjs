import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import vercel from '@astrojs/vercel/serverless'
import vue from '@astrojs/vue'
const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
	output: 'server',
	integrations: [
		storyblok({
			accessToken: env.STORYBLOK_TOKEN,
			apiOptions: {
				region: 'us'
			}
		}),
		vue({ appEntrypoint: '/src/pages/_app' })
	],
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true
		}
	},
	adapter: vercel()
})
