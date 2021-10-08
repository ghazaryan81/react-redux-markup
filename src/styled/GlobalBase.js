import { createGlobalStyle } from "styled-components";
export const GlobalBase = createGlobalStyle`

:root {

--red:#ff0000;
}

*,
*::before,
*::after {
 box-sizing: border-box;
}

a {
 background: transparent;
 outline: none;
}

*,
*:focus,
*:active,
*:hover {
 outline: none;
}

* {
 margin: 0;
 padding: 0;
 list-style: none;
 font: inherit;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
 display: block;
}

audio,
canvas,
progress,
video {
 display: inline-block;
 vertical-align: baseline;
}

audio:not([controls]) {
 display: none;
}

[hidden],
template {
 display: none;
}

html {
 text-size-adjust: 100%;
 cursor: default;
 -webkit-focus-ring-color: rgba(#b68484, 0);
 -webkit-tap-highlight-color: rgba(#000, 0);
}

body {
 font-size: 100%;
 line-height: 1;

 -moz-osx-font-smoothing: grayscale;
}

a {
 background: transparent;
}

*:focus,
*:active,
*:hover {
 outline: none;
}

hr {
 box-sizing: content-box;
}

ol,
ul {
 list-style: none;
}

pre {
 white-space: pre-wrap;
 tab-size: 4;
}

img {
 border: none;
}

button,
input {
 line-height: normal;
}

button,
select {
 text-transform: none;
}

button {
 overflow: visible;
}

button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
 cursor: pointer;
 appearance: button;
}

button[disabled],
html input[disabled] {
 cursor: default;
}

input[type="checkbox"],
input[type="radio"] {
 box-sizing: border-box;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
 height: auto;
}

input[type="search"] {
 box-sizing: content-box;
 appearance: textfield;
}

input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
 appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
 padding: 0;
 border: none;
}

input,
select,
textarea {
 border-radius: 0;
 box-shadow: none;
}

textarea {
 overflow: auto;
 vertical-align: top;
 resize: none;
}

input,
textarea {
 user-select: text;
}

table {
 border-spacing: 0;
 border-collapse: collapse;
}`;
