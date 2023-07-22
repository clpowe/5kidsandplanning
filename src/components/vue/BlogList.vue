<template>
	<div>
		<ul>
			<li v-for="post in posts">
				<BlogPostCard
					:title="post.title"
					:date="post.date"
					:image="post.image"
					:description="post.description"
					:slug="post.slug"
				/>
			</li>
		</ul>
		<button v-if="page > 1" @click="prevPage">prev</button>
		<button v-if="!lastpage" @click="nextPage">next</button>
	</div>
</template>

<script setup lang="ts">
	import { ref, watch, computed, Ref } from 'vue'
	import { useStoryblokApi } from '@storyblok/vue'
	import type { Story } from '../../Types/Blog'
	import BlogPostCard from './BlogPostCard.vue'

	const page = ref(1)
	const posts: Ref<Post[]> = ref([])
	const per_page = ref()
	const total_pages = ref()
	const lastpage = computed(
		() => page.value === Math.round(total_pages.value / per_page.value)
	)

	const storyblokApi = useStoryblokApi()

	type Post = {
		title: string
		date: string
		image: string
		description: string
		slug: string
		tags: string[]
	}

	watch(
		page,
		async () => {
			const { data, perPage, total } = await storyblokApi.get('cdn/stories/', {
				version: 'draft',
				content_type: 'blogPost',
				page: page.value,
				per_page: 4
			})

			per_page.value = perPage
			total_pages.value = total

			posts.value = data.stories.map((story: Story) => {
				return {
					title: story.content.title,
					date: new Date(story.published_at).toLocaleDateString('en-US', {
						dateStyle: 'full'
					}),
					image: story.content.preview_Image?.filename,
					description: story.content.description,
					slug: story.full_slug,
					tags: story.tag_list
				}
			})
		},
		{ immediate: true }
	)

	function prevPage() {
		if (page.value === 1) {
			return
		}
		page.value--
	}
	function nextPage() {
		if (!lastpage.value) {
			page.value++
		}
	}
</script>

<style scoped>
	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
