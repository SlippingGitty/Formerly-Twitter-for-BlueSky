// ==UserScript==
// @name        Twitter icons for Bsky
// @description Assortment of Twitter favicons for BlueSky
// @match       https://bsky.app/*
// @grant       GM_registerMenuCommand
// @grant       GM_setValue
// @grant       GM_getValue
// @version     0.1
// @author      vozercozer
// ==/UserScript==

// i never make userscripts, lemme know if i did this right. idk shit about js lol.
(() => {
  'use strict';
  const favicons = {
    Twitter: 'https://files.catbox.moe/52bjpd.ico',
    'Twitter Classic': 'https://files.catbox.moe/dhlzoa.ico',
    X: 'https://files.catbox.moe/pkakac.ico',
    'BlueSky Classic-ified': 'https://files.catbox.moe/zftpyz.ico',
  };
  const updateFavicon = (key) => {
    document.head.querySelectorAll("link[rel*='icon']").forEach(link => link.remove());
    document.head.appendChild(Object.assign(document.createElement('link'), {
      rel: 'icon', href: favicons[key]
    }));
  };
  Object.entries(favicons).forEach(([key]) =>
    GM_registerMenuCommand(`Set Favicon: ${key}`, () => {
      GM_setValue('selectedFavicon', key);
      updateFavicon(key);
      alert(`Favicon changed to: ${key}`);
    })
  );
  updateFavicon(GM_getValue('selectedFavicon', 'Twitter'));
})();
