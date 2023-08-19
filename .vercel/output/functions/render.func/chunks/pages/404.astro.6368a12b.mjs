/* empty css                         */import { storyblokInit, apiPlugin } from '@storyblok/js';
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead } from '../astro.346bf1f6.mjs';

const { storyblokApi } = storyblokInit({
            accessToken: "Mh1KoGhRRjv8nBzvBNF2fAtt",
            use: [apiPlugin],
            apiOptions: {"region":"us"},
          });
          const storyblokApiInstance = storyblokApi;

globalThis.storyblokApiInstance = storyblokApiInstance;

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`<html lang="en">
  <head>
    <title>Not found</title>
  ${renderHead()}</head>
  <body>
    <p>Sorry, this page does not exist.</p>
  </body></html>`;
}, "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/pages/404.astro");

const $$file = "/Users/christopherpowe/Documents/AshleyBlog/ashblog/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
