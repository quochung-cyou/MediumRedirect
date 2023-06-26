// ==UserScript==
// @name     Medium Readable
// @description Redirect Medium to alternative front end so it can be read without vpn
// @version 1.0.0
// @match    *://*.medium.com/*
// @grant    none
// ==/UserScript==

function redirectURL() {
    let url = location.href
    url = url.replace(/\bwww\.\b/, "")
    if (window.location.href.includes(window.location.host)){
      url = window.location.href.replace(window.location.host,"libmedium.batsense.net")
      location.href = url
    }

} setInterval(redirectURL, 1000)