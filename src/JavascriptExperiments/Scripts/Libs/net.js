import load from "scriptloader"

function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

export function getJSON(url) {
    return new Promise(function (resolve, reject) {
        var req = createCORSRequest('GET', url);
        req.setRequestHeader('Accept', 'application/json');
        req.onload = function () {
            if (req.status == 200) {
                resolve(JSON.parse(req.response));
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = function () {
            reject(Error("Network Error"));
        };
        req.send();
    });
}

export var loadScript = url => new Promise((resolve,reject)=>{
    load(url,(err,script)=>{
        if(err){
            reject(err)
        }
        else{
            resolve(script);
        }
    });
});
