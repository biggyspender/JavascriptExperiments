import {docReady} from "./Libs/promiseLib"
import {getJSON} from "./Libs/net"
import {monitorImages} from "./Libs/image"
import {memoize} from "./Libs/memoize"

var get=getJSON::memoize();

export async function main()
{
    await docReady();
    var urlMap={};
    monitorImages(async (elem, originalSize) => {
        if (originalSize.width < 200 || originalSize.height < 200){
            return;
        }
        var url = elem.src.toString();
        elem.style.filter = "sepia(100%)";
        elem.setAttribute("data-tps", "true");
        //var hash=await get("http://localhost:9000/api/ImageThumbprint?url=" + encodeURIComponent(elem.src));
        //addBuyButtons(elem,hash,url)
    });
}

function addBuyButtons(elem,hash,url){
    var addButton = document.createElement('button');
    var addButtonText = document.createTextNode('add to cart');
    addButton.appendChild(addButtonText);
    var left = elem.offsetLeft;
    var top = elem.offsetTop;
    var height = elem.offsetHeight;
    var width = elem.offsetWidth;
    elem.parentElement.insertBefore(addButton, elem.nextSibling);
    addButton.style.position = 'absolute';
    var aHeight = addButton.offsetHeight;
    var aWidth = addButton.offsetWidth;
    addButton.style.top = top + height - aHeight - 10 + 'px';
    addButton.style.left = left + width - aWidth - 10 + 'px';
    addButton.addEventListener('click', e => {
        alert(hash + " : " + url);
        if (!e)
            e = window.event;
        e.cancelBubble = true;
        if (e.stopPropagation)
            e.stopPropagation();
        if (e.preventDefault)
            e.preventDefault();
        ;
    });
}

