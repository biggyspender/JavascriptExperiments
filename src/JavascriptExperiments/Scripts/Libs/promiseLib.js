import $ from "jquery";
export var timeout = duration=>new Promise(resolve=>setTimeout(resolve, duration));
export var jqDocReady = () =>new Promise($.bind($));
export var jqOne = (jq, events, selector) =>new Promise(resolve=>jq.one(events, selector, resolve));
export var getJSON = url => new Promise(resolve=>$.getJSON(url, resolve));



