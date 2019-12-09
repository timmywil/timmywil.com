---
title: 'Panzoom 4.0: jquery.panzoom without the jquery.'
date: '2019-12-09T22:30:12.885Z'
description: Panzoom 4.0 is a complete rewrite of my old jquery.panzoom plugin that removes the jQuery dependency and makes it a universal library

draft: true
---

[Panzoom](https://github.com/timmywil/panzoom) is a small JavaScript library for panning and zooming HTML and SVG elements using CSS. This rewrite has been in the works for a long time, so I'm proud to introduce Panzoom 4.0!

## Highlights

1. Completely removed the jQuery dependency. Panzoom 4.0 has no dependencies and is even smaller than before (about 3.5kb gzipped).
1. Panzoom now supports Pointer Events wherever available, falling back to mouse and touch events. Panning, pinch zooming, and focal point zooming have first-class support.
1. Rather than passing callbacks or using jQuery events, the new Panzoom triggers native events. For instance, listen to the `panzoomend` event with `elem.addEventListener('panzoomend', ...)`.
1. Panzoom has been rewritten in TypeScript. Types are included with the package.
1. Documentation is now generated from TypeScript types and a custom script concatenates it all into the README.
1. Panzoom no longer uses complicated matrix calculations internally and instead relies on what browser implementors have already built. This allowed me to remove a lot of code. Customizing the transform is easy with the new `setTransform` option.

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
