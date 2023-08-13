import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'
import vercel from '@astrojs/vercel/serverless'
import vue from '@astrojs/vue'
import unocss from '@unocss/astro'
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'
import presetTypography from '@unocss/preset-typography'
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

		unocss({
			// injectReset: true,
			presets: [presetWind(), presetIcons(), presetTypography()]
		})
	],
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true
		}
	}
})
