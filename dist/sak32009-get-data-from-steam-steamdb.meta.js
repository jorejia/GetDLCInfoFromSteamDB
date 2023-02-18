// ==UserScript==
// @name         Get Data from Steam / SteamDB
// @namespace    sak32009-gaxvyvrguokgtog
// @version      4.6.5
// @author       jorejia (forked from Sak32009)
// @description  Get Data from Steam / SteamDB (ex Get DLC Info from SteamDB) is a userscript that extracts all data needed to generate DLCs formats and depot.sha1 for Steam games.
// @license      MIT
// @homepage     https://github.com/jorejia/GetDLCInfoFromSteamDB/
// @homepageURL  https://github.com/jorejia/GetDLCInfoFromSteamDB/
// @source       github:Sak32009/GetDLCInfoFromSteamDB
// @supportURL   https://github.com/Sak32009/GetDLCInfoFromSteamDB/issues/
// @downloadURL  https://raw.githack.com/jorejia/GetDLCInfoFromSteamDB/master/dist/sak32009-get-data-from-steam-steamdb.user.js
// @updateURL    https://raw.githack.com/jorejia/GetDLCInfoFromSteamDB/master/dist/sak32009-get-data-from-steam-steamdb.meta.js
// @match        *://steamdb.info/app/*
// @match        *://steamdb.info/depot/*
// @match        *://store.steampowered.com/app/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/js/bootstrap.bundle.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/sprintf/1.1.2/sprintf.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js
// @grant        unsafeWindow
// @updatedAT    Sat, 18 Feb 2023 13:15:37 GMT
// ==/UserScript==