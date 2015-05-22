var timeout = duration=>new Promise(resolve=>setTimeout(resolve, duration));
module.exports = timeout;