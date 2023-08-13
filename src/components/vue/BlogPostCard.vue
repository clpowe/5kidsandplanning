<template>
	<div>
		<img height="200" width="600" :src="image" alt="" class="img" />
		<h2>
			<a :href="slug">{{ title }}</a>
		</h2>
		<time>{{ date }}</time>
		<p>{{ description }}</p>
	</div>
</template>

<script setup>
	defineProps({
		title: String,
		date: String,
		image: String,
		description: String,
		slug: String,
		tags: String
	})
</script>

<style>
	.img {
		width: 100%;
		object-fit: cover;
		object-position: top;
	}
</style>
