export interface Blok {
	story: Story
	cv: number
	rels: any[]
	links: any[]
}

export interface Story {
	name: string
	created_at: Date
	published_at: Date
	id: number
	uuid: string
	content: Content
	slug: string
	full_slug: string
	sort_by_date: null
	position: number
	tag_list: string[]
	is_startpage: boolean
	parent_id: number
	meta_data: null
	group_id: string
	first_published_at: Date
	release_id: null
	lang: string
	path: null
	alternates: any[]
	default_full_slug: null
	translated_slugs: null
}

export interface Content {
	_uid: string
	title: string
	Author: string
	posted: string
	content: string
	updated: string
	component: string
	main_image: Image
	description: string
	preview_Image: Image
}

export interface Image {
	id: number
	alt: string
	name: string
	focus: string
	title: string
	source: string
	filename: string
	copyright: string
	fieldtype: string
	meta_data: MetaData
	is_external_url: boolean
}

export interface MetaData {}
