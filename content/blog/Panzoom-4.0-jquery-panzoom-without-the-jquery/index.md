---
title: 'Panzoom 4.0: jquery.panzoom without the jquery.'
date: '2019-12-16'
description: Panzoom 4.0 is a complete rewrite of my old jquery.panzoom plugin that removes the jQuery dependency and makes it a universal library

draft: false
---

[Panzoom](https://github.com/timmywil/panzoom) is a small JavaScript library for panning and zooming HTML and SVG elements using CSS. This rewrite has been in the works for a long time, so I'm proud to introduce Panzoom 4.0!

## Rewrite highlights

1. Completely removed the jQuery dependency. Panzoom 4.0 has no dependencies and is even smaller than before (about 3.5kb gzipped).
1. Panzoom now supports Pointer Events wherever available, falling back to mouse and touch events. Panning, pinch zooming, and focal point zooming have first-class support.
1. Rather than passing callbacks or using jQuery events, the new Panzoom triggers native events. For instance, listen to the `panzoomend` event with `elem.addEventListener('panzoomend', ...)`.
1. Panzoom has been rewritten in TypeScript. Types are included with the package.
1. Documentation is now generated from TypeScript types and a custom script concatenates it all into the README.
1. Panzoom no longer uses complicated matrix calculations internally and instead relies on what browser implementors have already built. Moving to this paradigm played a major role in reducing the code size. Customizing the transform is easy with the new `setTransform` option.

## How is this different from other panning and/or zooming libraries?

- Many libraries use JavaScript animations rather than CSS transitions.
- Panzoom supports [Pointer Events](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent), even when pinch zooming on mobile devices!
- Panzoom is tiny (3.5kb gzipped). There are powerful libraries that support things like focal point zooming, but those libraries are often significantly larger.
- Panzoom relies on the native event API for events rather than redefining an event system using callbacks (i.e. `elem.addEventListener('panzoomend', ...)` instead of `Panzoom(elem, { onPanzoomEnd: fn }))`.
- Panzoom defines TypeScript types. Many libraries are written in JS and have no types.
- Panzoom supports SVG, which is not necessarily uncommon, but because it uses CSS transforms, SVG follows the same codepath as HTML. This also helps Panzoom stay small.

## Try it out

Install Panzoom using `yarn` or `npm`:

```bash
$ yarn add @panzoom/panzoom
```

or

```bash
$ npm install @panzoom/panzoom
```

Check out the demo here: [https://timmywil.com/panzoom/demo/](https://timmywil.com/panzoom/demo/)
