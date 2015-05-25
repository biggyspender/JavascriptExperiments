function isNonEmptyArrayLike(obj) {
    try { // don't bother with `typeof` - just access `length` and `catch`
        return obj.length > 0 && '0' in Object(obj);
    } catch (e) {
        return false;
    }
}

export function flatten(arr) {

    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(isNonEmptyArrayLike(toFlatten) ? flatten(Array.prototype.slice.call(toFlatten)) : toFlatten);
    }, []);
}