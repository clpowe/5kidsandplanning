import './404.astro.6368a12b.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, e as renderSlot, b as renderHead, $ as $e, f as addAttribute } from '../astro.346bf1f6.mjs';
/* empty css                               *//* empty css                               */
const $$Astro$4 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="astro-SZ7XMLTE">
  <div class="container astro-SZ7XMLTE">
    <div class="parent astro-SZ7XMLTE">
      <div class="astro-SZ7XMLTE">
        <h3 class="astro-SZ7XMLTE">Follow Me</h3>
        <nav class="astro-SZ7XMLTE">
          <ul class="astro-SZ7XMLTE">
            <li class="astro-SZ7XMLTE">
              <a href="" class="astro-SZ7XMLTE">Facebook</a>
            </li>
            <li class="astro-SZ7XMLTE">
              <a href="" class="astro-SZ7XMLTE">Instagram</a>
            </li>
            <li class="astro-SZ7XMLTE">
              <a href="" class="astro-SZ7XMLTE">Twitter</a>
            </li>
            <li class="astro-SZ7XMLTE">
              <a href="" class="astro-SZ7XMLTE">Threads</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="astro-SZ7XMLTE">
        <form class="astro-SZ7XMLTE">
          <h3 class="astro-SZ7XMLTE">Newsletter Signup</h3>
          <label for="Email" class="astro-SZ7XMLTE">Enter your email</label>
          <div class="input astro-SZ7XMLTE">
            <input type="email" placeholder="Enter your email..." class="astro-SZ7XMLTE">
            <button class="astro-SZ7XMLTE">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</footer>`;
}, "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/components/Footer.astro");

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="astro-3EF6KSR2">
	<div class="container mx-auto header astro-3EF6KSR2">
		<div class="bar astro-3EF6KSR2"></div>
		<div class="astro-3EF6KSR2">
			<a href="/" class="astro-3EF6KSR2">
				<h1 class="text-5xl font-bold astro-3EF6KSR2">5 Kids and Planning</h1>
			</a>
			<p class="text-2xl astro-3EF6KSR2">A bolg about motherhood</p>
		</div>
		<div class="bar astro-3EF6KSR2"></div>
	</div>
</header>`;
}, "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/components/Header.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="astro-37FXCHFA">\n	<head>\n		<meta charset="utf-8">\n		<meta name="viewport" content="width=device-width, initial-scale=1">\n		<script src="https://unpkg.com/htmx.org@1.9.4"><\/script>\n		<title>', "</title>\n	", '</head>\n	<body class="parent astro-37FXCHFA">\n		', '\n		<main class="max-w-[110ch] px-4 mx-auto sm:my-16 md:my-24 astro-37FXCHFA">\n			', "\n		</main>\n		", "\n	</body></html>"])), title, renderHead(), renderComponent($$result, "Header", $$Header, { "class": "astro-37FXCHFA" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "class": "astro-37FXCHFA" }));
}, "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/layouts/BaseLayout.astro");

const $$Astro$1 = createAstro();
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Sidebar;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-8 md:flex-row">
	${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/components/Sidebar.astro");

const $$Astro = createAstro();
async function getStaticPaths() {
  const storyblokApi = $e();
  const { data: allposts } = await storyblokApi.get("cdn/stories", {
    version: "published",
    content_type: "blogPost"
  });
  const pages = allposts.stories.map((s) => {
    return { params: { slug: s.slug } };
  });
  return [...pages];
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const storyblokApi = $e();
  const { slug } = Astro2.params;
  const { data } = await storyblokApi.get(
    `cdn/stories/blog/${slug}`,
    {
      version: "published"
    }
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": data.story.name, "class": "astro-7JJQPTXK" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead()}<main class="astro-7JJQPTXK">
		${renderComponent($$result2, "Sidebar", $$Sidebar, { "class": "astro-7JJQPTXK" }, { "default": ($$result3) => renderTemplate`
			<article class="w-full astro-7JJQPTXK">
				<img${addAttribute(data.story.content.main_image.filename, "src")} height="300" width="672" alt="" class=" astro-7JJQPTXK">
				<h1 class="astro-7JJQPTXK">${data.story.name}</h1>
				<p class="text-base prose prose-truegray astro-7JJQPTXK">
					${data.story.content.content}
				</p>
				<div class="astro-7JJQPTXK">
					<!-- <Author
						name={author.name}
						quote={author.tagline}
						image={author.image.filename}
					/> -->
				</div>
			</article>
			
		` })}
	</main>
` })}`;
}, "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/pages/blog/[...slug].astro");

const $$file = "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Sidebar as $, ____slug_ as _, $$BaseLayout as a };
