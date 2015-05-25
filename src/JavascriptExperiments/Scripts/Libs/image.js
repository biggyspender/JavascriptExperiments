import {loadScript} from "./net"
import {flatten} from "./arrayUtils"

var images=[];
function getImageSizeAsync(imgSrc) {
    return new Promise((resolve, reject) => {
        var newImg = new Image();
        images.push(newImg);
        newImg.onload = function () {
            var height = newImg.height;
            var width = newImg.width;
            resolve({
                width: width,
                height: height
            });
        }
        newImg.src = imgSrc;
    });
}

function handleNewImageElement(elem,cb) {
    if (elem.nodeType != 1) return;
    var elems = (elem.localName == "img") ? [elem] : Array.prototype.slice.call(elem.getElementsByTagName("img"));
    elems.forEach(elem => {
        //console.log(elem);
        if (elem.complete) {
            getImageSizeAsync(elem.src).then(size => {
                cb(elem, size);
            });
        } else {
            var f;
            f = e => {
                elem.removeEventListener("load", f);
                getImageSizeAsync(elem.src).then(size => {
                    cb(elem, size);
                });
            }
            elem.addEventListener("load", f);

        }
    });

}


export async function monitorImages(cb) {
    await loadScript("//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/0.6.1/webcomponents-lite.min.js");
    var existingImages = Array.prototype.slice.call(document.getElementsByTagName("img"));
    existingImages.forEach(im=>handleNewImageElement(im,cb));
    var mo = new MutationObserver(records => {
        flatten(records.filter(r => r.type == "childList").map(r => r.addedNodes)).forEach(handleNewImageElement);
        records
          .filter(r => r.type == "attributes" && r.target.nodeType == 1 && r.target.localName == 'img' && !(r.target.src == null || r.target.src == ""))
          .map(r => r.target)
          .forEach(handleNewImageElement);
    });
    mo.observe(document.body, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["src"]
    });
}