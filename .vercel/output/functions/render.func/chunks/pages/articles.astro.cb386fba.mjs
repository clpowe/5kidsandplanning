import './404.astro.6368a12b.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, $ as $e, d as renderComponent } from '../astro.346bf1f6.mjs';
/* empty css                              */
const $$Astro$1 = createAstro();
const $$BlogPostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostCard;
  const { title, date, image, description, slug, tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space-y-4">
	<time>${date}</time>
	<img height="200" width="600"${addAttribute(image, "src")} alt="" class="w-full">
	<div class="space-y-2">
		<h2 class="text-4xl font-bold">
			<a class=""${addAttribute(slug, "href")}>${title}</a>
		</h2>
		<p>${description}</p>
	</div>
</div>

<!-- <style>
	img {
		width: 100%;
		object-fit: cover;
		object-position: top;
	}
</style> -->`;
}, "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/components/BlogPostCard.astro");

const $$Astro = createAstro();
const $$Articles = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Articles;
  const storyblokApi = $e();
  const formData = await Astro2.request.formData();
  const paginate = formData.get("next")?.toString();
  let page = 1;
  if (paginate) {
    page = parseInt(paginate, 10);
  }
  const { data, perPage, total } = await storyblokApi.get("cdn/stories/", {
    version: "published",
    content_type: "blogPost",
    page,
    per_page: 5
  });
  let lastpage = Math.round(total / perPage);
  const stories = data.stories;
  return renderTemplate`${maybeRenderHead()}<ul class="space-y-16 astro-XVUKUGM6">
	${stories.map((story) => renderTemplate`<li class="astro-XVUKUGM6">
				${renderComponent($$result, "BlogPostCard", $$BlogPostCard, { "title": story.content.title, "date": new Date(story.published_at).toLocaleDateString("en-US", {
    dateStyle: "full"
  }), "image": story.content.preview_Image?.filename, "description": story.content.description, "slug": story.full_slug, "class": "astro-XVUKUGM6" })}
			</li>`)}
</ul>
<div class="pages astro-XVUKUGM6">
	${page > 1 && renderTemplate`<button hx-post="/articles" name="next"${addAttribute(page - 1, "value")} hx-target="#articles" class="astro-XVUKUGM6">
				prev
			</button>`}
	${lastpage >= page && renderTemplate`<button hx-post="/articles" name="next"${addAttribute(page + 1, "value")} hx-target="#articles" class="astro-XVUKUGM6">
				next
			</button>`}
</div>`;
}, "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/pages/articles.astro");

const $$file = "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/pages/articles.astro";
const $$url = "/articles";

const articles = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Articles,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BlogPostCard as $, articles as a };
