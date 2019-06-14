# Get Started with the Google Fonts API



This guide explains how to use the Google Fonts API to add fonts to your web pages. You don't need to do any programming; all you have to do is add a special stylesheet link to your HTML document, then refer to the font in a CSS style.

## A quick example

Here's an example. Copy and paste the following HTML into a file:

```html
<html>
  <head>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Tangerine">
    <style>
      body {
        font-family: 'Tangerine', serif;
        font-size: 48px;
      }
    </style>
  </head>
  <body>
    <div>Making the Web Beautiful!</div>
  </body>
</html>
```

Then open the file in a modern web browser. You should see a page displaying the following, in the font called Tangerine:

Making the Web Beautiful!

That sentence is ordinary text, so you can change how it looks by using CSS. Try adding a shadow to the style in the previous example:

```css
body {
  font-family: 'Tangerine', serif;
  font-size: 48px;
  text-shadow: 4px 4px 4px #aaa;
}
```

You should now see a drop shadow under the text:

Making the Web Beautiful!

And that's only the beginning of what you can do with the Fonts API and CSS.

## Overview

You can start using the Google Fonts API in just two steps:

1. Add a stylesheet link to request the desired web font(s):

   ```css
   <link rel="stylesheet"
     href="https://fonts.googleapis.com/css?family=Font+Name">
   ```

   

2. Style an element with the requested web font, either in a stylesheet:

   ```css
   .css-selector {
   font-family: 'Font Name', serif;
   }
   ```

   

   or with an inline style on the element itself:

   ```html
   <div style="font-family: 'Font Name', serif;">Your text</div>
   ```

   

**Note:** When specifying a web font in a CSS style, always list at least one fallback web-safe font in order to avoid unexpected behaviors. In particular, add a CSS generic font name like `serif` or `sans-serif` to the end of the list, so the browser can fall back to its default fonts if need be.

For a list of fonts you can use, see [Google Fonts](https://fonts.google.com/).

## Specifying font families and styles in a stylesheet URL

To determine what URL to use in your stylesheet link, start with the Google Fonts API base URL:

```
https://fonts.googleapis.com/css
```

Then, add the `family=` URL parameter, with one or more font family names and styles.

For example, to request the [Inconsolata](https://fonts.google.com/specimen/Inconsolata) font:

```
https://fonts.googleapis.com/css?family=Inconsolata
```

**Note:** Replace any spaces in the font family name with plus signs (`+`).

To request multiple font families, separate the names with a pipe character (`|`).

For example, to request the fonts [Tangerine](https://fonts.google.com/specimen/Tangerine), [Inconsolata](https://fonts.google.com/specimen/Inconsolata), and [Droid Sans](https://fonts.google.com/specimen/Droid+Sans):

```
https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans
```

Requesting multiple fonts allows you to use all of those fonts in your page. (But don't go overboard; most pages don't need very many fonts, and requesting a lot of fonts may make your pages slow to load.)

The Google Fonts API provides the regular version of the requested fonts by default. To request other styles or weights, append a colon (`:`) to the name of the font, followed by a list of styles or weights separated by commas (`,`).

For example:

```
https://fonts.googleapis.com/css?family=Tangerine:bold,bolditalic|Inconsolata:italic|Droid+Sans
```

To find out which styles and weights are available for a given font, see the font's listing in [Google Fonts](https://fonts.google.com/).

For each style you request, you can give either the full name or an abbreviation; for weights, you can alternatively specify a numerical weight:

| Style       | Specifiers                                      |
| :---------- | :---------------------------------------------- |
| italic      | `italic` or `i`                                 |
| bold        | `bold` or `b` or a numerical weight such as 700 |
| bold italic | `bolditalic` or `bi`                            |

For example, to request Cantarell italic and Droid Serif bold, you could use any of the following URLs:

```
https://fonts.googleapis.com/css?family=Cantarell:italic|Droid+Serif:bold
https://fonts.googleapis.com/css?family=Cantarell:i|Droid+Serif:b
https://fonts.googleapis.com/css?family=Cantarell:i|Droid+Serif:700
```



## Use font-display

[font-display](https://www.w3.org/TR/css-fonts-4/#font-display-desc) lets you control what happens while the font is unavailable. Specifying a value other than the default `auto`is usually appropriate.

Pass the desired value in the querystring `display` parameter:

```
https://fonts.googleapis.com/css?family=Roboto&display=swap
```



## Specifying script subsets

Some of the fonts in the [Google Font Directory](https://fonts.google.com/) support multiple scripts (like Latin, Cyrillic, and Greek for example). In order to specify which subsets should be downloaded the subset parameter should be appended to the URL.

For example, to request the Cyrillic subset of the [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) font, the URL would be:

```
https://fonts.googleapis.com/css?family=Roboto+Mono&subset=cyrillic
```

To request the Greek subset of the [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) font, the URL would be:

```
https://fonts.googleapis.com/css?family=Roboto+Mono&subset=greek
```

To request both Greek and Cyrillic subsets of the [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono) font, the URL would be:

```
https://fonts.googleapis.com/css?family=Roboto+Mono&subset=greek,cyrillic
```

The Latin subset is always included if available and need not be specified. Please note that if a client browser supports unicode-range (<http://caniuse.com/#feat=font-unicode-range>) the subset parameter is ignored; the browser will select from the subsets supported by the font to get what it needs to render the text.

For a complete list of available fonts and font subsets please see [Google Fonts](https://fonts.google.com/).

## Optimizing your font requests

Oftentimes, when you want to use a web font on your website or application, you know in advance which letters you'll need. This often occurs when you're using a web font in a logo or heading.

In these cases, you should consider specifying a `text=` value in your font request URL. This allows Google to return a font file that's optimized for your request. In some cases, this can reduce the size of the font file by up to 90%.

To use this new beta feature, simply add `text=` to your Google Fonts API requests. For example if you're only using Inconsolata for the title of your blog, you can put the title itself as the value of `text=`. Here is what the request would look like:

```
https://fonts.googleapis.com/css?family=Inconsolata&text=Hello
```

As with all query strings, you should URL-encode the value:

```
https://fonts.googleapis.com/css?family=Inconsolata&text=Hello%20World
```

This feature also works for international fonts, allowing you to specify UTF-8 characters. For example, ¡Hola! is represented as:

```
https://fonts.googleapis.com/css?family=Inconsolata&text=%c2%a1Hola!
```

**Note:** there's no need to specify the `subset=` parameter when using `text=` as it allows you to refer to any character in the original font.

## Enabling font effects (Beta)

When making headers or display texts on your website, you'll often want to stylize your text in a decorative way. To simplify your work, Google has provided a collection of font effects that you can use with minimal effort to produce beautiful display text. For example:

This is a font effect!

To use this new beta feature, simply add `effect=` to your Google Fonts API request and add the corresponding class name to the HTML element(s) that you want to affect. In our example above, we used the `shadow-multiple` font effect, so the request would look like:

```
https://fonts.googleapis.com/css?family=Rancho&effect=shadow-multiple
```

To use the effect, add the corresponding class name to your HTML element(s). The corresponding class name is always the effect name prefixed with `font-effect-`, so the class name for `shadow-multiple` would be `font-effect-shadow-multiple`:

```
<div class="font-effect-shadow-multiple">This is a font effect!<div>
```

You can request multiple effects by separating the effect names with a pipe character (`|`).

```
https://fonts.googleapis.com/css?family=Rancho&effect=shadow-multiple|3d-float
```

Here is a complete listing of all the font effects that we offer:

| Effect                  | API Name          | Class Name                    | Support                        |
| :---------------------- | :---------------- | :---------------------------- | :----------------------------- |
| Anaglyph                | `anaglyph`        | `font-effect-anaglyph`        | Chrome, Firefox, Opera, Safari |
| Brick Sign              | `brick-sign`      | `font-effect-brick-sign`      | Chrome, Safari                 |
| Canvas Print            | `canvas-print`    | `font-effect-canvas-print`    | Chrome, Safari                 |
| Crackle                 | `crackle`         | `font-effect-crackle`         | Chrome, Safari                 |
| Decaying                | `decaying`        | `font-effect-decaying`        | Chrome, Safari                 |
| Destruction             | `destruction`     | `font-effect-destruction`     | Chrome, Safari                 |
| Distressed              | `distressed`      | `font-effect-distressed`      | Chrome, Safari                 |
| Distressed Wood         | `distressed-wood` | `font-effect-distressed-wood` | Chrome, Safari                 |
| Emboss                  | `emboss`          | `font-effect-emboss`          | Chrome, Firefox, Opera, Safari |
| Fire                    | `fire`            | `font-effect-fire`            | Chrome, Firefox, Opera, Safari |
| Fire Animation          | `fire-animation`  | `font-effect-fire-animation`  | Chrome, Firefox, Opera, Safari |
| Fragile                 | `fragile`         | `font-effect-fragile`         | Chrome, Safari                 |
| Grass                   | `grass`           | `font-effect-grass`           | Chrome, Safari                 |
| Ice                     | `ice`             | `font-effect-ice`             | Chrome, Safari                 |
| Mitosis                 | `mitosis`         | `font-effect-mitosis`         | Chrome, Safari                 |
| Neon                    | `neon`            | `font-effect-neon`            | Chrome, Firefox, Opera, Safari |
| Outline                 | `outline`         | `font-effect-outline`         | Chrome, Firefox, Opera, Safari |
| Putting Green           | `putting-green`   | `font-effect-putting-green`   | Chrome, Safari                 |
| Scuffed Steel           | `scuffed-steel`   | `font-effect-scuffed-steel`   | Chrome, Safari                 |
| Shadow Multiple         | `shadow-multiple` | `font-effect-shadow-multiple` | Chrome, Firefox, Opera, Safari |
| Splintered              | `splintered`      | `font-effect-splintered`      | Chrome, Safari                 |
| Static                  | `static`          | `font-effect-static`          | Chrome, Safari                 |
| Stonewash               | `stonewash`       | `font-effect-stonewash`       | Chrome, Safari                 |
| Three Dimensional       | `3d`              | `font-effect-3d`              | Chrome, Firefox, Opera, Safari |
| Three Dimensional Float | `3d-float`        | `font-effect-3d-float`        | Chrome, Firefox, Opera, Safari |
| Vintage                 | `vintage`         | `font-effect-vintage`         | Chrome, Safari                 |
| Wallpaper               | `wallpaper`       | `font-effect-wallpaper`       | Chrome, Safari                 |

**Note:** Some of the font effects (e.g. 3d) do not scale particularly well, and tend to look best when used with larger font sizes. Additionally, you might want to style the fonts further, such as changing the color of the text to match your page.

There are many more ways to style your fonts, and many things are possible through CSS. We are simply providing a few ideas to get you started. For more ideas, try Google searching "[css text effects](https://www.google.com/search?q=css+text+effects)" and browse through many of the ideas that are already on the web!

## Further reading

- See a complete list of font families provided by the Google Fonts API on [Google Fonts](https://fonts.google.com/).
- Learn how to use the [Web Font Loader](https://developers.google.com/fonts/docs/webfont_loader) to have more control over loading fonts.
- Learn more about how the Google Fonts API works on the [Technical Considerations](https://developers.google.com/fonts/docs/technical_considerations) page.

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see our [Site Policies](https://developers.google.com/terms/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

上次更新日期：五月 16, 2019

<https://developers.google.com/fonts/docs/getting_started?csw=1#Quick_Start>