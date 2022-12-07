// ==UserScript==
// @name          Archlinux.org Dark mode (WIP)
// @namespace     http://userstyles.org
// @description	  A dark mode for the archlinux website. Should work perfectly on the wiki pages and sort of work on the forum pages.
// @author        0x7C2f
// @homepage      https://github.com/GrimDevelopment/archwiki.js
// @include       http://archlinux.org/*
// @include       https://archlinux.org/*
// @include       http://*.archlinux.org/*
// @include       https://*.archlinux.org/*
// @include       http://www.archlinux.org/*
// @include       https://www.archlinux.org/*
// @include       http://*.www.archlinux.org/*
// @include       https://*.www.archlinux.org/*
// @run-at        document-start
// @version       0.20200419095955
// ==/UserScript==
(
  function() {
  var css = [
    "body {",
    "    background-color: #333;",
    "    ",
    "}",
    "#content, #punindex, .punwrap {",
    "    background-color: #333;",
    "    border-color: #666;",
    "}",
    " h1,  h2,  h3,  h4,  h5,  h6,  p,  li, .tocnumber, .mw-body, .parsoid-body, #mw-panel .portal h3, #footer li {",
    "    color: whitesmoke;",
    "}",
    "#content table, #content h1, #content h2, #content h3, #content h4, #content h5, #content pre, #content code, #content tt {",
    "    color: #eee;",
    "}",
    "",
    "div.vectorTabs li.selected {",
    "border-bottom: 1px solid transparent;",
    "}",
    "",
    "div.vectorTabs li.selected.selected, #content pre, #content code, #content tt, div.archwiki-template-message, .wikitable, div.archwiki-template-box.archwiki-template-box-note, .catlinks, .mw-editfont-monospace , #simpleSearch input {",
    "    background-color: #444;",
    "    color: whitesmoke;",
    "}",
    "div.archwiki-template-box[style=\"background-color: #f9faff; border-color:#d7dfe3; text-align: center;\"] {",
    "    background-color: #444 !important;",
    "    color: whitesmoke;",
    "}",
    ".wikitable > tr > th, .wikitable > * > tr > th {",
    "    background-color: #555;",
    "    color: whitesmoke;",
    "}",
    "#content a:not(.new), #mw-navigation li:not(.new) a:not(.new), #mw-panel li:not(.new) a:not(.new), #column-one li:not(.new) a:not(.new), #footer a:not(.new), .toctogglelabel {",
    "    color: #5cf !important;",
    "}",
    "#content a:not(.new):visited, #mw-panel li:not(.new) a:not(.new):visited, #p-navigation li:not(.new) a:not(.new):visited, #p-tb li:not(.new) a:not(.new):visited {",
    "    color: #99a !important;",
    "}",
    "#content .toc {",
    "    background-color: #444;",
    "}",
    "",
    "a.new, a.new:visited, #mw-navigation li.new a, #mw-navigation li.new a:visited {",
    "color: #f55 !important;",
    "}",
    "",
    "td[data-sort-value=\"1\"] {",
    "    background-color: #c55a !important;",
    "}",
    "td[data-sort-value=\"5\"] {",
    "    background-color: #5c5a !important;",
    "}",
    "td[data-sort-value=\"3\"] {",
    "    background-color: #cc5a !important;",
    "}",
    "div.archwiki-template-box.archwiki-template-box-tip {",
    "    background-color: #050;",
    "}",
    "#content dd {",
    "    color: white;",
    "}",
    "div.box {",
    "    background-color: #444;",
    "}"
  ].join("\n");
  if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
  } else if (typeof PRO_addStyle != "undefined") {
    PRO_addStyle(css);
  } else if (typeof addStyle != "undefined") {
    addStyle(css);
  } else {
    var node = document.createElement("style");
    node.type = "text/css";
    node.appendChild(document.createTextNode(css));
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
      heads[0].appendChild(node);
    } else {
      // no head yet, stick it whereever
      document.documentElement.appendChild(node);
    }
  }
}
);
