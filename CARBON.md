# METUSAR: Carbon implementation

This branch applies Carbon foundations to the existing six-page, static website.
It is a branded adaptation, not an unmodified IBM product UI.

## Foundations

- IBM Plex Sans 300 / 400 / 500 / 600 and IBM Plex Mono 400 are self-hosted.
- White background with Carbon Gray 10 surfaces and a Gray 100 navigation/footer.
- METUSAR #CC0000 replaces the primary action color; hover #A80000 and active #850000.
- A 4 / 8 / 16-column page grid uses the Carbon 672px / 1056px / 1584px breakpoints.
- Spacing uses the Carbon 2 / 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 160px scale.
- Expressive headings and productive body, label, and control sizes.
- Layout panels and buttons have square corners. Tags retain Carbon's rounded shape.

## Components

Actual @carbon/styles button, text input, and tag CSS is compiled from src/carbon.scss
into assets/css/carbon.css. The navigation, editorial tiles, timeline, and filter group
are semantic HTML/JS implementations styled to these foundations; they are not Carbon
React components. Filter buttons use aria-pressed, not tab roles, because they filter
content rather than change tab panels.

Keyboard focus, a skip link, input labels, reduced motion, active navigation and mobile
menu Escape handling are implemented. The brand mark geometry is retained.

## Run

```
npm ci
npm run build:css
npm run check
npm run dev
```

To view without Node, open index.html or run `python3 -m http.server 8000` from this folder.
Compiled styles, fonts, and JS are committed, so GitHub Pages can serve the files directly
without running npm. Never copy node_modules into the published site.

## Source and content

Base: heckedbyfurki/METUSAR main, 7cff26859fe7eb7730a217562b6c1a755cb20350.
The earlier unpublished design/metusar-ui branch was not present on the remote.
No fabricated team photographs, performance statistics, or achievements were added.
Existing draft content in the other pages remains editable. Unconfigured social links
were removed from the shared footer rather than sending users to generic home pages.

## Validation

- Sass compilation and all three JavaScript syntax checks passed.
- Six HTML pages and their local stylesheet/script/font references were checked.
- Browser checked at 1363px desktop and inside a 390px responsive iframe.
- Mobile menu open/close and Escape, active filter state, search empty result passed.
- Desktop computed primary color is rgb(204, 0, 0), font is IBM Plex Sans, and no horizontal overflow was observed.
