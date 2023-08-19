import './404.astro.6368a12b.mjs';
import { c as createAstro, a as createComponent, $ as $e, r as renderTemplate, d as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro.346bf1f6.mjs';
import { $ as $$Sidebar, a as $$BaseLayout } from './_...slug_.astro.784dce92.mjs';
import { $ as $$BlogPostCard } from './articles.astro.cb386fba.mjs';
/* empty css                         */import '@storyblok/js';
/* empty css                               *//* empty css                               *//* empty css                              */
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const storyblokApi = $e();
  const { data } = await storyblokApi.get("cdn/stories", {
    version: "published",
    content_type: "blogPost"
  });
  const posts = data.stories.map((story) => {
    return {
      title: story.content.title,
      date: story.published_at,
      image: story.content.preview_Image?.filename,
      description: story.content.description,
      slug: story.full_slug,
      tags: story.tag_list
    };
  });
  return renderTemplate`

${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "5 Kids and Planning" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Sidebar", $$Sidebar, {}, { "default": ($$result3) => renderTemplate`
		${maybeRenderHead()}<div id="articles">
			<ul class="space-y-16">
				${posts.slice(0, 5).map((story) => renderTemplate`<li>
							${renderComponent($$result3, "BlogPostCard", $$BlogPostCard, { "title": story.title, "date": new Date(story.date).toLocaleDateString("en-US", {
    dateStyle: "full"
  }), "image": story.image, "description": story.description, "slug": story.slug })}
						</li>`)}
			</ul>
			<button hx-post="/articles" name="next"${addAttribute(2, "value")} hx-target="#articles">
				next
			</button>
		</div>
		<aside class="max-w-full md:max-w-[28ch] space-y-4">
			<article>
				<h3 class="text-3xl font-bold">About Ashley</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur....
				</p>
			</article>
			<div>
				<h3 class="text-3xl font-bold">Recent Post</h3>
				<ul role="list">
					${posts.slice(0, 5).map((post) => {
    return renderTemplate`<li>
									<a${addAttribute(`/${post.slug}`, "href")}>${post.title}</a>
								</li>`;
  })}
				</ul>
			</div>
		</aside>
	` })}
` })}`;
}, "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/pages/index.astro");

const $$file = "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
