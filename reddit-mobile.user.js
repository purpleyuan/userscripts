// ==UserScript==
// @name        Old Reddit Mobile
// @namespace   Violentmonkey Scripts
// @match       *://old.reddit.com/*
// @grant       none
// @version     1.0
// @author      -
// @description 1/3/2024, 12:15:09 PM
// ==/UserScript==

const styles = new CSSStyleSheet();
styles.replaceSync(`html,
    .flat-list.buttons {
        font-size: medium;
    }
`);

document.adoptedStyleSheets = [...document.adoptedStyleSheets, styles];
