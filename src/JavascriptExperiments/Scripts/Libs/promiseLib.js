var $ = require("jquery");
var timeout = duration=>new Promise(resolve=>setTimeout(resolve, duration));
var jqDocReady = () =>new Promise($.bind());
var jqOne = (jq, events, selector) =>new Promise(resolve=>jq.one(events, selector, resolve));
var getJSON = url => new Promise(resolve=>$.getJSON(url,resolve));



module.exports = { timeout, jqDocReady, jqOne, getJSON };