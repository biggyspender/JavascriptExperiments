export var memoize = function () {
    var func=this;
    var stringifyJson = JSON.stringify,
        cache = {};

    var cachedfun = function () {
        var hash = stringifyJson(arguments);
        return (hash in cache) ? cache[hash] : cache[hash] = func.apply(this, arguments);
    };

    cachedfun.__cache = (function () {
        cache.remove || (cache.remove = function () {
            var hash = stringifyJson(arguments);
            return (delete cache[hash]);
        });
        return cache;
    }).call(this);

    return cachedfun;
};
