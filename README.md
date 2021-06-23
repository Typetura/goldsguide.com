**The main files are:**

- `default.hbs` - The parent template file, which includes your global header/footer
- `index.hbs` - The main template to generate a list of posts, usually the home page
- `post.hbs` - The template used to render individual posts
- `page.hbs` - Used for individual pages
- `tag.hbs` - Used for tag archives, eg. "all posts tagged with `news`"
- `author.hbs` - Used for author archives, eg. "all posts written by Jamie"

One neat trick is that you can also create custom one-off templates by adding the slug of a page to a template file. For example:

- `page-about.hbs` - Custom template for an `/about/` page
- `tag-news.hbs` - Custom template for `/tag/news/` archive
- `author-ali.hbs` - Custom template for `/author/ali/` archive

# Development

GoldsGuide styles are compiled using Sass. You’ll need [Node](https://nodejs.org/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme’s root directory:

```bash
# install dependencies
npm install

# run development server
npm run dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
npm run zip
```

# SVG Icons

GoldsGuide uses inline SVG icons, included via Handlebars partials. You can find all icons inside `/partials/icons`. To use an icon just include the name of the relevant file, eg. To include the SVG icon in `/partials/icons/rss.hbs` - use `{{> "icons/rss"}}`.

You can add your own SVG icons in the same manner.

# Copyright & License

Copyright (c) 2021 Golds Guide & Typetura. All rights reserved.
