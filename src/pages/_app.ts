import type { App } from 'vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue'

export default (app: App) => {
	app.use(StoryblokVue, {
		accessToken: 'Mh1KoGhRRjv8nBzvBNF2fAtt',
		apiOptions: {
			region: 'us'
		},
		use: [apiPlugin]
	})
}
